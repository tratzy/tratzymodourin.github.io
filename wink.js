const apks = [
  {
    title: "⚡ WINK FIX V2.21.0",
    desc: "Unlock All Fitur, unlimited uhd ai.",
    note: "Note: mungkin tidak support di beberapa device.",
    link: "https://sfl.gl/FfuaQ"
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