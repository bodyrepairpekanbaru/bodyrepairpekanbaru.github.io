// Fungsi untuk mendeteksi adblock secara lebih akurat
function detectAdblock() {
  return new Promise((resolve) => {
    // Method 1: Deteksi melalui script blocking
    const testScript = document.createElement("script");
    testScript.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    testScript.async = true;
    testScript.onerror = () => {
      resolve(true); // Adblock detected
    };
    testScript.onload = () => {
      resolve(false); // No adblock
    };
    document.head.appendChild(testScript);

    // Method 2: Timeout fallback
    setTimeout(() => {
      resolve(true); // Assume adblock if script doesn't load
    }, 2000);
  });
}

// Fungsi alternatif deteksi dengan bait
function detectAdblockByBait() {
  return new Promise((resolve) => {
    // Buat elemen dummy yang dikira iklan
    const bait = document.createElement("div");
    bait.innerHTML = "&nbsp;";
    bait.setAttribute("id", "advertisement-container");
    bait.setAttribute("style", "display:none;");
    document.body.appendChild(bait);

    // Cek ukuran - jika 0, berarti dihapus oleh adblock
    setTimeout(() => {
      if (bait.offsetHeight === 0) {
        document.body.removeChild(bait);
        resolve(true); // Adblock terdeteksi
      } else {
        document.body.removeChild(bait);
        resolve(false); // Tidak ada adblock
      }
    }, 1500);
  });
}

// Fungsi untuk menampilkan warning yang persistent
function showAdblockWarning() {
  // Hapus warning yang sudah ada
  const existingWarning = document.getElementById("adblock-warning");
  if (existingWarning) {
    existingWarning.remove();
  }

  const overlay = document.createElement("div");
  overlay.id = "adblock-warning";
  overlay.innerHTML = `
    <div class="adblock-container">
      <div class="adblock-content">
        <div class="adblock-icon">⚠️</div>
        <h2>Adblock Terdeteksi</h2>
        <p>Kami mendeteksi Anda menggunakan adblocker. Website ini memerlukan iklan untuk tetap berjalan.</p>
        <p><strong>Silakan nonaktifkan adblock untuk mengakses konten.</strong></p>
        <div class="adblock-actions">
          <button id="disable-content" class="btn-primary">Saya Mengerti, Nonaktifkan Adblock</button>
          <button id="close-warning" class="btn-secondary">Saya Tahu Risikonya</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Blur konten utama
  document.body.style.filter = "blur(8px)";
  document.body.style.pointerEvents = "none";

  document.getElementById("close-warning").addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.style.filter = "none";
    document.body.style.pointerEvents = "auto";
  });

  document.getElementById("disable-content").addEventListener("click", () => {
    alert(
      "Silakan nonaktifkan adblock di pengaturan browser Anda dan refresh halaman ini.",
    );
  });
}

// Inisialisasi dengan pengecekan ganda
document.addEventListener("DOMContentLoaded", async () => {
  // Method 1: Deteksi script
  const hasAdblock1 = await detectAdblock();

  // Method 2: Deteksi bait (jika method 1 tidak mendeteksi)
  let hasAdblock2 = false;
  if (!hasAdblock1) {
    hasAdblock2 = await detectAdblockByBait();
  }

  const hasAdblock = hasAdblock1 || hasAdblock2;

  console.log("Adblock detected:", hasAdblock);

  if (hasAdblock) {
    showAdblockWarning();
  }
});
