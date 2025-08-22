function animateCircle(circle) {
      let target = parseInt(circle.dataset.percent);
      let count = 0;

      let interval = setInterval(() => {
        if (count <= target) {
          let deg = (360 * count) / 100;
          circle.style.background = `conic-gradient(#00c2c7 ${deg}deg, #ffffff33 0deg)`;
          circle.querySelector("span").textContent = count + "%";
          count++;
        } else {
          clearInterval(interval);
        }
      }, 20); // speed of animation
    }

    // Observe when skills section is visible
    let skillsSection = document.querySelector("#skills");
    let circles = document.querySelectorAll(".circle");
    let started = false;

    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        circles.forEach(circle => animateCircle(circle));
        started = true; // run only once
      }
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
     const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.innerHTML = navMenu.classList.contains("active")
      ? '<i class="fas fa-times"></i>'   // change to X
      : '<i class="fas fa-bars"></i>';  // change back to bars
  });