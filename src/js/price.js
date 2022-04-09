document.addEventListener('DOMContentLoaded', () => {
  try {
    let btnPriceMore = document.querySelector('.price-dev__btn-more');
    let elementsContent = document.querySelectorAll('.price-dev__content');

    btnPriceMore.addEventListener('click', () => {
      if (btnPriceMore.classList.contains('active')) {
        btnPriceMore.textContent = 'развернуть';
        elementsContent.forEach(elem => {
          elem.classList.remove('active');
        })
        btnPriceMore.classList.remove('active');
        return;
      }
      elementsContent.forEach(elem => {
        elem.classList.toggle('active');
      });
      btnPriceMore.classList.toggle('active');
      btnPriceMore.textContent = 'свернуть';
    });

    const swiper1 = new Swiper('.price-project__swiper', {
  
      slidesPerView: 4,
      pagination: {
        el: '.price-project__swiper .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.price-project__swiper .swiper-button-next',
        prevEl: '.price-project__swiper .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
  
    });



  } catch (error) {
    error
  }

})