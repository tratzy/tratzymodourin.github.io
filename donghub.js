const apks = [
{
    title: "⚡ donghub premium",
    desc: "mungkin ada beberapa device yang ga support ",
    note: "note: cara masuk apk download dulu apk ori dari play store terus login lewat google, kalo udah hapus lagi terus download yang mod, kalo uda download masuk lewat akun google yang udh di daftarin di apk ori, selesai.",
    link: "https://sfl.gl/M3XwJ"
  },
];

const apkList = document.getElementById("apk-list");

apks.forEach((apk, index) => {
  const card = document.createElement("div");
  card.classList.add("apk-card");

  card.innerHTML = `
    <div class="apk-title">${apk.title}</div>
    <div class="apk-desc">${apk.desc}</div>
    <div class="apk-note">${apk.note}</div>
    <button class="download-btn">DOWNLOAD</button>
  `;

  card.querySelector(".download-btn").addEventListener("click", () => {
    window.location.href = apk.link;
  });

  apkList.appendChild(card);

  setTimeout(() => {
    card.classList.add("show");
  }, 200 * index);
});
