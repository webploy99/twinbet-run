const openMenu = function(){
    let menu = document.getElementById("ul");
    menu.style.width="300px";
}
const closeMenu = function(){
    let menu = document.getElementById("ul");
    menu.style.width="0";
}

var swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay: true,
  // speed: 7000,
  autoplay:{
    display: 3500,
  },
  slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      // spaceBetween: 30
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      // spaceBetween: 40
    }
  }


});