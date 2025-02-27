    // animation typing
    var typed = new Typed(".auto-type", {
        strings: ["Designer", "Developer", "Larry Daniels"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        smartBackspace: false,
        loop: true,
      });
      // owel carousle
      $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 20000,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
  
      // increase number of counter
      let valueDisplays = document.querySelectorAll(".counter");
      let interval = 1;
  
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
  
        // change backgroundcolor navbar
    const nav = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 650) {
        nav.classList.add("navbar-scroll");
      } else if (window.scrollY < 650) {
        nav.classList.remove("navbar-scroll");
      }
    });
    // change icon of button navbar
let btn = document.querySelector(".toggle");
let icon = document.querySelector(".fa-bars");
btn.onclick = function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
};
// button top scroll
let up = document.querySelector(".arrow");
window.onscroll = function () {
  if (this.scrollY >= 100) {
    up.style.opacity = "1";
  } else {
    up.style.opacity = "0";
  }
};

up.onclick = function () {
  window.scrollTo(0, 0);
};