const links = [
{
    nama: "WINK",
    icon: "wink.jpeg",
    link: "wink.html"
  },
  {
    nama: "CAPCUT",
    icon: "capcut.jpg",
    link: "capcut.html"
  },
  {
    nama: "WINKIT",
    icon: "winkit.jpg",
    link: "winkit.html"
  },
  {
    nama: "DONGHUB",
    icon: "donghub.jpg",
    link: "donghub.html"
  },
  {
    nama: "ULTRA MOTION",
    icon: "um.jpg",
    link: "um.html"
  },
  {
    nama: "NODE VIDEO",
    icon: "node-video.jpg",
    link: "node-video.html"
  },
    {
    nama: "REMINI",
    icon: "remini.jpg",
    link: "remini.html"
  },
      {
    nama: "HYRIZZ JB APK",
    icon: "hyrizz.jpg",
    link: "hyrizz.html"
  },
];

const linkList = document.getElementById("link-list");

links.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("link-card");

  card.innerHTML = `
    <div class="card-left">
      <img src="${item.icon}" alt="${item.nama}">
      <span class="card-title">${item.nama}</span>
    </div>
    <span class="arrow">›</span>
  `;

  card.addEventListener("click", () => {
    window.location.href = item.link;
  });

  linkList.appendChild(card);

  // Stagger Animation
  setTimeout(() => {
    card.classList.add("show");
  }, 150 * index);
});
