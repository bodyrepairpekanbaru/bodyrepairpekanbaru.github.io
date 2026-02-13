// Fungsi untuk mendeteksi adblock
function detectAdblock() {
  return new Promise((resolve) => {
    // Method 1: Deteksi melalui Google AdSense
    const adsToDetect = document.createElement("div");
    adsToDetect.innerHTML = "&nbsp;";
    adsToDetect.setAttribute("class", "adsense");
    adsToDetect.setAttribute(
      "style",
      "width:1px; height:1px; position: absolute; left: -10000px;",
    );
    document.body.appendChild(adsToDetect);

    // Method 2: Deteksi fetch ke ad server
    const originalFetch = window.fetch;
    window.fetch = function (...args) {
      const url = args[0]?.toString() || "";
      if (url.includes("ads") || url.includes("doubleclick")) {
        resolve(false); // Ads loaded successfully
      }
      return originalFetch.apply(this, args);
    };

    // Timeout - jika 3 detik ada ads, resolve dengan true (adblock terdeteksi)
    setTimeout(() => {
      window.fetch = originalFetch;
      document.body.removeChild(adsToDetect);
      resolve(true); // Adblock terdeteksi
    }, 3000);
  });
}

// Fungsi untuk menampilkan warning
function showAdblockWarning() {
  const overlay = document.createElement("div");
  overlay.id = "adblock-warning";
  overlay.innerHTML = `
    <div class="adblock-container">
      <div class="adblock-content">
        <h2>⚠️ Adblock Terdeteksi</h2>
        <p>Kami mendeteksi Anda menggunakan adblocker. Konten gratis kami didukung oleh iklan.</p>
        <p>Silakan nonaktifkan adblock untuk melanjutkan menggunakan website ini.</p>
        <button id="close-warning" class="btn-warning">Saya Paham</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById("close-warning").addEventListener("click", () => {
    overlay.remove();
  });
}

// Inisialisasi
document.addEventListener("DOMContentLoaded", async () => {
  const hasAdblock = await detectAdblock();

  if (hasAdblock) {
    showAdblockWarning();
    // Opsional: blur konten atau disable fitur tertentu
    document.body.style.filter = "blur(5px)";
  }
});
