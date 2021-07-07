const $headerMenu = document.querySelector('.icon-menu')
const $ul = document.querySelector('#header ul')


const activateMenu = () => {
    $ul.classList.toggle('animation')
}

$headerMenu.addEventListener('click',activateMenu)
