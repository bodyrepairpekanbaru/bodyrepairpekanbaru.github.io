// Services Data Array
const services = [
  {
    id: 1,
    title: "Exterior Detailing",
    description:
      "Complete exterior wash, clay bar treatment, polish, and wax to restore your paint's deep shine and protection.",
    price: "$149",
    category: "exterior",
    icon: "fas fa-car",
    features: [
      "Hand wash & dry",
      "Clay bar treatment",
      "Premium wax or sealant",
      "Tire dressing",
      "Window cleaning",
    ],
    image:
      "https://images.unsplash.com/photo-1566936737687-8d392239712f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title: "Interior Detailing",
    description:
      "Deep cleaning of all interior surfaces including seats, carpets, dashboard, and more to remove dirt and odors.",
    price: "$129",
    category: "interior",
    icon: "fas fa-couch",
    features: [
      "Vacuum & shampoo carpets",
      "Leather conditioning",
      "Dashboard & console cleaning",
      "Door panels & trim",
      "Odor elimination",
    ],
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: 3,
    title: "Full Detailing",
    description:
      "Our most comprehensive package combining both exterior and interior detailing for complete vehicle rejuvenation.",
    price: "$249",
    category: "all",
    icon: "fas fa-spa",
    features: [
      "Includes all exterior services",
      "Includes all interior services",
      "Engine bay cleaning",
      "Headlight restoration",
      "Complete interior sanitization",
    ],
    image:
      "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: "Ceramic Coating",
    description:
      "Advanced paint protection that creates a semi-permanent bond with your vehicle's paint for long-lasting shine.",
    price: "$599",
    category: "protection",
    icon: "fas fa-shield-alt",
    features: [
      "Paint decontamination",
      "Paint correction",
      "Ceramic coating application",
      "12+ months protection",
      "Enhanced gloss & hydrophobics",
    ],
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    title: "Paint Correction",
    description:
      "Professional removal of swirl marks, scratches, and oxidation to restore your paint's flawless finish.",
    price: "$299",
    category: "exterior",
    icon: "fas fa-paint-roller",
    features: [
      "Multi-stage polishing",
      "Swirl mark removal",
      "Scratch reduction",
      "Oxidation removal",
      "Gloss enhancement",
    ],
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 6,
    title: "Headlight Restoration",
    description:
      "Restore cloudy, yellowed headlights to like-new condition for improved visibility and appearance.",
    price: "$79",
    category: "exterior",
    icon: "fas fa-lightbulb",
    features: [
      "Headlight sanding",
      "Polishing compound",
      "UV protective coating",
      "Improved night visibility",
      "Like-new appearance",
    ],
    image:
      "https://images.unsplash.com/photo-1580273916550-e4c0b05e59bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 7,
    title: "Engine Bay Detailing",
    description:
      "Complete cleaning and dressing of your engine compartment to remove grime and restore appearance.",
    price: "$99",
    category: "exterior",
    icon: "fas fa-car-battery",
    features: [
      "Safe engine cleaning",
      "Degreasing",
      "Plastic & rubber dressing",
      "Metal polishing",
      "Spotless results",
    ],
    image:
      "https://images.unsplash.com/photo-1502160348070-6a60d6e1f1e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 8,
    title: "Leather Conditioning",
    description:
      "Specialized cleaning and conditioning of leather seats and surfaces to prevent cracking and fading.",
    price: "$89",
    category: "interior",
    icon: "fas fa-chair",
    features: [
      "Leather deep cleaning",
      "Premium conditioning",
      "UV protection",
      "Odor elimination",
      "Soft, supple finish",
    ],
    image:
      "https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
                        <p class="text-blue-600 font-bold">Starting at ${
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
