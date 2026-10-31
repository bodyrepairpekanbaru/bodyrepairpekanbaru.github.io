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

const topAdToggle = document.getElementById("top-ad-toggle");
const topAdPanel = document.getElementById("top-ad-panel");

topAdToggle.addEventListener("click", () => {
  const isExpanded = topAdToggle.getAttribute("aria-expanded") === "true";

  topAdToggle.setAttribute("aria-expanded", String(!isExpanded));
  topAdPanel.hidden = isExpanded;
  topAdToggle.querySelector("span").textContent = isExpanded
    ? "Tampilkan iklan"
    : "Tutup iklan";
  topAdToggle.querySelector("i").classList.toggle("fa-chevron-up", !isExpanded);
  topAdToggle.querySelector("i").classList.toggle("fa-chevron-down", isExpanded);
});

const popunderStorageKey = "tpm-popunder-attempted";

try {
  if (localStorage.getItem(popunderStorageKey) !== "1") {
    localStorage.setItem(popunderStorageKey, "1");

    const popunderScript = document.createElement("script");
    popunderScript.src =
      "https://pl32117040.profitableratecpmnetwork.com/92/43/51/924351da2ec171e8e1bc20d93b507ab1.js";
    popunderScript.async = true;
    popunderScript.addEventListener(
      "error",
      () => {
        console.error("Popunder advertisement script failed to load.");
      },
      { once: true },
    );

    document.body.appendChild(popunderScript);
  }
} catch (error) {
  console.error("Unable to apply the popunder frequency limit.", error);
}
