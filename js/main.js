// ================================================= //
// ======== Preloader with spinner Function ======== //
// ================================================= //
window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "flex";

  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";

    document.getElementById("content").style.display = "block";
  }, 500);
});
// ================================================= //

// ================================================= //
// ================ Nav Bar Functions ============== //
// ================================================= //

let navbar = document.getElementById("navbar-example2");

// Listen for the scroll event
window.addEventListener("scroll", function () {
  // Check if the scroll position is beyond 100vh
  if (window.scrollY > window.innerHeight) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Change the background color
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.75)"; // Reset to transparent
  }
});

// Listen for the scroll event
window.addEventListener("scroll", function () {

  // Check the scroll position
  if (window.scrollY === 0) {
    // Add the 'scroll' class to the navbar when at the top
    navbar.classList.add("scroll");
  } else if (window.scrollY >= window.innerHeight) {
    // Remove the 'scroll' class when scrolled beyond 100vh
    navbar.classList.remove("scroll");
  }
});
// ================================================= //

// ================================================= //
// ============== Menu Icons Functions ============= //
// ================================================= //
window.addEventListener("load", function () {
  let menuIcon = document.getElementById("menuIcon");
  let closedIcon = document.getElementById("closedIcon");
  let element = document.querySelector(".navbar-mobile-ul");
  let navbarDiv = document.getElementById("navbarSupportedContent");

  function showMenu() {
    closedIcon.style.display = "inline-block";
    menuIcon.style.display = "none";
    element.style.visibility = "visible";
    element.style.opacity = "1";
    navbarDiv.classList.add("navbar-mobile");
  }

  function hideMenu() {
    closedIcon.style.display = "none";
    menuIcon.style.display = "inline-block";
    element.style.visibility = "hidden";
    element.style.opacity = "0";
    navbarDiv.classList.remove("navbar-mobile");
  }

  // Add event listener for window resize
  window.addEventListener("resize", function () {
    // Check window width and adjust styles
    if (window.innerWidth >= 992) {
      // Desktop view
      element.style.visibility = "visible";
      element.style.opacity = "1";
      navbarDiv.classList.remove("navbar-mobile");
    } else {
      // Mobile view
      if (menuIcon.style.display === "none") {
        // Mobile menu is open
        navbarDiv.classList.add("navbar-mobile");
      } else {
        // Mobile menu is closed
        element.style.visibility = "hidden";
        element.style.opacity = "0";
        navbarDiv.classList.remove("navbar-mobile");
      }
    }
  });

  menuIcon.onclick = function () {
    showMenu();
  };
  closedIcon.onclick = function () {
    hideMenu();
  };
});
// ================================================= //

// ================================================= //
// ================= Typing Function =============== //
// ================================================= //
let typedTextSpan = document.querySelector(".typed-text");
let cursorSpan = document.querySelector(".cursor");

let textArray = ["Developer", "Designer", "Freelancer", "Programer"];
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// ================================================= //

// ================================================= //
// ========== Back To Top Button =================== //
// ================================================= //
window.addEventListener("load", function () {
  let mybutton = document.getElementById("myBtn");

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.onscroll = function () {
    scrollFunction();
  };

  mybutton.onclick = function () {
    topFunction();
  };

  // Use requestAnimationFrame to delay the execution slightly
  requestAnimationFrame(function () {
    scrollFunction();
  });
});
// ================================================= //
