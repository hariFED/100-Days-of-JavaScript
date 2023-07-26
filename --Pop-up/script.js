let popupBtn = document.querySelector('button');
let closeBtn = document.querySelector('.close');
let popupBox = document.querySelector('.box-model')
const popupContent = document.querySelector('.box-content')


popupBtn.addEventListener('click', popupBoxDisplay)
closeBtn.addEventListener('click', closeDisplay)
function popupBoxDisplay(e) {
    e.preventDefault();
    popupBox.style.display = 'block'

}

function closeDisplay() {
    popupContent.classList.add('slide-out')
    setTimeout(() => {
        popupBox.style.display = 'none'
        popupContent.classList.remove('slide-out')
    }, 500)

}

