const $ = (selector) => document.querySelector(selector);

const translations = {
  id: {
    available: "SEDANG BELAJAR & BERKEMBANG",
    hello: "Halo, saya",
    role: "Mahasiswa Sistem Informasi",
    intro: "Saya tertarik pada pemrograman, teknologi, dan membangun hal-hal yang bermanfaat. Saya terus belajar, mencoba, dan mengembangkan kemampuan melalui proyek nyata.",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    scroll: "GULIR UNTUK MENJELAJAH",
    aboutTitle: "Sedikit tentang saya",
    whoami: "Mahasiswa Sistem Informasi yang suka belajar teknologi.",
    goals: "Belajar konsisten, membuat proyek, dan berkembang.",
    manifestoTitle: "Belajar dengan membuat.",
    manifesto: "Bagi saya, teknologi bukan hanya tentang menulis kode. Ini tentang memahami masalah, mencari solusi, dan terus memperbaiki hasil karya. Setiap proyek adalah kesempatan untuk belajar sesuatu yang baru.",
    statLearn: "Terus belajar",
    statBuild: "Berani mencoba",
    statGrow: "Terus berkembang",
    skillsTitle: "Teknologi yang saya pelajari",
    skillsDesc: "Teknologi yang sedang saya pelajari dan gunakan untuk berlatih.",
    skillsNote: "Daftar ini adalah teknologi untuk dipelajari, bukan klaim sudah menguasai semuanya.",
    projectsTitle: "Hal yang saya bangun",
    projectsDesc: "Beberapa proyek latihan dan eksperimen saya.",
    projectOne: "Personal Portfolio",
    projectOneDesc: "Website personal untuk memperkenalkan diri, skill, dan perjalanan belajar.",
    projectTwo: "Python Practice",
    projectTwoDesc: "Kumpulan latihan dasar Python, fungsi, percabangan, perulangan, dan list.",
    projectThree: "Database Mini Project",
    projectThreeDesc: "Proyek latihan merancang tabel dan memahami dasar pengelolaan data.",
    sourceCode: "Lihat kode ↗",
    articlesTitle: "Catatan perjalanan",
    articleOne: "Memulai perjalanan pemrograman",
    articleOneDesc: "Catatan belajar HTML, CSS, JavaScript, dan Python.",
    articleTwo: "Belajar deployment dengan GitHub Pages",
    articleTwoDesc: "Dari file lokal hingga website dapat diakses online.",
    articleThree: "Logika sebelum kode",
    articleThreeDesc: "Mengapa memahami masalah adalah langkah pertama.",
    contactTitle: "Mari terhubung",
    contactDesc: "Saya terbuka untuk berbagi ide, belajar bersama, dan berdiskusi tentang teknologi.",
    sendEmail: "Kirim Email",
    footerText: "Dibuat sambil terus belajar.",
    playMusic: "Putar musik",
    pauseMusic: "Jeda musik"
  },

  en: {
    available: "CURRENTLY LEARNING & GROWING",
    hello: "Hello, I'm",
    role: "Information Systems Student",
    intro: "I'm interested in programming, technology, and building useful things. I keep learning, experimenting, and improving my skills through real projects.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    scroll: "SCROLL TO EXPLORE",
    aboutTitle: "A little about me",
    whoami: "An Information Systems student who enjoys learning technology.",
    goals: "Learn consistently, build projects, and keep growing.",
    manifestoTitle: "Learn by building.",
    manifesto: "To me, technology is more than writing code. It's about understanding problems, finding solutions, and improving what I create. Every project is a chance to learn something new.",
    statLearn: "Keep learning",
    statBuild: "Keep building",
    statGrow: "Keep growing",
    skillsTitle: "Technologies I'm learning",
    skillsDesc: "Technologies I'm currently exploring and practicing.",
    skillsNote: "These are technologies I'm learning, not a claim that I've mastered them all.",
    projectsTitle: "Things I've built",
    projectsDesc: "A few practice projects and experiments.",
    projectOne: "Personal Portfolio",
    projectOneDesc: "A personal website introducing me, my skills, and my learning journey.",
    projectTwo: "Python Practice",
    projectTwoDesc: "Basic Python exercises covering functions, conditions, loops, and lists.",
    projectThree: "Database Mini Project",
    projectThreeDesc: "A practice project for designing tables and understanding data management.",
    sourceCode: "View source ↗",
    articlesTitle: "Learning notes",
    articleOne: "Starting my programming journey",
    articleOneDesc: "Learning notes on HTML, CSS, JavaScript, and Python.",
    articleTwo: "Learning deployment with GitHub Pages",
    articleTwoDesc: "From local files to a website available online.",
    articleThree: "Logic before code",
    articleThreeDesc: "Why understanding the problem comes first.",
    contactTitle: "Let's connect",
    contactDesc: "I'm open to sharing ideas, learning together, and discussing technology.",
    sendEmail: "Send an Email",
    footerText: "Built while continuing to learn.",
    playMusic: "Play music",
    pauseMusic: "Pause music"
  },

  ja: {
    available: "学習と成長を続けています",
    hello: "こんにちは、",
    role: "情報システム専攻の学生",
    intro: "プログラミングとテクノロジーに興味があります。実際のプロジェクトを通して学び、挑戦し、スキルを伸ばしています。",
    viewProjects: "プロジェクトを見る",
    contactMe: "お問い合わせ",
    scroll: "スクロールして探索",
    aboutTitle: "私について",
    whoami: "テクノロジーを学ぶことが好きな情報システムの学生です。",
    goals: "継続して学び、プロジェクトを作り、成長すること。",
    manifestoTitle: "作りながら学ぶ。",
    manifesto: "私にとってテクノロジーはコードを書くことだけではありません。問題を理解し、解決策を探し、作品を改善することです。",
    statLearn: "学び続ける",
    statBuild: "挑戦する",
    statGrow: "成長する",
    skillsTitle: "学習中の技術",
    skillsDesc: "現在学び、練習している技術です。",
    skillsNote: "すべてを習得したという意味ではなく、学習中の技術です。",
    projectsTitle: "制作したもの",
    projectsDesc: "練習プロジェクトと実験の一部です。",
    projectOne: "個人ポートフォリオ",
    projectOneDesc: "自分やスキル、学習の過程を紹介するウェブサイト。",
    projectTwo: "Pythonの練習",
    projectTwoDesc: "関数、条件分岐、ループ、リストの基礎練習。",
    projectThree: "データベース小規模プロジェクト",
    projectThreeDesc: "テーブル設計とデータ管理の基礎を学ぶ練習です。",
    sourceCode: "コードを見る ↗",
    articlesTitle: "学習ノート",
    articleOne: "プログラミング学習の始め方",
    articleOneDesc: "HTML、CSS、JavaScript、Pythonの学習記録。",
    articleTwo: "GitHub Pagesでの公開",
    articleTwoDesc: "ローカルファイルからオンライン公開まで。",
    articleThree: "コードの前に論理を考える",
    articleThreeDesc: "問題を理解することが最初の一歩である理由。",
    contactTitle: "つながりましょう",
    contactDesc: "アイデアの共有や共同学習、技術についての交流を歓迎します。",
    sendEmail: "メールを送る",
    footerText: "学びながら制作しました。",
    playMusic: "音楽を再生",
    pauseMusic: "音楽を一時停止"
  },

  ko: {
    available: "배우고 성장하는 중",
    hello: "안녕하세요, 저는",
    role: "정보시스템 전공 학생",
    intro: "프로그래밍과 기술에 관심이 있습니다. 실제 프로젝트를 통해 배우고 도전하며 실력을 키우고 있습니다.",
    viewProjects: "프로젝트 보기",
    contactMe: "연락하기",
    scroll: "스크롤하여 둘러보기",
    aboutTitle: "저에 대해",
    whoami: "기술을 배우는 것을 좋아하는 정보시스템 전공 학생입니다.",
    goals: "꾸준히 배우고 프로젝트를 만들며 성장하기.",
    manifestoTitle: "만들면서 배우기.",
    manifesto: "저에게 기술은 단순히 코드를 작성하는 것 이상입니다. 문제를 이해하고 해결책을 찾으며 결과물을 개선하는 과정입니다.",
    statLearn: "계속 배우기",
    statBuild: "도전하기",
    statGrow: "성장하기",
    skillsTitle: "배우고 있는 기술",
    skillsDesc: "현재 배우고 연습하는 기술입니다.",
    skillsNote: "모든 기술을 마스터했다는 뜻이 아니라 학습 중인 기술입니다.",
    projectsTitle: "만든 프로젝트",
    projectsDesc: "연습 프로젝트와 실험 결과입니다.",
    projectOne: "개인 포트폴리오",
    projectOneDesc: "자신과 기술, 학습 과정을 소개하는 개인 웹사이트입니다.",
    projectTwo: "Python 연습",
    projectTwoDesc: "함수, 조건문, 반복문, 리스트를 연습하는 프로젝트입니다.",
    projectThree: "데이터베이스 미니 프로젝트",
    projectThreeDesc: "테이블 설계와 데이터 관리의 기초를 연습합니다.",
    sourceCode: "코드 보기 ↗",
    articlesTitle: "학습 기록",
    articleOne: "프로그래밍 시작하기",
    articleOneDesc: "HTML, CSS, JavaScript, Python 학습 기록.",
    articleTwo: "GitHub Pages 배포 배우기",
    articleTwoDesc: "로컬 파일에서 온라인 웹사이트까지.",
    articleThree: "코딩 전 논리 생각하기",
    articleThreeDesc: "문제를 이해하는 것이 첫 단계인 이유.",
    contactTitle: "함께 소통해요",
    contactDesc: "아이디어 공유, 함께 배우기, 기술 토론을 환영합니다.",
    sendEmail: "이메일 보내기",
    footerText: "계속 배우며 만들었습니다.",
    playMusic: "음악 재생",
    pauseMusic: "음악 일시정지"
  },

  es: {
    available: "APRENDIENDO Y CRECIENDO",
    hello: "Hola, soy",
    role: "Estudiante de Sistemas de Información",
    intro: "Me interesan la programación, la tecnología y crear cosas útiles. Sigo aprendiendo, experimentando y mejorando mis habilidades mediante proyectos reales.",
    viewProjects: "Ver proyectos",
    contactMe: "Contáctame",
    scroll: "DESPLÁZATE PARA EXPLORAR",
    aboutTitle: "Un poco sobre mí",
    whoami: "Un estudiante de Sistemas de Información al que le gusta aprender tecnología.",
    goals: "Aprender constantemente, crear proyectos y crecer.",
    manifestoTitle: "Aprender creando.",
    manifesto: "Para mí, la tecnología es más que escribir código. Se trata de comprender problemas, encontrar soluciones y mejorar lo que creo. Cada proyecto es una oportunidad para aprender algo nuevo.",
    statLearn: "Seguir aprendiendo",
    statBuild: "Crear proyectos",
    statGrow: "Seguir creciendo",
    skillsTitle: "Tecnologías que estoy aprendiendo",
    skillsDesc: "Tecnologías que estoy explorando y practicando.",
    skillsNote: "Estas son tecnologías en aprendizaje, no una afirmación de dominio completo.",
    projectsTitle: "Lo que he creado",
    projectsDesc: "Algunos proyectos de práctica y experimentos.",
    projectOne: "Portafolio personal",
    projectOneDesc: "Un sitio web personal para presentar mi perfil, habilidades y aprendizaje.",
    projectTwo: "Práctica de Python",
    projectTwoDesc: "Ejercicios básicos de funciones, condiciones, bucles y listas.",
    projectThree: "Mini proyecto de base de datos",
    projectThreeDesc: "Práctica de diseño de tablas y gestión básica de datos.",
    sourceCode: "Ver código ↗",
    articlesTitle: "Notas de aprendizaje",
    articleOne: "Comenzar a programar",
    articleOneDesc: "Notas sobre HTML, CSS, JavaScript y Python.",
    articleTwo: "Publicar con GitHub Pages",
    articleTwoDesc: "De archivos locales a un sitio web en línea.",
    articleThree: "Lógica antes del código",
    articleThreeDesc: "Por qué comprender el problema es el primer paso.",
    contactTitle: "Conectemos",
    contactDesc: "Me interesa compartir ideas, aprender juntos y conversar sobre tecnología.",
    sendEmail: "Enviar correo",
    footerText: "Creado mientras sigo aprendiendo.",
    playMusic: "Reproducir música",
    pauseMusic: "Pausar música"
  }
};

// Ganti dua nilai ini dengan identitas dan alamat milikmu.
const PROFILE_NAME = "Nama Kamu";
const CONTACT_EMAIL = "emailkamu@example.com";

$("#person-name").textContent = PROFILE_NAME;
$("#footer-name").textContent = PROFILE_NAME;
$("#year").textContent = new Date().getFullYear();

// Perbarui link email agar tombol kontak menggunakan alamat yang benar.
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.href = `mailto:${CONTACT_EMAIL}`;
});

// Intro menampilkan sapaan beberapa bahasa secara singkat.
const greetings = [
  "Hello, World!",
  "Halo, Dunia!",
  "こんにちは、世界！",
  "안녕하세요, 세계!",
  "¡Hola, mundo!"
];

const loaderText = $("#loader-language");
const preloader = $("#preloader");
let greetingIndex = 0;

const greetingTimer = setInterval(() => {
  greetingIndex = (greetingIndex + 1) % greetings.length;
  if (loaderText) loaderText.textContent = greetings[greetingIndex];
}, 500);

window.addEventListener("load", () => {
  setTimeout(() => {
    clearInterval(greetingTimer);
    preloader?.classList.add("done");
  }, 3000);
});

// Pilihan bahasa berlaku untuk semua elemen berlabel data-i18n.
const languageSelect = $("#language");

function setLanguage(language) {
  const dictionary = translations[language] || translations.id;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  try {
    document.title = language === "id"
      ? `Portfolio ${PROFILE_NAME} | Developer`
      : `${PROFILE_NAME} | Developer Portfolio`;
  } catch (error) {
    console.warn("Title could not be updated.", error);
  }

  updateMusicButton();
}

languageSelect?.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

setLanguage("id");

// Mode terang dan gelap.
const themeToggle = $("#theme-toggle");
const savedTheme = (() => {
  try {
    return localStorage.getItem("portfolio-theme");
  } catch {
    return null;
  }
})();

if (savedTheme === "light") {
  document.documentElement.classList.add("light");
}

function updateThemeButton() {
  if (!themeToggle) return;
  const isLight = document.documentElement.classList.contains("light");
  themeToggle.textContent = isLight ? "☾" : "☼";
  themeToggle.title = isLight ? "Aktifkan mode gelap" : "Aktifkan mode terang";
  themeToggle.setAttribute("aria-label", themeToggle.title);
}

themeToggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");

  try {
    localStorage.setItem(
      "portfolio-theme",
      document.documentElement.classList.contains("light") ? "light" : "dark"
    );
  } catch (error) {
    console.warn("Preferensi tema tidak dapat disimpan.", error);
  }

  updateThemeButton();
});

updateThemeButton();

// Animasi ketika bagian halaman masuk ke layar.
// Konten tetap terlihat jika browser tidak mendukung IntersectionObserver.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  document.body.classList.add("js-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Musik latar.
// Browser biasanya melarang autoplay bersuara sebelum ada interaksi pengguna.
const music = $("#background-music");
const musicToggle = $("#music-toggle");
const muteToggle = $("#mute-toggle");

function updateMusicButton() {
  if (!musicToggle) return;

  const language = languageSelect?.value || "id";
  const dictionary = translations[language] || translations.id;
  const isPlaying = music && !music.paused;

  musicToggle.innerHTML = isPlaying
    ? `Ⅱ <span>${dictionary.pauseMusic}</span>`
    : `▶ <span>${dictionary.playMusic}</span>`;
}

musicToggle?.addEventListener("click", async () => {
  if (!music) return;

  if (music.paused) {
    try {
      await music.play();
    } catch (error) {
      console.error("Musik tidak dapat diputar:", error);
      alert("Musik belum bisa diputar. Pastikan file images/music.mp3 tersedia.");
    }
  } else {
    music.pause();
  }

  updateMusicButton();
});

muteToggle?.addEventListener("click", () => {
  if (!music) return;

  music.muted = !music.muted;
  muteToggle.textContent = music.muted ? "♪̸" : "♪";
  muteToggle.setAttribute("aria-label", music.muted ? "Unmute music" : "Mute music");
});

music?.addEventListener("play", updateMusicButton);
music?.addEventListener("pause", updateMusicButton);
music?.addEventListener("ended", updateMusicButton);

updateMusicButton();

// Animasi marquee tetap bergerak ke samping dan tidak berhenti saat hover.
const marqueeTrack = document.querySelector(".marquee-track");
if (marqueeTrack) {
  marqueeTrack.style.willChange = "transform";
}

console.log("Portfolio initialized successfully.");