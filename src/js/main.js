document.addEventListener('DOMContentLoaded', () => {
  try {
    try {
      openModal();
    } catch (error) {
      console.log(error)
    }

    try {
      let events = document.querySelectorAll('.portfolio__item');
      events.forEach(event => {
        event.addEventListener('click', e => {
          window.location.href = 'loft.html';
        })
        event.addEventListener('keyup', e => {
          if (e.code == 'Enter') {
            window.location.href = 'loft.html';
          }
        })
      })
    } catch (error) {
      console.log(error)
    }

    // ----------burger-menu 

    const burgerBtn = document.querySelector('.header__burger');

    burgerBtn.addEventListener('click', clickBurger);
    burgerBtn.addEventListener('keyup', (e) => {
      if (e.code == 'Enter') {
        clickBurger();
        return
      }
    });

    function clickBurger() {
      burgerBtn.classList.toggle('active');
      document.querySelector('.header__nav').classList.toggle('active');
      document.querySelector('.header').classList.toggle('active');
      document.body.classList.toggle('stop-scrolling');
    }


    // -------------team
    let teamBtns = document.querySelectorAll('.team__btn');
    let contents = document.querySelectorAll('.team__content');

    // document.body.addEventListener('click', e => {
    //   console.log(e.target);
    // })
    teamBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        if (e.target.closest('.show')) {
          e.target.classList.remove('show');
          e.target.nextElementSibling.classList.remove('show');
        } else {
          for (let i = 0; i < teamBtns.length; i++) {
            if (teamBtns[i].classList.contains('show')) {
              teamBtns[i].classList.remove('show');
              contents[i].classList.remove('show');
            }
          }
          e.target.classList.toggle('show');
          e.target.nextElementSibling.classList.toggle('show');
        }
      })
      return
    })

    // -------------portfolio
    let elements = document.querySelectorAll('.portfolio__item');

    document.querySelector('.num-all').textContent = elements.length;
    let aparts = document.querySelectorAll('.apart');
    document.querySelector('.num-appart').textContent = aparts.length;
    let houses = document.querySelectorAll('.home');
    document.querySelector('.num-home').textContent = houses.length;
    let commercial = document.querySelectorAll('.commerc');
    document.querySelector('.num-commerc').textContent = commercial.length;
    const btnShowMore = document.querySelector('.portfolio__btn');

    function hideElements(value) {
      for (let i = value; i < elements.length; i++) {
        let elem = elements[i];
        elem.style.display = 'none';
      }
      return
    }
    hideElements(10);

    if (document.documentElement.clientWidth <= 767) {
      hideElements(7);
    }

    let btnsShowAll = document.querySelectorAll('.btns-list__btn');

    btnsShowAll.forEach(btn => {
      btn.addEventListener('click', e => {
        elements.forEach(elem => {
          elem.style.display = 'none';
        })
        if (e.target.classList.contains('apart-elems')) {
          let aparts = document.querySelectorAll('.apart');
          aparts.forEach(apart => {
            apart.style.display = 'block';

          })
          // document.querySelector('.item4').style.gridColumn = '5/7';
          return
        }
        if (e.target.classList.contains('home-elems')) {
          let houses = document.querySelectorAll('.home');
          houses.forEach(house => {
            house.style.display = 'block';
          })
          return
        }
        if (e.target.classList.contains('commerc-elems')) {
          let elems = document.querySelectorAll('.commerc');
          elems.forEach(elem => {
            elem.style.display = 'block';
          })
          return
        }
        if (e.target.classList.contains('all-elems')) {
          elements.forEach(elem => {
            elem.style.display = 'block';
          })
          hideElements();
          // document.querySelector('.item4').style.gridColumn = '7/9';
          return
        }
        // let elems = document.querySelectorAll(`.${direct}`);
      })
    })

    btnShowMore.addEventListener('click', e => {
      elements.forEach(elem => {
        elem.style.display = 'block';
      })
    })


    //--------------modal
    function openModal() {
      const clickModal = document.querySelector('.portfolio__btn-applic');
      const modal = document.querySelector('.portfolio__modal');

      clickModal.addEventListener('click', () => {
        modal.classList.add('modal_active');
        document.body.classList.add('stop-scrolling');
      });

      let closeModal = document.querySelector('.portfolio__modal .menu__close');
      closeModal.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.body.classList.remove('stop-scrolling');
      });

      closeModal.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {
          modal.classList.remove('modal_active');
          document.body.classList.remove('stop-scrolling');
          return
        }
      });
    }


    // let closeInfo = document.querySelector('.contacts__close');

    // closeInfo.addEventListener('click', function () {
    //   document.querySelector('.contacts__info.active').classList.remove('active');
    // })

    //form__input

    // const nameDiv = document.querySelector('.contacts__form-text');
    // const emailDiv = document.querySelector('.contacts__form-email');

    // let input = document.querySelector('.contacts__input');
    // let nameInput = document.querySelector('.name');
    // let emailInput = document.querySelector('.email');
    // let btn = document.querySelector('.contacts__form-btn');
    // let aboutBtn = document.querySelector('.form__btn');
    // let aboutInput = document.querySelector('.form__text');

    // let mailformat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // let simbol = /^[а-яА-ЯёЁ\s]+$/;
    // let div = document.createElement('div');
    // let div1 = document.createElement('div');
    // let div2 = document.createElement('div');


    // btn.addEventListener('click', function (e) {
    //   e.preventDefault();
    //   let validName = validateName();
    //   let validEmail = validateEmail();

    // })

    // aboutBtn.addEventListener('click', function (e) {
    //   e.preventDefault();

    //   div2.classList.add('validate');
    //   document.querySelector('.about__form').append(div2);
    //   if (aboutInput.value == '') {
    //     div2.innerHTML = 'Введите email';
    //     aboutInput.style.borderColor = '#F06666';
    //   } else if (aboutInput.value.match(mailformat)) {
    //     div2.innerHTML = '';
    //     aboutInput.style.borderColor = 'transparent';
    //     // return true
    //   } else if (!aboutInput.value.match(mailformat)) {
    //     div2.innerHTML = 'Недопустимый формат';
    //     aboutInput.style.borderColor = '#F06666';
    //   }
    // })

    function validateName() {
      div.classList.add('validate');
      nameDiv.append(div);
      if (nameInput.value == '') {
        div.innerHTML = 'Введите имя';
        nameInput.style.borderColor = '#FF3030';
      } else if (!nameInput.value.match(simbol)) {
        div.innerHTML = 'Недопустимый формат';
        nameInput.style.borderColor = '#FF3030';
      } else if (nameInput.value.match(simbol)) {
        div.innerHTML = '';
        nameInput.style.borderColor = 'transparent';
        return true
      }

    }

    function validateEmail() {
      div1.classList.add('validate');
      emailDiv.append(div1);
      if (emailInput.value == '') {
        div1.innerHTML = 'Введите email';
        emailInput.style.borderColor = '#FF3030';
      } else if (emailInput.value.match(mailformat)) {
        div1.innerHTML = '';
        emailInput.style.borderColor = 'transparent';
        return true
      } else if (!emailInput.value.match(mailformat)) {
        div1.innerHTML = 'Недопустимый формат';
        emailInput.style.borderColor = '#FF3030';

      }

    }

    // ------------scroll--------------
    const btnScroll = document.querySelector('.btn__scroll');
    window.addEventListener('scroll', () => {

      let scrollNum = window.pageYOffset;
      console.log(scrollNum);
      if (scrollNum >= '100') {
        btnScroll.style.display = 'block';
        btnScroll.style.position = 'fixed';
        btnScroll.style.bottom = '80px';
        btnScroll.style.right = '40px';

      } else {
        btnScroll.style.display = 'none';
      }
      if (document.querySelector('.header').classList.contains('portfolio-header')) {
        return
      }
      createScroll(150, scrollNum);
      // if (document.documentElement.clientWidth <= 1225) {
      //   createScroll(550, scrollNum);
      // };
      // if (document.documentElement.clientWidth <= 1023) {
      //   createScroll(430, scrollNum);
      // };

    }, { passive: true })

    let links = document.querySelectorAll('.nav__link');

    links.forEach(link => {
      link.addEventListener('click', () => {
        window.scroll({ behavior: 'smooth' })
      })
    })

    function createScroll(num, scrollNum) {

      if (scrollNum >= num) {
        document.querySelector('.header').classList.add('color-header');
      } else {
        document.querySelector('.header').classList.remove('color-header');
      }
    }


  } catch (error) {
    console.log(error)
  }


})