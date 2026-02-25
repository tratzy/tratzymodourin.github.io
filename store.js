const products = [
  {
    title: "🔥 Alight Motion Premium",
    desc: "Full fitur unlocked. No watermark.",
    oldPrice: "Rp 10.000",
    newPrice: "Rp 4.000",
    badge: "BEST SELLER"
  }
];

const storeList = document.getElementById("store-list");

products.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("apk-card");

  card.innerHTML = `
    ${item.badge ? `<div class="badge">${item.badge}</div>` : ""}
    <div class="apk-title">${item.title}</div>
    <div class="apk-desc">${item.desc}</div>
    <div class="price-box">
      <span class="old-price">${item.oldPrice}</span>
      <span class="new-price">${item.newPrice}</span>
    </div>
    <button class="buy-btn">BUY</button>
  `;

  card.querySelector(".buy-btn").addEventListener("click", () => {
  openMethodPopup(item.title);
});

  storeList.appendChild(card);

  setTimeout(() => {
    card.classList.add("show");
  }, 200 * index);
});


/* ===============================
   POPUP PILIH METODE
================================ */

const popupHTML = `
<div class="popup" id="popup">
  <div class="popup-content" id="popup-content">
    <h3>Pilih Metode Pembayaran</h3>

    <button onclick="showPayment('qris')">QRIS</button>
    <button onclick="showPayment('dana')">DANA</button>
    <button onclick="showPayment('gopay')">GOPAY</button>

    <div class="close-popup" onclick="closePopup()">Tutup</div>
  </div>
</div>
`;

document.body.insertAdjacentHTML("beforeend", popupHTML);

function openMethodPopup(productName) {
  document.getElementById("popup").classList.add("active");
  window.selectedProduct = productName; // simpan produk
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
  resetPopup();
}

function resetPopup() {
  document.getElementById("popup-content").innerHTML = `
    <h3>Pilih Metode Pembayaran</h3>
    <button onclick="showPayment('qris')">QRIS</button>
    <button onclick="showPayment('dana')">DANA</button>
    <button onclick="showPayment('gopay')">GOPAY</button>
    <div class="close-popup" onclick="closePopup()">Tutup</div>
  `;
}


/* ===============================
   TAMPILKAN DETAIL METODE
================================ */

function showPayment(type) {
  const content = document.getElementById("popup-content");

  let paymentHTML = "";
  let whatsappNumber = "6285782544861"; // GANTI NOMOR LU

  if (type === "qris") {
  paymentHTML = `
    <h3>QRIS</h3
    <div class="payment-note">
      lanjut ke wa admin ya
    </div>
  `;
}

  if (type === "dana") {
    paymentHTML = `
      <h3>Pembayaran DANA</h3>
        <div class="payment-note">
        lanjut ke wa admin ya
      </div>
    `;
  }

  if (type === "gopay") {
    paymentHTML = `
      <h3>Pembayaran GOPAY</h3>
       <div class="payment-note">
       lanjut kirim ke wa admin ya
      </div>
    `;
  }

  content.innerHTML = `
    ${paymentHTML}
    <button class="continue-btn" id="continueBtn" disabled>
      Lanjut (5)
    </button>
    <div class="close-popup" onclick="closePopup()">Kembali</div>
  `;

  startCountdown(whatsappNumber);
}
function startCountdown(whatsappNumber) {
  let timeLeft = 5;
  const button = document.getElementById("continueBtn");

  const interval = setInterval(() => {
    timeLeft--;
    button.textContent = `Lanjut (${timeLeft})`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      button.textContent = "Lanjut";
      button.disabled = false;
      button.classList.add("active");

      button.addEventListener("click", () => {
  button.classList.add("loading");

  const message = encodeURIComponent(
    `bg mau beli ${window.selectedProduct} `
  );

  setTimeout(() => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
    button.classList.remove("loading");
  }, 1200);
});
}
  }, 1000);
}
