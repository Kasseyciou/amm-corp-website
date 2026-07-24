const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");
const languageToggle = document.querySelector("[data-language-toggle]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = Object.freeze({
  "nav-menu": "選單",
  "nav-home": "首頁",
  "nav-about": "公司簡介",
  "nav-services": "我們的服務",
  "nav-regulatory": "醫材法規",
  "nav-products": "代理產品",
  "nav-contact": "聯絡資訊",
  "company-name": "成豐醫材有限公司",
  "footer-contact-label": "聯絡資訊",
  "footer-company": "成豐醫材有限公司",
  "footer-address": "新北市三重區五華街260號6樓",
  "footer-phone": "電話：886-2-28559728",
  "footer-mobile": "手機/WhatsApp：+886-956158240",
  "footer-email": "Email: advanced_mm1@outlook.com",
  "about-heading": "公司簡介",
  "about-mission": "成豐醫材有限公司成立於2016年，秉持明確的使命：將高品質且具價格競爭力的醫療器材引進台灣，讓患者在治療選擇上擁有更多元且實際的選項。",
  "home-about-title": "成立於2016年，秉持明確的使命。",
  "home-founder-experience": "在創立成豐醫材有限公司之前，我曾於台灣某醫療器材公司擔任業務總監超過十年。",
  "home-contact-eyebrow": "聯絡資訊",
  "home-contact-title": "我們持續尋找具創新技術與全新應用的醫療產品。",
  "home-contact-button": "聯絡成豐醫材",
  "about-background-nav": "公司簡介",
  "company-profile-title": "公司簡介",
  "about-background-one": "在創立成豐醫材有限公司之前，我曾於台灣某醫療器材公司擔任業務總監超過十年。在此期間，我深入了解台灣醫療器材認證流程(QSD與查驗登記)、進口法規、通路運作，以及市場需求的演變。同時，我也觀察到市場中存在一個結構性的缺口：可供選擇的品牌有限，患者在技術、品質與價格方面往往缺乏足夠的替代方案。",
  "about-background-two": "正是基於這樣的體認，促使我於2016年創立成豐醫材有限公司。公司致力於引進並推廣兼具臨床效益與合理價格的醫療器材，期望讓台灣的醫療機構與患者都能享有更均衡且多元的選擇。",
  "growth-history-title": "成長歷史",
  "growth-history-one": "在過去十多年的發展歷程中，我們的道路並非一帆風順。",
  "growth-history-two": "我們曾面臨各種嚴峻的考驗與挑戰，包括艱困的市場環境、法規變動，以及未必如預期發展的商業決策。在某些關鍵時刻，公司甚至需要正視自身是否能持續營運的重大課題。",
  "growth-history-three": "同時，我們也經歷了穩定成長的階段，並在台灣醫療器材領域達成多項重要里程碑。這些高低起伏的歷程，累積了豐富且貼近實務的案例與經驗，對我們的團隊與合作夥伴而言，皆具有高度的學習與參考價值。",
  "growth-history-four": "正是這些經歷，造就了今日的成豐醫材有限公司。一家具備風險意識、重視長期承諾，並願意投入時間與資源，在台灣市場建立永續品牌價值的公司。",
  "milestones-nav": "里程碑",
  "milestones-heading": "公司發展里程碑",
  "teamwork-title": "團隊合作",
  "teamwork-one": "我們從過去的發展中深刻體會到一件重要的事：企業的成長從來不可能僅靠個人完成。",
  "teamwork-two": "今日的成豐醫材有限公司，是由一群秉持共同信念的團隊所成就——我們相信，患者應該享有更優質醫療技術的可近性，而醫療院所與臨床醫師也應擁有一個專業且值得信賴的在地合作夥伴。",
  "teamwork-three": "我們的團隊成員一路走來，無論是在艱難時期或成長階段，皆共同投入並貢獻其在法規事務、市場開發、臨床支援及日常營運等領域的專業能力。這份集體努力，正是公司今日規模與聲譽的基石。",
  "teamwork-four": "對於國際製造商而言，我們的創業歷程也說明了我們對合作關係的看法：",
  "teamwork-point-one": "我們深知產品從註冊取得到實際臨床應用之間的漫長過程；",
  "teamwork-point-two": "我們重視病患治療成效與醫療院所經營效益之間的平衡；",
  "teamwork-point-three": "我們更相信建立透明且長期的合作關係，而非短期的代理交易。",
  "teamwork-conclusion": "這正是成豐醫材有限公司發展背景，也持續指引著我們如何與合作夥伴攜手前行，以及未來的發展方向。",
  "values-title": "核心價值與願景",
  "values-one": "作為國際醫療器材企業在台灣值得信賴的合作夥伴，我們專注於誠信執行、深入的市場洞察，以及與關鍵客戶建立長期穩固的合作關係。透過緊密協作、開放溝通、資訊透明與相互尊重，我們與合作夥伴共同創造市場價值與綜效。",
  "values-two": "我們的目標是引進能夠提升醫療品質、並回應台灣臨床與公共健康未被滿足需求的產品，特別著重於自費醫療項目。在公司內部，我們亦秉持並獎勵高績效表現，並堅守最高標準的商業倫理。",
  "organization-title": "公司架構",
  "organization-license-nav": "公司架構與GDP證照",
  "organization-general-manager": "總經理／法人代表",
  "organization-sales": "業務部",
  "organization-medical-device": "醫材部",
  "organization-purchasing": "採購部",
  "organization-logistics": "外包倉儲／冷鍊系統",
  "gdp-license-title": "GDP證照",
  "gdp-heading": "台灣醫療器材優良運銷準則",
  "gdp-one": "台灣醫療器材優良運銷準則（GDP）是由衛福部食藥署（TFDA）所制定的法規架構，旨在確保醫療器材在進口、儲存、運送及流通各階段，均能維持安全性、有效性與一致的品質。對於特定高風險等級的醫療器材，進口商與經銷商必須建立完整且文件化的 GDP 品質管理系統，通過 TFDA 查核，並取得醫療器材運銷許可證後，方得從事批發、進口或出口等相關業務。",
  "gdp-two": "本公司已取得台灣醫療器材 GDP 認證（證書字號：GDP0253），充分展現我們在醫療器材優良運銷準則上的完全符合性，以及對品質管理與病患安全的高度承諾。",
  "services-eyebrow": "我們的服務",
  "services-title": "全方位專業服務",
  "services-lead": "為合作夥伴提供全方位的專業服務",
  "services-pre-nav": "產品上市前階段",
  "services-launch-nav": "產品上市階段",
  "services-post-nav": "產品上市後階段",
  "services-pre-eyebrow": "01 · 我們的服務",
  "services-pre-title": "產品上市前階段",
  "services-pre-one": "產品註冊",
  "services-pre-two": "制定市場進入與商業策略",
  "services-pre-three": "識別並接洽潛在的關鍵意見領袖（KOL），以進行早期臨床評估",
  "services-pre-four": "競爭者分析",
  "services-launch-eyebrow": "02 · 我們的服務",
  "services-launch-title": "產品上市階段",
  "services-launch-one": "定價策略制定",
  "services-launch-two": "執行已制定的商業策略",
  "services-launch-three": "業務銷售訓練",
  "services-post-eyebrow": "03 · 我們的服務",
  "services-post-title": "產品上市後階段",
  "services-post-one": "收集市場趨勢與銷售活動資訊",
  "services-post-two": "根據市場調查結果，定期監控銷售情況",
  "services-post-three": "根據當地市場需求，與製造商合作調整產品組合、包裝或延伸產品線",
  "services-post-four": "監測產品表現，並依照法規要求支持上市後監測",
  "products-eyebrow": "代理產品",
  "products-title": "代理產品",
  "products-count": "代理產品",
  "products-category-one": "產品類別 01",
  "products-category-two": "產品類別 02",
  "products-hemostatic": "手術止血",
  "products-hernia-mesh": "人工網片",
  "product-category-label": "產品類別",
  "product-origin-label": "原產國",
  "product-classification-label": "產品分類",
  "product-emosist-meta": "義大利 · 第3類",
  "product-emosist-name": "「易莫斯」止血氧化纖維",
  "product-emosist-category": "手術止血",
  "product-emosist-origin": "義大利",
  "product-emosist-classification": "3",
  "product-axiostat-meta": "印度 · 第2類",
  "product-axiostat-name": "「阿克西」幾丁聚醣止血敷料",
  "product-axiostat-category": "手術／外傷止血",
  "product-axiostat-origin": "印度",
  "product-axiostat-classification": "2",
  "product-tiolene-meta": "印度 · 第2類",
  "product-tiolene-name": "「太靈」鈦化聚丙烯網片",
  "product-tiolene-category": "人工網片",
  "product-tiolene-origin": "印度",
  "product-tiolene-classification": "2",
  "product-oozfix-meta": "南韓 · 第3類",
  "product-oozfix-name": "「歐斯菲」可吸收止血粉",
  "product-oozfix-category": "手術止血",
  "product-oozfix-origin": "南韓",
  "product-oozfix-classification": "3",
  "home-products-title": "現有產品組合",
  "home-products-button": "查看產品",
  "home-product-emosist-meta": "01 · 義大利 · 第3類",
  "home-product-axiostat-meta": "02 · 印度 · 第2類",
  "home-product-tiolene-meta": "03 · 印度 · 第2類",
  "home-product-oozfix-meta": "04 · 南韓 · 第3類",
});

const translatableNodes = [...document.querySelectorAll("[data-i18n]")];
translatableNodes.forEach((node) => {
  node.dataset.i18nEnglish = node.textContent.trim();
});

const languagePageLinks = [...document.querySelectorAll('a[href$=".html"]')];
languagePageLinks.forEach((link) => {
  link.dataset.languageBaseHref = link.getAttribute("href");
});

let currentLanguage = window.location.hash.toLowerCase() === "#tw" ? "tw" : "en";

const latinTextPattern = /[A-Za-z]/;
const hanTextPattern = /[\u3400-\u9fff]/;
const setInlineEnglishLanguage = () => {
  document.querySelectorAll("p, h1, h2, h3, h4, li, a, button, dt, dd, small, strong, span").forEach((node) => {
    if (node.children.length) return;

    const copy = node.textContent.trim();
    const shouldUseEnglishFont = currentLanguage === "tw"
      && latinTextPattern.test(copy)
      && !hanTextPattern.test(copy);

    if (shouldUseEnglishFont) {
      node.lang = "en";
      node.dataset.autoLanguage = "en";
    } else if (node.dataset.autoLanguage === "en") {
      node.removeAttribute("lang");
      delete node.dataset.autoLanguage;
    }
  });
};

const applyLanguage = (language, updateUrl = false) => {
  currentLanguage = language === "tw" ? "tw" : "en";
  document.documentElement.lang = currentLanguage === "tw" ? "zh-Hant" : "en";
  document.body.dataset.language = currentLanguage;

  translatableNodes.forEach((node) => {
    const translatedCopy = translations[node.dataset.i18n];
    node.textContent = currentLanguage === "tw" && translatedCopy
      ? translatedCopy
      : node.dataset.i18nEnglish;
  });

  setInlineEnglishLanguage();

  languagePageLinks.forEach((link) => {
    const baseHref = link.dataset.languageBaseHref;
    link.setAttribute("href", currentLanguage === "tw" ? `${baseHref}#tw` : baseHref);
  });

  if (languageToggle) {
    const isTraditionalChinese = currentLanguage === "tw";
    languageToggle.setAttribute("aria-pressed", String(isTraditionalChinese));
    languageToggle.setAttribute("aria-label", isTraditionalChinese ? "Switch to English" : "Switch to Chinese");
  }

  if (updateUrl) {
    const nextUrl = new URL(window.location.href);
    nextUrl.hash = currentLanguage === "tw" ? "tw" : "";
    try {
      window.history.replaceState(null, "", nextUrl.href);
    } catch {
      window.location.hash = currentLanguage === "tw" ? "tw" : "";
    }
  }

  window.dispatchEvent(new Event("amm:languagechange"));
};

applyLanguage(currentLanguage);

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "tw" ? "en" : "tw", true);
  menuToggle?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (currentLanguage !== "tw") return;
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    if (link.classList.contains("skip-link")) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
});

window.addEventListener("hashchange", () => {
  applyLanguage(window.location.hash.toLowerCase() === "#tw" ? "tw" : "en");
});

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

  const revealActiveLink = (activeLink) => {
    if (anchorNav.scrollWidth <= anchorNav.clientWidth) return;

    const navRect = anchorNav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const safeInset = 16;
    const isFullyVisible = linkRect.left >= navRect.left + safeInset
      && linkRect.right <= navRect.right - safeInset;

    if (isFullyVisible) return;

    const nextScrollLeft = anchorNav.scrollLeft + linkRect.left - navRect.left - safeInset;
    anchorNav.scrollTo({
      left: Math.max(0, nextScrollLeft),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

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
    revealActiveLink(activeLink);
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
  window.addEventListener("amm:languagechange", scheduleUpdate);
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
