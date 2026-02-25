const apks = [
{
    title: "⚡ ultra motion terbaru (clone)",
    desc: "support preset diatas 5mb.",
    note: "Note: clone itu apa bg? clone itu apk yang bisa diinstal tanpa hapus apk yang udh ada jadi bisa ada 2.",
    link: "https://sfl.gl/mR3TEk"
  },
{
    title: "⚡ ultra motion dark mode",
    desc: "support preset diatas 5mb.",
    note: "Note: bisa semua device.",
    link: "https://sfl.gl/kvC8"
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
