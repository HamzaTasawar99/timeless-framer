
//    hamburger
$(document).ready(function () {
  $(".burger-menu").on("click", ".bar", function () {
    $(".menu").slideToggle();
    $(".bar").toggleClass('change');
    $("header").toggleClass('menu-open');
  });
});



//    hamburger


// Window scroll and nav hidden 

document.addEventListener("DOMContentLoaded", () => {
  const presenceBlock = document.querySelector(".presence");
  const leftBlock = document.querySelector(".left-block");
  const navContainer = document.querySelector(".nav-container");
  const header = document.querySelector("header");

  function handleScroll() {
    // 👉 Only run this code if screen width is greater than 1199px
    if (window.innerWidth > 1199) {
      const presenceRect = presenceBlock.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (presenceRect.top < windowHeight && presenceRect.bottom > 0) {
        const scrollProgress = Math.min(1, 1 - presenceRect.top / windowHeight);
        const translateY = scrollProgress * 60;
        leftBlock.style.transform = `translateY(${translateY}px)`;

        if (presenceRect.top > 0) {
          navContainer.classList.add("hidden");
          header.classList.remove("blur-effect");
        } else {
          navContainer.classList.remove("hidden");
          header.classList.add("blur-effect");
        }
      } else {
        leftBlock.style.transform = `translateY(60px)`;
        navContainer.classList.remove("hidden");
        header.classList.add("blur-effect");
      }
    } else {
      // 👉 If screen is 1199px or less, reset everything (optional, safe reset)
      leftBlock.style.transform = `translateY(0px)`;
      navContainer.classList.remove("hidden");
      header.classList.remove("blur-effect");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial trigger
});

// Window scroll and nav hidden 


//    searchbar

const searchIcon = document.querySelector('li:last-child a.menu-img');
const overlay = document.querySelector('.search-overlay');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.classList.add('active');
  searchBox.classList.add('active');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  searchBox.classList.remove('active');
});


//    searchbar


// Slider 
const slider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.slide-img');
const textSlides = document.querySelectorAll('.text-slide');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

// Apply flex layout to button wrapper for spacing
const navContainer = document.querySelector('.slider-nav');
navContainer.style.display = 'flex';
navContainer.style.gap = '8px';

let current = 0;

function updateSlider() {
  const imageWidth = images[0].clientWidth;
  slider.style.transform = `translateX(-${current * imageWidth}px)`;

  textSlides.forEach((el, idx) => {
    el.classList.toggle('active', idx === current);
  });

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === images.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (current < images.length - 1) {
    current++;
    updateSlider();
  }
});

updateSlider();



// Slider 

// Faqs

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.contains("open");

    // Toggle current
    answer.classList.toggle("open", !isOpen);
    button.classList.toggle("active", !isOpen);
  });
});







// Faqs


// Gsap
// hand images
gsap.registerPlugin(ScrollTrigger);

// Set initial positions (only a little off, fingers still visible)
gsap.set(".hand-img:nth-child(1)", { x: -80, opacity: 0.5 }); // Left hand slightly left
gsap.set(".hand-img:nth-child(2)", { x: 80, opacity: 0.5 });  // Right hand slightly right

// Animate left hand
gsap.to(".hand-img:nth-child(1)", {
  x: 0,
  opacity: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".timeless",
    start: "top center",
    end: "bottom center",
    scrub: 1.5,   // slow smooth movement (1.5 seconds smoothing)
  }
});

// Animate right hand
gsap.to(".hand-img:nth-child(2)", {
  x: 0,
  opacity: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".timeless",
    start: "top center",
    end: "bottom center",
    scrub: 1.5,
  }
});
// hand images

// image rotate
gsap.registerPlugin(ScrollTrigger);

const brandGroup = document.querySelector(".brand-circle-group");

// 1. Set initial state
gsap.set(brandGroup, {
  scale: 1.5,
  rotation: 0
});

// 2. Infinite slow rotation
gsap.to(brandGroup, {
  rotation: 360,
  duration: 7000,    // <-- Make this BIGGER for slower rotation
  repeat: -1,
  ease: "linear"
});

// 3. Scale based on scroll position
gsap.to(brandGroup, {
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".feature-card",
    start: "top bottom",
    end: "top center",
    scrub: true
  }
});

// image rotate

// italic
gsap.registerPlugin(ScrollTrigger);

// Set initial positions
gsap.set(".hand-img:nth-child(1)", { x: -80 }); // Left hand
gsap.set(".hand-img:nth-child(2)", { x: 80 });  // Right hand
gsap.set(".feature-card .italic", { x: 100 });   // Italic text from right

// Animate left hand
gsap.to(".hand-img:nth-child(1)", {
  x: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".timeless",
    start: "top center",
    end: "bottom center",
    scrub: 1.5,
  }
});

// Animate right hand
gsap.to(".hand-img:nth-child(2)", {
  x: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".timeless",
    start: "top center",
    end: "bottom center",
    scrub: 1.5,
  }
});

// Animate the .italic text (only move from right)
gsap.to(".feature-card .italic", {
  x: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".timeless",
    start: "top center",
    end: "bottom center",
    scrub: 1.5,
  }
});
// italic



// counting effect
gsap.registerPlugin(ScrollTrigger);

let counter = { value: 60 };

function animateCounter() {
  counter.value = 60; // Reset counter
  gsap.to(counter, {
    value: 94,            // 👈 Target value
    duration: 1,
    ease: "power1.out",
    onUpdate: () => {
      document.querySelector(".stat-card h1").innerText = Math.floor(counter.value) + "%";
    },
    scrollTrigger: {
      trigger: ".stat-card",
      start: "top 80%",
      toggleActions: "restart none none none" // 👈 Restart animation every time
    }
  });
}

animateCounter();
// counting effect

// swift block

gsap.registerPlugin(ScrollTrigger);

// Set the image initially scaled to 1.5
gsap.set(".image", {
  scale: 1.5
});

// Animate the image scale to 1 when it's visible
gsap.to(".image", {
  scale: 1,          // Final scale when visible
  duration: 10000,       // Duration of scale animation
  scrollTrigger: {
    trigger: ".image-highlight",    // Trigger when the image container is in the viewport
    start: "top bottom",            // Start when top of image is at bottom of viewport
    end: "top center",              // End when top of image reaches the center of viewport
    scrub: true,                    // Smooth scroll linking
  }
});
// swift block

//Strategic 

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Function to trigger animation
function animateOnVisibility(entry) {
  if (entry.isIntersecting) {
    gsap.fromTo(entry.target, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
  }
}

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    animateOnVisibility(entry);
  });
}, {
  threshold: 0.1 // 10% visibility
});

// Observe the <p> tag
observer.observe(document.querySelector('.text-card p'));
//Strategic 

// detail block
gsap.registerPlugin(ScrollTrigger);

// This will animate the arrow every time the element is scrolled into view
gsap.fromTo(".last-img", 
  {
    y: 100,  // Start position (move 100px away from the original position)
    scale: 0.5, // Start at half scale
  },
  {
    y: 0,    // Move to the original position on the Y-axis
    scale: 1, // Scale to the original size
    duration: 1, // Duration of the animation
    scrollTrigger: {
      trigger: ".image-caption-card", // Element that triggers the scroll
      start: "top 80%", // When 80% of the image caption card is in view
      end: "bottom 20%", // When the bottom of the image caption card is in view
      scrub: false, // Not linked to scroll position
      toggleActions: "restart pause resume reverse", // Reset the animation on scroll
      markers: false, // Turn off markers for debugging
    }
  }
);
// detail block

// Gsap 