const apks = [
  {
    title: "⚡ CAPCUT PREMIUM NEW VERSION",
    desc: "Unlock All Fitur.",
    note: "Note: kalo mau pake fitur ai harus login dulu cara loginnya downlad dulu apk capcut ORI terus login pake akun google kalo udh harus cepet hapus apk ORI lalu downlad yang mod abis itu login pake akun yg udh di loginin di apk ori.",
    link: "https://sfl.gl/yAbYf"
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