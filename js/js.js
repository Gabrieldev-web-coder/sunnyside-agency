const $headerMenu = document.querySelector('.icon-menu')
const $ul = document.querySelector('#header ul')

const activateMenu = () => {
    $ul.style.display === 'none' ? $ul.style.display = 'flex' : $ul.style.display = 'none'
}

$headerMenu.addEventListener('click',activateMenu)