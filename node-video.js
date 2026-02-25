const apks = [
{
    title: "⚡ NODE VIDEO 8.4.1",
    desc: "Premium Full Unlock (Efek & Fitur Pro Terbuka)",
    note: "mungkin ada beberapa device yang ga support",
    link: "https://sfl.gl/JgC9V3"
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
