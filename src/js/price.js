document.addEventListener('DOMContentLoaded', () => {
  try {
    let elementsContent = document.querySelectorAll('.price-dev__content');
    if(document.documentElement.clientWidth >= 1024) {
      let btnPriceMore = document.querySelector('.btn-show-content');
  
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
    }
    
    if(document.documentElement.clientWidth <= 1023) {
      let btnsShow = document.querySelectorAll('.price-dev__btn-media');
      let btnsOrder = document.querySelectorAll('.price-dev__btn');

      btnsShow.forEach(btn => {
        btn.addEventListener('click', e => {
          let parent = e.target.parentNode;
          let content = parent.firstElementChild.nextElementSibling;

          if (e.target.closest('.active')) {
            btn.textContent = 'развернуть';
            e.target.classList.remove('active');
            e.target.previousElementSibling.classList.remove('active');
            content.classList.remove('active');
          } else {
            for (let i = 0; i < btnsShow.length; i++) {
              if (btnsShow[i].classList.contains('active')) {
                btnsShow[i].textContent = 'развернуть';
                btnsShow[i].classList.remove('active');
                elementsContent[i].classList.remove('active');
                btnsOrder[i].classList.remove('active');
              }
            }
            e.target.classList.toggle('active');
            e.target.previousElementSibling.classList.toggle('active');
            content.classList.toggle('active');
            btn.textContent = 'свернуть';
          }
        })
        return
      })

      document.addEventListener('click', () => {
        let listContentText = document.querySelectorAll('.price-dev__content.active .dev-content__item');

        listContentText.forEach(elem => {
          if( elem.textContent.length <= 1) {
            elem.style.display = 'none';
          }
        })
      })
      
    }

    //-------swiper

    const swiper1 = new Swiper('.price-project__swiper', {
  
      slidesPerView: 4,
      spaceBetween: 30,
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
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        570: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1225: {
          slidesPerView: 4,
        }
      }
  
    });

    openModal();

  } catch (error) {
    error
  }

})