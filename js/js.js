const $headerMenu = document.querySelector('.icon-menu')
const $ul = document.querySelector('#header ul')

const activateMenu = () => {
    $ul.classList.contains('animation') ? $ul.classList.add('animation-backwards') : $ul.classList.add('animation')
    if($ul.classList.contains('animation') && $ul.classList.contains('animation-backwards')){
        $ul.classList.remove('animation')
        $ul.classList.remove('animation-backwards')
    }
} 

$headerMenu.addEventListener('click',activateMenu)
