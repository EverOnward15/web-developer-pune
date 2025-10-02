document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const buttons = document.querySelectorAll("#tabs button");
  const dropdown = document.getElementById("dropdown");
  const cards = document.querySelectorAll(".card");

  function filterCards(value) {
    cards.forEach((card) => {
      if (value === "all" || card.dataset.package === value) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const value = btn.dataset.package;
      dropdown.value = value;
      filterCards(value);
    });
  });

  dropdown.addEventListener("change", (e) => {
    const value = e.target.value;
    filterCards(value);
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.package === value);
    });
  });

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const footerBottom = document.querySelector(".footer-bottom");
  if (footerBottom) {
    footerBottom.innerHTML = `<p>© ${new Date().getFullYear()} Prathamesh Satish Bhoite. All rights reserved.</p>`;
  }
});
