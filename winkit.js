supportt apks = [
{
    title: "winkit premium v1.16.1 (TERBARU)",
    desc: "fix bug pengguna terlalu banyak",
    note: "Note: download versi lain jika apk baru error atau jika apk tidak supportt",
    link: "https://sfl.gl/rnFLrqx6"
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
