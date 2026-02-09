document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");
  const hamburger = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  let lastScroll = 0;
  const scrollDelta = 10;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    let currentSection = "";

    // ===== ACTIVE LINK ON SCROLL =====
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        currentScroll >= sectionTop - 120 &&
        currentScroll < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });

    // ===== HIDE / SHOW NAVBAR =====
    if (currentScroll > lastScroll && currentScroll > 100) {
      // scroll ke bawah
      navbar.classList.add("hide");
    } 
    else if (lastScroll - currentScroll > scrollDelta) {
      // scroll ke atas dikit aja
      navbar.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });

  // ===== SHOW NAVBAR WHEN CURSOR TO TOP =====
  document.addEventListener("mousemove", (e) => {
    if (e.clientY < 80) {
      navbar.classList.remove("hide");
    }
  });

  // ===== MOBILE NAVBAR TOGGLE =====
  hamburger.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });

  // ===== CLOSE MENU AFTER CLICK =====
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
    });
  });

});
