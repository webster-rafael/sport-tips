function Menu(e) {
  let list = document.getElementById('lista');
  if (window.innerWidth <= 768) { // Considerando dispositivos com largura de até 768 pixels como móveis
    e.name === 'menu' ? (e.name = "close", list.classList.add('mobile:top-[60px]'),list.classList.add('mobile:justify-center'),list.classList.add('mobile:mx-auto'), list.classList.add('mobile:opacity-100'), list.style.backgroundColor = 'black', list.style.color = 'white', list.parentElement.style.display = 'flex', list.parentElement.style.justifyContent = 'center', list.parentElement.style.marginLeft = 'auto', list.parentElement.style.marginRight = 'auto') :
      (e.name = "menu", list.classList.remove('mobile:top-[80px]'), list.classList.remove('mobile:opacity-100'), list.style.backgroundColor = '', list.style.color = '', list.parentElement.style.display = '', list.parentElement.style.justifyContent = '', list.parentElement.style.marginLeft = '', list.parentElement.style.marginRight = '');
  }
}