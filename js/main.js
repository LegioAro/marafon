function btnResize() {
  const btnHeader = document.querySelector('.header .btn');
  const btnDesctBlock = document.querySelector('.header__btn-desc');
  const btnMobBlock = document.querySelector('.header__btn-mob');

  if (btnHeader && btnDesctBlock && btnMobBlock && window.innerWidth <= 768) {
    btnMobBlock.appendChild(btnHeader);
  } else {
    btnDesctBlock.appendChild(btnHeader);
  }
}

btnResize();

window.addEventListener('resize', btnResize);
