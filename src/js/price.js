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
    })



  } catch (error) {
    error
  }

})