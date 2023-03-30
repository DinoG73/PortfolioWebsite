const sections = document.querySelectorAll('.section');
const sectBtnsBox = document.querySelectorAll('.control-box');
const sectBtnItem = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');


function PageTransition () {
    //BUTTON CLICK ACTIVE CLASS
    for(let i = 0; i < sectBtnItem.length; i++) {
        sectBtnItem[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

PageTransition();