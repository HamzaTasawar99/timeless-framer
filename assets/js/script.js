   
//    hamburger
$(document).ready(function(){
$(".burger-menu ").on("click",".bar",function(){
  
    $(".menu").slideToggle();
    $(".bar").toggleClass('change');
    $(".menu li").slideRight();
  
   });
  
});
  

//    hamburger
   
   
   
   
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


    const slider = document.querySelector('.image-slider');
    const images = document.querySelectorAll('.slide-img');
    const textSlides = document.querySelectorAll('.text-slide');
    const prevBtn = document.querySelector('.nav.prev');
    const nextBtn = document.querySelector('.nav.next');
  
    let current = 0;
  
    function updateSlider() {
      // Slide image
      slider.style.transform = `translateX(-${current * 400}px)`;
  
      // Update text visibility
      textSlides.forEach((el, idx) => {
        el.classList.toggle('active', idx === current);
      });
  
      // Update buttons
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






    // test

    document.addEventListener("DOMContentLoaded", () => {
      const presenceBlock = document.querySelector(".presence");
      const leftBlock = document.querySelector(".left-block");
      const navContainer = document.querySelector(".nav-container");
      const header = document.querySelector("header");
  
      function handleScroll() {
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
      }
  
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial trigger
    });
    // test