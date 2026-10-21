const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// =====================================
// 1. INTRO PEMBUKA
// =====================================
const introMessages = [
  ["Hello, World!", "Building ideas with code..."],
  ["Halo, Dunia!", "Belajar satu baris demi satu baris..."],
  ["こんにちは、世界！", "コードでアイデアを形にする..."],
  ["안녕하세요, 세상!", "코드로 아이디어를 만들어요..."],
  ["¡Hola, mundo!", "Creando ideas con código..."],
  ["console.log('Hello!')", "Preparing your experience..."]
];

const intro = $("#intro");
const introTitle = $("#introTitle");
const introStatus = $("#introStatus");
const progressBar = $("#progressBar");
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

let introDone = false;
let introStart = null;
const introDuration = reducedMotion ? 1200 : 5000;

function closeIntro() {
  if (introDone) return;
  introDone = true;
  intro.classList.add("hidden");
  document.body.style.overflow = "";
}

function animateIntro(timestamp) {
  if (introDone) return;

  if (introStart === null) introStart = timestamp;

  const elapsed = timestamp - introStart;
  const progress = Math.min(elapsed / introDuration, 1);
  const index = Math.min(
    Math.floor(progress * introMessages.length),
    introMessages.length - 1
  );

  introTitle.textContent = introMessages[index][0];
  introStatus.textContent = introMessages[index][1];
  progressBar.style.width = `${progress * 100}%`;

  if (progress >= 1) {
    closeIntro();
    return;
  }

  requestAnimationFrame(animateIntro);
}

document.body.style.overflow = "hidden";
$("#skipIntro").addEventListener("click", closeIntro);
requestAnimationFrame(animateIntro);

// =====================================
// 2. TERJEMAHAN LIMA BAHASA
// =====================================
const translations = {
  id: {
    navAbout: "Tentang", navSkills: "Keahlian",
    navProjects: "Proyek", navContact: "Kontak",
    heroTitle: 'Membangun ide menjadi sesuatu yang <span class="gradient">berarti.</span>',
    heroText: "Saya mahasiswa Sistem Informasi yang sedang belajar pemrograman, web development, dan teknologi digital.",
    viewProjects: "Lihat proyek ↗", contactMe: "Hubungi saya",
    learning: "Belajar setiap hari", profileRole: "Mahasiswa Sistem Informasi",
    scroll: "GULIR UNTUK MENJELAJAH",
    musicTitle: "Musik latar", musicReady: "Siap diputar",
    musicPlaying: "Musik sedang diputar", musicPaused: "Musik dijeda",
    musicError: "Audio tidak tersedia", musicMuted: "Suara dimatikan",
    aboutLabel: "PERKENALAN", aboutTitle: "Halo, ini cerita saya.",
    aboutIntro: "Sedang membangun kemampuan, satu proyek dalam satu waktu.",
    aboutCardTitle: "Belajar sambil membuat",
    aboutText: "Saya belajar dengan mencoba hal baru, membuat proyek kecil, menemukan kesalahan, lalu memperbaikinya.",
    goalTitle: "Tujuan saya",
    goalText: "Mengembangkan kemampuan pemrograman dan membuat aplikasi yang bermanfaat bagi orang lain.",
    skillsLabel: "TEKNOLOGI", skillsTitle: "Teknologi yang saya jelajahi.",
    skillsText: "Daftar ini berkembang seiring proses belajar.",
    marqueeText: "Bergerak otomatis · Arahkan kursor untuk memperlambat",
    workLabel: "KARYA", projectsTitle: "Proyek pilihan.",
    projectsText: "Beberapa contoh kartu yang dapat kamu ganti dengan proyek sendiri.",
    projectOne: "Developer Portfolio",
    projectOneText: "Website untuk memperkenalkan profil, keahlian, dan hasil karya.",
    projectTwo: "Study Planner",
    projectTwoText: "Konsep aplikasi untuk mengatur jadwal belajar dan tugas.",
    projectThree: "Python Mini Apps",
    projectThreeText: "Program latihan untuk logika, fungsi, dan pengolahan data.",
    projectLink: "Lihat detail ↗",
    projectNote: "Proyek dan gambar di atas hanya contoh. Ganti sesuai karya milikmu.",
    contactLabel: "KONTAK", contactTitle: "Mari terhubung.",
    contactText: "Terbuka untuk bertukar ide, belajar bersama, dan mengerjakan proyek kecil.",
    emailButton: "Kirim email ↗", copyButton: "Salin teks",
    copied: "Teks berhasil disalin!", copyFailed: "Tidak dapat menyalin teks.",
    footerText: "Dibuat dengan rasa ingin tahu.",
    backTop: "Kembali ke atas ↑"
  },

  en: {
    navAbout: "About", navSkills: "Skills",
    navProjects: "Projects", navContact: "Contact",
    heroTitle: 'Turning ideas into something <span class="gradient">meaningful.</span>',
    heroText: "I'm an Information Systems student learning programming, web development, and digital technology.",
    viewProjects: "View projects ↗", contactMe: "Contact me",
    learning: "Learning every day", profileRole: "Information Systems Student",
    scroll: "SCROLL TO EXPLORE",
    musicTitle: "Background music", musicReady: "Ready to play",
    musicPlaying: "Music is playing", musicPaused: "Music paused",
    musicMuted: "Sound muted", musicError: "Audio unavailable",
    aboutLabel: "INTRODUCTION", aboutTitle: "Hello, here's my story.",
    aboutIntro: "Building skills one project at a time.",
    aboutCardTitle: "Learn by building",
    aboutText: "I learn by trying new things, building small projects, finding mistakes, and fixing them.",
    goalTitle: "My goal",
    goalText: "To improve my programming skills and create applications that help others.",
    skillsLabel: "TECHNOLOGY", skillsTitle: "Technologies I'm exploring.",
    skillsText: "This list grows as I continue learning.",
    marqueeText: "Auto-scrolling · Hover to slow it down",
    workLabel: "MY WORK", projectsTitle: "Selected projects.",
    projectsText: "Example cards you can replace with your own projects.",
    projectOne: "Developer Portfolio",
    projectOneText: "A website showcasing a profile, skills, and work.",
    projectTwo: "Study Planner",
    projectTwoText: "An app concept for organizing study schedules and assignments.",
    projectThree: "Python Mini Apps",
    projectThreeText: "Practice programs for logic, functions, and data processing.",
    projectLink: "View details ↗",
    projectNote: "The projects and images above are examples. Replace them with your own work.",
    contactLabel: "CONTACT", contactTitle: "Let's connect.",
    contactText: "Open to exchanging ideas, learning together, and working on small projects.",
    emailButton: "Send an email ↗", copyButton: "Copy text",
    copied: "Text copied!", copyFailed: "Could not copy the text.",
    footerText: "Made with curiosity.",
    backTop: "Back to top ↑"
  },

  ja: {
    navAbout: "自己紹介", navSkills: "スキル",
    navProjects: "作品", navContact: "連絡先",
    heroTitle: 'アイデアを<span class="gradient">意味のあるもの</span>に。',
    heroText: "情報システムを学びながら、プログラミング、ウェブ開発、デジタル技術を勉強しています。",
    viewProjects: "作品を見る ↗", contactMe: "連絡する",
    learning: "毎日学習中", profileRole: "情報システム専攻の学生",
    scroll: "スクロールして見る",
    musicTitle: "BGM", musicReady: "再生準備完了",
    musicPlaying: "音楽を再生中", musicPaused: "一時停止中",
    musicMuted: "消音中", musicError: "音声を利用できません",
    aboutLabel: "自己紹介", aboutTitle: "私について。",
    aboutIntro: "一つずつプロジェクトを作りながら成長しています。",
    aboutCardTitle: "作りながら学ぶ",
    aboutText: "新しいことに挑戦し、小さな作品を作り、間違いを見つけて修正しながら学びます。",
    goalTitle: "目標",
    goalText: "プログラミング力を高め、人の役に立つアプリを作ることです。",
    skillsLabel: "技術", skillsTitle: "学習中の技術。",
    skillsText: "学習とともにリストを増やしていきます。",
    marqueeText: "自動スクロール · カーソルを合わせると遅くなります",
    workLabel: "作品", projectsTitle: "プロジェクト。",
    projectsText: "自分の作品に置き換えられるサンプルです。",
    projectOne: "開発者ポートフォリオ",
    projectOneText: "プロフィール、スキル、作品を紹介するウェブサイトです。",
    projectTwo: "学習プランナー",
    projectTwoText: "学習予定や課題を管理するアプリの構想です。",
    projectThree: "Pythonミニアプリ",
    projectThreeText: "論理、関数、データ処理を練習するプログラムです。",
    projectLink: "詳細を見る ↗",
    projectNote: "作品と画像はサンプルです。自分の作品に置き換えてください。",
    contactLabel: "連絡先", contactTitle: "つながりましょう。",
    contactText: "アイデアの交換、一緒の学習、小さなプロジェクトに興味があります。",
    emailButton: "メールを送る ↗", copyButton: "テキストをコピー",
    copied: "コピーしました！", copyFailed: "コピーできませんでした。",
    footerText: "好奇心から生まれました。",
    backTop: "トップへ戻る ↑"
  },

  ko: {
    navAbout: "소개", navSkills: "기술",
    navProjects: "프로젝트", navContact: "연락처",
    heroTitle: '아이디어를 <span class="gradient">의미 있는 것</span>으로.',
    heroText: "정보시스템을 공부하며 프로그래밍, 웹 개발, 디지털 기술을 배우고 있습니다.",
    viewProjects: "프로젝트 보기 ↗", contactMe: "연락하기",
    learning: "매일 배우는 중", profileRole: "정보시스템 전공 학생",
    scroll: "스크롤하여 둘러보기",
    musicTitle: "배경 음악", musicReady: "재생 준비 완료",
    musicPlaying: "음악 재생 중", musicPaused: "일시 정지",
    musicMuted: "음소거", musicError: "오디오를 사용할 수 없습니다",
    aboutLabel: "소개", aboutTitle: "저에 대해.",
    aboutIntro: "프로젝트를 하나씩 만들며 성장하고 있습니다.",
    aboutCardTitle: "만들면서 배우기",
    aboutText: "새로운 것을 시도하고 작은 프로젝트를 만들며 오류를 찾아 수정하면서 배웁니다.",
    goalTitle: "목표",
    goalText: "프로그래밍 실력을 높이고 사람들에게 유용한 앱을 만드는 것입니다.",
    skillsLabel: "기술", skillsTitle: "배우고 있는 기술.",
    skillsText: "배우면서 목록을 계속 확장할 예정입니다.",
    marqueeText: "자동 이동 · 마우스를 올리면 느려집니다",
    workLabel: "작업물", projectsTitle: "주요 프로젝트.",
    projectsText: "자신의 프로젝트로 바꿀 수 있는 예시 카드입니다.",
    projectOne: "개발자 포트폴리오",
    projectOneText: "프로필, 기술, 작업물을 소개하는 웹사이트입니다.",
    projectTwo: "스터디 플래너",
    projectTwoText: "학습 일정과 과제를 관리하는 앱 아이디어입니다.",
    projectThree: "Python 미니 앱",
    projectThreeText: "논리, 함수, 데이터 처리를 연습하는 프로그램입니다.",
    projectLink: "자세히 보기 ↗",
    projectNote: "프로젝트와 이미지는 예시입니다. 자신의 작업물로 바꾸세요.",
    contactLabel: "연락처", contactTitle: "함께 소통해요.",
    contactText: "아이디어를 나누고 함께 배우며 작은 프로젝트를 진행하고 싶습니다.",
    emailButton: "이메일 보내기 ↗", copyButton: "텍스트 복사",
    copied: "복사되었습니다!", copyFailed: "복사할 수 없습니다.",
    footerText: "호기심으로 만들었습니다.",
    backTop: "맨 위로 ↑"
  },

  es: {
    navAbout: "Acerca de", navSkills: "Habilidades",
    navProjects: "Proyectos", navContact: "Contacto",
    heroTitle: 'Convertir ideas en algo <span class="gradient">significativo.</span>',
    heroText: "Soy estudiante de Sistemas de Información y estoy aprendiendo programación, desarrollo web y tecnología digital.",
    viewProjects: "Ver proyectos ↗", contactMe: "Contáctame",
    learning: "Aprendiendo cada día", profileRole: "Estudiante de Sistemas de Información",
    scroll: "DESPLÁZATE PARA EXPLORAR",
    musicTitle: "Música de fondo", musicReady: "Lista para reproducir",
    musicPlaying: "Música en reproducción", musicPaused: "Música pausada",
    musicMuted: "Sonido silenciado", musicError: "Audio no disponible",
    aboutLabel: "INTRODUCCIÓN", aboutTitle: "Hola, esta es mi historia.",
    aboutIntro: "Desarrollando habilidades proyecto a proyecto.",
    aboutCardTitle: "Aprender creando",
    aboutText: "Aprendo probando cosas nuevas, creando proyectos pequeños, encontrando errores y corrigiéndolos.",
    goalTitle: "Mi objetivo",
    goalText: "Mejorar mis habilidades de programación y crear aplicaciones útiles para otras personas.",
    skillsLabel: "TECNOLOGÍA", skillsTitle: "Tecnologías que exploro.",
    skillsText: "La lista crecerá a medida que siga aprendiendo.",
    marqueeText: "Movimiento automático · Pasa el cursor para ralentizarlo",
    workLabel: "TRABAJO", projectsTitle: "Proyectos destacados.",
    projectsText: "Tarjetas de ejemplo que puedes sustituir por tus propios proyectos.",
    projectOne: "Portafolio de desarrollador",
    projectOneText: "Un sitio web para presentar mi perfil, habilidades y trabajos.",
    projectTwo: "Planificador de estudio",
    projectTwoText: "Una idea de aplicación para organizar horarios y tareas.",
    projectThree: "Mini aplicaciones Python",
    projectThreeText: "Programas de práctica para lógica, funciones y procesamiento de datos.",
    projectLink: "Ver detalles ↗",
    projectNote: "Los proyectos e imágenes son ejemplos. Sustitúyelos por tus propios trabajos.",
    contactLabel: "CONTACTO", contactTitle: "Conectemos.",
    contactText: "Me interesa compartir ideas, aprender juntos y colaborar en proyectos pequeños.",
    emailButton: "Enviar correo ↗", copyButton: "Copiar texto",
    copied: "¡Texto copiado!", copyFailed: "No se pudo copiar el texto.",
    footerText: "Creado con curiosidad.",
    backTop: "Volver arriba ↑"
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.id;

  document.documentElement.lang = language;

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] === undefined) return;

    // heroTitle memang menggunakan span untuk efek gradient.
    if (key === "heroTitle") {
      element.innerHTML = dictionary[key];
    } else {
      element.textContent = dictionary[key];
    }
  });

  $("#languageSelect").value = language;

  try {
    sessionStorage.setItem("portfolio-language", language);
  } catch (_) {}
}

$("#languageSelect").addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

let initialLanguage = "id";
try {
  const saved = sessionStorage.getItem("portfolio-language");
  if (saved && translations[saved]) initialLanguage = saved;
} catch (_) {}
setLanguage(initialLanguage);

// =====================================
// 3. ANIMASI SCROLL
// =====================================
const revealItems = $$(".reveal");

if ("IntersectionObserver" in window && !reducedMotion) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -30px 0px"
  });

  revealItems.forEach((element) => observer.observe(element));
} else {
  revealItems.forEach((element) => element.classList.add("visible"));
}

// =====================================
// 4. MARQUEE TEKNOLOGI BERULANG
// =====================================
const techTrack = $(".tech-track");
if (techTrack) {
  techTrack.innerHTML += techTrack.innerHTML;
}

// =====================================
// 5. PEMUTAR MUSIK LATAR
// =====================================
const music = $("#backgroundMusic");
const musicButton = $("#musicButton");
const muteButton = $("#muteButton");
const musicStatus = $("#musicStatus");

function updateMusicStatus(key) {
  const language = $("#languageSelect").value;
  const dictionary = translations[language] || translations.id;
  musicStatus.textContent = dictionary[key] || translations.id[key];
}

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "Ⅱ";
      musicButton.setAttribute("aria-label", "Pause music");
      updateMusicStatus("musicPlaying");
    } catch (error) {
      updateMusicStatus("musicError");
      console.error("Audio playback failed:", error);
    }
  } else {
    music.pause();
    musicButton.textContent = "▶";
    musicButton.setAttribute("aria-label", "Play music");
    updateMusicStatus("musicPaused");
  }
});

muteButton.addEventListener("click", () => {
  music.muted = !music.muted;
  muteButton.textContent = music.muted ? "♪̸" : "♪";
  muteButton.setAttribute("aria-pressed", String(music.muted));
  updateMusicStatus(music.muted ? "musicMuted" : (music.paused ? "musicReady" : "musicPlaying"));
});

music.addEventListener("error", () => {
  updateMusicStatus("musicError");
});

music.addEventListener("ended", () => {
  musicButton.textContent = "▶";
  updateMusicStatus("musicReady");
});

// =====================================
// 6. DARK / LIGHT MODE
// =====================================
const themeButton = $("#themeButton");

themeButton.addEventListener("click", () => {
  const light = document.body.classList.toggle("light-theme");
  themeButton.textContent = light ? "☾" : "☼";
  themeButton.setAttribute("aria-pressed", String(light));
});

// =====================================
// 7. SALIN TEKS
// =====================================
$("#copyButton").addEventListener("click", async () => {
  const language = $("#languageSelect").value;
  const dictionary = translations[language] || translations.id;
  const status = $("#copyStatus");

  try {
    await navigator.clipboard.writeText('Thanks for visiting!');
    status.textContent = dictionary.copied;
  } catch (_) {
    status.textContent = dictionary.copyFailed;
  }
});

// =====================================
// 8. TAHUN OTOMATIS
// =====================================
$("#year").textContent = new Date().getFullYear();