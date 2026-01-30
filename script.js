// Form submission handler to redirect to WhatsApp
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = encodeURIComponent(
    `Halo, saya ingin berkonsultasi.

Nama: ${fullname}
No. Telepon: ${phone}
Email: ${email}
Layanan: ${service}
Pesan: ${message}`,
  );

  window.open(`https://wa.me/6281372057999?text=${whatsappMessage}`, "_blank");
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
