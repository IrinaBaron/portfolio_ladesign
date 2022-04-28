document.addEventListener('DOMContentLoaded', () => {
  try {

    const swiper2 = new Swiper('.swiper-loft__swiper', {
  
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-loft__swiper .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-loft__swiper .swiper-button-next',
        prevEl: '.swiper-loft__swiper .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 40,
      //   },
      //   570: {
      //     slidesPerView: 2,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //   },
      //   1225: {
      //     slidesPerView: 4,
      //   }
      // }
  
    });



  } catch (error) {
    console.log(error)
  }


})