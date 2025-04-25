// Services Data Array
const services = [
  {
    id: 1,
    title: "Exterior Detailing",
    description:
      "Complete exterior wash, clay bar treatment, polish, and wax to restore your paint's deep shine and protection.",
    price: "Nego",
    category: "exterior",
    icon: "fas fa-car",
    features: [
      "Hand wash & dry",
      "Clay bar treatment",
      "Premium wax or sealant",
      "Tire dressing",
      "Window cleaning",
    ],
    image: "./assets/images/TPM%20image%20(2).jpg",
  },
  {
    id: 2,
    title: "Interior Detailing",
    description:
      "Deep cleaning of all interior surfaces including seats, carpets, dashboard, and more to remove dirt and odors.",
    price: "Nego",
    category: "interior",
    icon: "fas fa-couch",
    features: [
      "Vacuum & shampoo carpets",
      "Leather conditioning",
      "Dashboard & console cleaning",
      "Door panels & trim",
      "Odor elimination",
    ],
    image: "./assets/images/TPM%20image%20(3).jpg",
  },
  {
    id: 3,
    title: "Full Detailing",
    description:
      "Our most comprehensive package combining both exterior and interior detailing for complete vehicle rejuvenation.",
    price: "Nego",
    category: "all",
    icon: "fas fa-spa",
    features: [
      "Includes all exterior services",
      "Includes all interior services",
      "Engine bay cleaning",
      "Headlight restoration",
      "Complete interior sanitization",
    ],
    image: "./assets/images/TPM%20image%20(4).jpg",
  },

  {
    id: 4,
    title: "Paint Correction",
    description:
      "Professional removal of swirl marks, scratches, and oxidation to restore your paint's flawless finish.",
    price: "Nego",
    category: "exterior",
    icon: "fas fa-paint-roller",
    features: [
      "Multi-stage polishing",
      "Swirl mark removal",
      "Scratch reduction",
      "Oxidation removal",
      "Gloss enhancement",
    ],
    image: "./assets/images/TPM%20image%20(5).jpg",
  },
];

// Load Services
function loadServices(filter = "all") {
  const container = document.getElementById("services-container");
  container.innerHTML = "";

  const filteredServices =
    filter === "all"
      ? services
      : services.filter(
          (service) => service.category === filter || service.category === "all"
        );

  filteredServices.forEach((service) => {
    const serviceCard = document.createElement("div");
    serviceCard.className =
      "service-card bg-white rounded-xl overflow-hidden shadow-lg transition duration-500";
    serviceCard.innerHTML = `
                    <div class="h-48 overflow-hidden">
                        <img src="${service.image}" alt="${
      service.title
    }" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="${
                              service.icon
                            } text-blue-500 text-2xl mr-3"></i>
                            <h3 class="text-xl font-bold">${service.title}</h3>
                        </div>
                        <p class="text-gray-600 mb-4">${service.description}</p>
                        <ul class="text-gray-600 space-y-2 mb-4">
                            ${service.features
                              .map(
                                (feature) => `
                                <li class="flex items-start">
                                    <i class="fas fa-check text-blue-500 text-sm mr-2 mt-1"></i>
                                    <span>${feature}</span>
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                        <p class="text-blue-600 font-bold">Biaya: ${
                          service.price
                        }</p>
                    </div>
                `;
    container.appendChild(serviceCard);
  });
}

// Initialize Services
document.addEventListener("DOMContentLoaded", () => {
  loadServices();

  // Service Filter Buttons
  const filterButtons = document.querySelectorAll(".service-filter");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) =>
        btn.classList.remove("active-service", "bg-blue-100", "text-blue-600")
      );

      // Add active class to clicked button
      button.classList.add("active-service", "bg-blue-100", "text-blue-600");

      // Filter services
      const filter = button.dataset.filter;
      loadServices(filter);
    });
  });

  // Set first filter as active initially
  if (filterButtons.length > 0) {
    filterButtons[0].classList.add(
      "active-service",
      "bg-blue-100",
      "text-blue-600"
    );
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
    backToTopBtn.classList.add("opacity-100", "visible");
  } else {
    backToTopBtn.classList.remove("opacity-100", "visible");
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });
});
