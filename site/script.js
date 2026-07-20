const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll(".anchor-nav").forEach((anchorNav) => {
  const items = [...anchorNav.querySelectorAll('a[href^="#"]')]
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  if (!items.length) return;

  const setActiveLink = (activeLink) => {
    items.forEach(({ link }) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateActiveLink = () => {
    const headerHeight = header?.offsetHeight ?? 0;
    const sectionMarker = window.scrollY + headerHeight + anchorNav.offsetHeight + 32;
    let activeItem = items[0];
    let activeTop = -Infinity;

    items.forEach((item) => {
      const targetTop = item.target.getBoundingClientRect().top + window.scrollY;
      if (targetTop <= sectionMarker && targetTop > activeTop) {
        activeItem = item;
        activeTop = targetTop;
      }
    });

    setActiveLink(activeItem.link);
  };

  let isScheduled = false;
  const scheduleUpdate = () => {
    if (isScheduled) return;
    isScheduled = true;
    window.requestAnimationFrame(() => {
      updateActiveLink();
      isScheduled = false;
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
});

if (menuToggle && navigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    navigation.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const revealItems = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}
