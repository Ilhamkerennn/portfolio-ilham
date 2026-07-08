// =========================================================
// SCRIPT UTAMA — jalan di semua halaman
// =========================================================

// Toggle menu nav di layar kecil
const navToggle = document.querySelector('.nav-toggle');
const navTabs = document.querySelector('.nav-tabs');

if (navToggle && navTabs) {
  navToggle.addEventListener('click', () => {
    navTabs.classList.toggle('open');
  });
}

// Animasi skill bar (mengisi saat elemen terlihat di layar)
const skillFills = document.querySelectorAll('.skill-fill');

if (skillFills.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target.dataset.level || '0';
        entry.target.style.width = target + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach((el) => observer.observe(el));
}

// Reveal animasi sederhana untuk elemen berclass .reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    revealObserver.observe(el);
  });
}

// Handler form kontak (demo — tanpa backend)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    // Arahkan pesan langsung ke WhatsApp
    // GANTI nomor di bawah ini dengan nomor WhatsApp kamu
    const waNumber = '6281234567890';
    const text = encodeURIComponent(
      `Halo, perkenalkan saya ${name}.\n\n${message}`
    );
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  });
}
