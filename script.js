const themeBtn = document.getElementById("themeBtn");
const languageBtn = document.getElementById("languageBtn");
const greeting = document.getElementById("greeting");
const role = document.getElementById("role");
const intro = document.getElementById("intro");
const terminalBtn = document.getElementById("terminalBtn");
const contactTerminal = document.getElementById("contactTerminal");

// Tahun otomatis
document.getElementById("year").textContent =
  new Date().getFullYear();

// Ganti tema gelap dan terang
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent =
    document.body.classList.contains("light") ? "☾" : "☼";
});

// Ganti bahasa Indonesia dan Inggris
let english = false;

languageBtn.addEventListener("click", () => {
  english = !english;

  if (english) {
    document.documentElement.lang = "en";
    languageBtn.textContent = "🌐 EN⌄";
    greeting.textContent = "Hello, I'm Deshan";
    role.textContent = "Information Systems Student";
    intro.textContent =
      "I'm learning programming and web development. " +
      "I'm interested in building useful things, solving problems, " +
      "and exploring new technologies.";
  } else {
    document.documentElement.lang = "id";
    languageBtn.textContent = "🌐 ID⌄";
    greeting.textContent = "Halo, saya Deshan";
    role.textContent = "Mahasiswa Sistem Informasi";
    intro.textContent =
      "Saya sedang mempelajari pemrograman dan pengembangan website. " +
      "Saya tertarik membangun sesuatu yang bermanfaat, memecahkan masalah, " +
      "dan terus belajar teknologi baru.";
  }
});

// Animasi ketika bagian halaman terlihat
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

// Tombol menyalin perintah Git
document.querySelectorAll(".code-copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;
    const originalText = button.innerHTML;

    try {
      await navigator.clipboard.writeText(text);
      button.lastElementChild.textContent = "✓ Tersalin";

      setTimeout(() => {
        button.innerHTML = originalText;
      }, 1500);
    } catch {
      alert("Gagal menyalin. Silakan salin perintah secara manual.");
    }
  });
});

// Terminal kontak
terminalBtn.addEventListener("click", () => {
  contactTerminal.classList.toggle("hidden");

  terminalBtn.textContent =
    contactTerminal.classList.contains("hidden")
      ? "›_ Buka Terminal Kontak"
      : "›_ Tutup Terminal Kontak";
});