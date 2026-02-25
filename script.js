const links = [
{
    nama: "WINK",
    icon: "wink.jpeg",
    link: "wink.html"
  },
  {
    nama: "ULTRA MOTION",
    icon: "um.jpg",
    link: "um.html"
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
