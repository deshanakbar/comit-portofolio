const $ = (selector) => document.querySelector(selector);

// INTRO
const introScreen = $("#intro-screen");
const introLanguage = $("#intro-language");
const introProgress = $("#intro-progress");
const introStatus = $("#intro-status");
const skipIntro = $("#skip-intro");

const languages = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Python", "Java",
  "Git", "GitHub", "SQL", "Linux"
];

let introFinished = false;
let introStart;
const introDuration = 4200;

function finishIntro() {
  if (introFinished) return;
  introFinished = true;

  introScreen.classList.add("finished");
  document.body.classList.remove("intro-active");
}

function animateIntro(timestamp) {
  if (introFinished) return;

  if (!introStart) introStart = timestamp;

  const elapsed = timestamp - introStart;
  const progress = Math.min(elapsed / introDuration, 1);
  const index = Math.min(
    Math.floor(progress * languages.length),
    languages.length - 1
  );

  introLanguage.textContent = `Loading ${languages[index]}...`;
  introProgress.style.width = `${progress * 100}%`;
  introStatus.textContent =
    progress < 1 ? "Loading modules..." : "Ready!";

  if (progress < 1) {
    requestAnimationFrame(animateIntro);
  } else {
    setTimeout(finishIntro, 400);
  }
}

skipIntro.addEventListener("click", finishIntro);
document.body.classList.add("intro-active");
requestAnimationFrame(animateIntro);

// THEME
$("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  $("#themeBtn").textContent =
    document.body.classList.contains("light") ? "☾" : "☼";
});

// TERJEMAHAN HALAMAN
const translations = {
  id: {
    greeting: "Halo, saya Deshan",
    role: "Mahasiswa Sistem Informasi",
    intro: "Saya sedang mempelajari pemrograman dan pengembangan website. Saya tertarik membangun sesuatu yang bermanfaat, memecahkan masalah, dan terus belajar teknologi baru.",
    terminal: "Mahasiswa Sistem Informasi",
    aboutTitle: "Teknologi yang sedang saya pelajari",
    manifesto: "Halo, saya Deshan. Seorang mahasiswa Sistem Informasi yang sedang mengembangkan kemampuan dalam pemrograman, membangun aplikasi, dan mempelajari teknologi. Saya percaya bahwa kode yang baik dapat membantu memecahkan masalah nyata.",
    status: "Status: Sedang Belajar",
    skills: "Teknologi yang Dipelajari",
    projects: "Proyek Unggulan",
    allProjects: "Lihat Semua Proyek",
    portfolio: "Website Portofolio",
    portfolioDesc: "Website portofolio pribadi untuk memperkenalkan diri dan menampilkan perjalanan belajar pemrograman.",
    python: "Program Python",
    pythonDesc: "Kumpulan latihan Python, mulai dari variabel, percabangan, perulangan, list, hingga fungsi.",
    articles: "Artikel Teknis Terbaru",
    article1: "Memulai Pengembangan Website dari Dasar",
    article1Desc: "Catatan perjalanan belajar HTML, CSS, dan JavaScript untuk membangun website pertama.",
    article2: "Belajar Logika Pemrograman dengan Python",
    article2Desc: "Ringkasan latihan variabel, percabangan, perulangan, list, dan fungsi.",
    contactTitle: "Punya ide proyek atau kebutuhan aplikasi?",
    contactDesc: "Saya terbuka untuk belajar bersama, berkolaborasi dalam proyek, dan mengeksplorasi hal teknis yang menantang.",
    email: "Kirim Email",
    linkedin: "Terhubung di LinkedIn",
    terminalButton: "›_ Buka Terminal Kontak",
    scroll: "Gulir ke bawah ↓",
    footer: "Dibuat dengan HTML, CSS & JavaScript"
  },
  en: {
    greeting: "Hello, I'm Deshan",
    role: "Information Systems Student",
    intro: "I'm learning programming and web development. I'm interested in building useful things, solving problems, and exploring new technologies.",
    terminal: "Information Systems Student",
    aboutTitle: "Technologies I'm Learning",
    manifesto: "Hello, I'm Deshan, an Information Systems student developing my programming skills, building applications, and exploring technology. I believe good code can help solve real-world problems.",
    status: "Status: Currently Learning",
    skills: "Technologies I'm Learning",
    projects: "Featured Projects",
    allProjects: "View All Projects",
    portfolio: "Personal Portfolio",
    portfolioDesc: "A personal portfolio website to introduce myself and showcase my programming journey.",
    python: "Python Programs",
    pythonDesc: "Python practice covering variables, conditions, loops, lists, and functions.",
    articles: "Latest Technical Articles",
    article1: "Getting Started with Web Development",
    article1Desc: "Notes from learning HTML, CSS, and JavaScript to build my first website.",
    article2: "Learning Programming Logic with Python",
    article2Desc: "Practice notes on variables, conditions, loops, lists, and functions.",
    contactTitle: "Have a project idea?",
    contactDesc: "I'm open to learning together, collaborating on projects, and exploring interesting technical challenges.",
    email: "Send Email",
    linkedin: "Connect on LinkedIn",
    terminalButton: "›_ Open Contact Terminal",
    scroll: "Scroll Down ↓",
    footer: "Built with HTML, CSS & JavaScript"
  },
  ja: {
    greeting: "こんにちは、Deshanです",
    role: "情報システム専攻の学生",
    intro: "プログラミングとウェブ開発を学んでいます。役立つものを作り、問題を解決し、新しい技術を探求することに興味があります。",
    terminal: "情報システム専攻の学生",
    aboutTitle: "学習中の技術",
    manifesto: "こんにちは、Deshanです。プログラミングやアプリ開発を学ぶ情報システム専攻の学生です。良いコードは現実の問題を解決できると信じています。",
    status: "ステータス：学習中",
    skills: "学習中の技術",
    projects: "主なプロジェクト",
    allProjects: "すべてのプロジェクト",
    portfolio: "ポートフォリオサイト",
    portfolioDesc: "自己紹介とプログラミング学習の成果を紹介するウェブサイトです。",
    python: "Pythonプログラム",
    pythonDesc: "変数、条件分岐、ループ、リスト、関数の練習です。",
    articles: "最新の技術記事",
    article1: "ウェブ開発の基礎",
    article1Desc: "HTML、CSS、JavaScriptを学んだ記録です。",
    article2: "Pythonで学ぶプログラミングの論理",
    article2Desc: "変数、条件分岐、ループ、リスト、関数の学習記録です。",
    contactTitle: "プロジェクトのアイデアがありますか？",
    contactDesc: "一緒に学び、プロジェクトに参加し、新しい技術に挑戦したいです。",
    email: "メールを送る",
    linkedin: "LinkedInでつながる",
    terminalButton: "›_ 連絡用ターミナルを開く",
    scroll: "下へスクロール ↓",
    footer: "HTML、CSS、JavaScriptで制作"
  },
  ko: {
    greeting: "안녕하세요, Deshan입니다",
    role: "정보 시스템 전공 학생",
    intro: "프로그래밍과 웹 개발을 배우고 있습니다. 유용한 것을 만들고 문제를 해결하며 새로운 기술을 탐구하는 데 관심이 있습니다.",
    terminal: "정보 시스템 전공 학생",
    aboutTitle: "배우고 있는 기술",
    manifesto: "안녕하세요, Deshan입니다. 프로그래밍과 앱 개발을 배우는 정보 시스템 전공 학생입니다. 좋은 코드는 실제 문제를 해결할 수 있다고 믿습니다.",
    status: "상태: 학습 중",
    skills: "배우고 있는 기술",
    projects: "주요 프로젝트",
    allProjects: "모든 프로젝트 보기",
    portfolio: "개인 포트폴리오",
    portfolioDesc: "자기소개와 프로그래밍 학습 과정을 보여주는 웹사이트입니다.",
    python: "Python 프로그램",
    pythonDesc: "변수, 조건문, 반복문, 리스트, 함수 연습입니다.",
    articles: "최신 기술 글",
    article1: "웹 개발 시작하기",
    article1Desc: "HTML, CSS, JavaScript 학습 기록입니다.",
    article2: "Python으로 프로그래밍 논리 배우기",
    article2Desc: "변수, 조건문, 반복문, 리스트, 함수 학습 기록입니다.",
    contactTitle: "프로젝트 아이디어가 있나요?",
    contactDesc: "함께 배우고 프로젝트에 참여하며 새로운 기술에 도전하고 싶습니다.",
    email: "이메일 보내기",
    linkedin: "LinkedIn 연결",
    terminalButton: "›_ 연락 터미널 열기",
    scroll: "아래로 스크롤 ↓",
    footer: "HTML, CSS, JavaScript로 제작"
  },
  es: {
    greeting: "Hola, soy Deshan",
    role: "Estudiante de Sistemas de Información",
    intro: "Estoy aprendiendo programación y desarrollo web. Me interesa crear cosas útiles, resolver problemas y explorar nuevas tecnologías.",
    terminal: "Estudiante de Sistemas de Información",
    aboutTitle: "Tecnologías que estoy aprendiendo",
    manifesto: "Hola, soy Deshan, estudiante de Sistemas de Información. Estoy desarrollando mis habilidades de programación y aprendiendo a crear aplicaciones. Creo que un buen código puede resolver problemas reales.",
    status: "Estado: Aprendiendo",
    skills: "Tecnologías que estoy aprendiendo",
    projects: "Proyectos destacados",
    allProjects: "Ver todos los proyectos",
    portfolio: "Portafolio personal",
    portfolioDesc: "Un sitio web para presentarme y mostrar mi aprendizaje de programación.",
    python: "Programas en Python",
    pythonDesc: "Ejercicios de variables, condiciones, bucles, listas y funciones.",
    articles: "Artículos técnicos recientes",
    article1: "Primeros pasos en desarrollo web",
    article1Desc: "Notas sobre HTML, CSS y JavaScript para crear mi primer sitio web.",
    article2: "Lógica de programación con Python",
    article2Desc: "Prácticas de variables, condiciones, bucles, listas y funciones.",
    contactTitle: "¿Tienes una idea de proyecto?",
    contactDesc: "Me interesa aprender en equipo, colaborar en proyectos y explorar nuevos retos técnicos.",
    email: "Enviar correo",
    linkedin: "Conectar en LinkedIn",
    terminalButton: "›_ Abrir terminal de contacto",
    scroll: "Desplazar hacia abajo ↓",
    footer: "Creado con HTML, CSS y JavaScript"
  }
};

// Simpan teks asli agar elemen yang belum diterjemahkan
// tidak hilang saat bahasa diganti.
const originalText = new Map();

function rememberText(selector) {
  const element = $(selector);
  if (element) originalText.set(selector, element.textContent);
}

const textSelectors = [
  "#greeting", "#role", "#intro", ".terminal-output",
  ".manifesto-text", ".status p:first-child",
  "#skills .section-heading h2",
  "#projects .section-heading h2",
  "#projects .section-heading a",
  "#projects .project-card:nth-of-type(1) h3",
  "#projects .project-card:nth-of-type(1) > p",
  "#projects .project-card:nth-of-type(2) h3",
  "#projects .project-card:nth-of-type(2) > p",
  "#articles .section-heading h2",
  "#articles .article-card:nth-of-type(1) h3",
  "#articles .article-card:nth-of-type(1) > p:nth-of-type(2)",
  "#articles .article-card:nth-of-type(2) h3",
  "#articles .article-card:nth-of-type(2) > p:nth-of-type(2)",
  "#contact h2", "#contact > p",
  "#contact .email-button", "#contact .contact-link",
  "footer span:last-of-type"
];

textSelectors.forEach(rememberText);

function setText(selector, value) {
  const element = $(selector);
  if (element && value) element.textContent = value;
}

function setLanguage(lang) {
  const t = translations[lang] || translations.id;
  document.documentElement.lang = lang;

  setText("#greeting", t.greeting);
  setText("#role", t.role);
  setText("#intro", t.intro);
  setText(".terminal-output", t.terminal);
  setText(".manifesto-text", t.manifesto);
  setText(".status p:first-child", "● // " + t.status);
  setText("#skills .section-heading h2", t.skills);
  setText("#projects .section-heading h2", "▣ " + t.projects);
  setText("#projects .section-heading a", t.allProjects);
  setText("#projects .project-card:nth-of-type(1) h3", t.portfolio);
  setText("#projects .project-card:nth-of-type(1) > p", t.portfolioDesc);
  setText("#projects .project-card:nth-of-type(2) h3", t.python);
  setText("#projects .project-card:nth-of-type(2) > p", t.pythonDesc);
  setText("#articles .section-heading h2", "▤ " + t.articles);
  setText("#articles .article-card:nth-of-type(1) h3", t.article1);
  setText("#articles .article-card:nth-of-type(1) > p:nth-of-type(2)", t.article1Desc);
  setText("#articles .article-card:nth-of-type(2) h3", t.article2);
  setText("#articles .article-card:nth-of-type(2) > p:nth-of-type(2)", t.article2Desc);
  setText("#contact h2", t.contactTitle);
  setText("#contact > p", t.contactDesc);
  setText("#contact .email-button", "✉ " + t.email);
  setText("#contact .contact-link", t.linkedin);
  setText("#terminalBtn", t.terminalButton);
  setText("footer span:last-of-type", t.footer);
}

$("#languageSelect").addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

// REVEAL SAAT SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

// GANDAKAN DAFTAR SKILL UNTUK LOOP YANG MULUS
const track = $(".tech-track");
if (track) {
  const originalItems = [...track.children];
  originalItems.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
}

// SALIN PERINTAH GIT
document.querySelectorAll(".code-copy").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      const label = button.lastElementChild;
      const oldText = label.textContent;
      label.textContent = "✓";

      setTimeout(() => {
        label.textContent = oldText;
      }, 1500);
    } catch {
      alert("Silakan salin perintah secara manual.");
    }
  });
});

// TERMINAL KONTAK
$("#terminalBtn").addEventListener("click", () => {
  $("#contactTerminal").classList.toggle("hidden");
});

// TAHUN OTOMATIS
$("#year").textContent = new Date().getFullYear();