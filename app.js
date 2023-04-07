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
        });
    }

    //SECTIONS ACTIVE CLASS
    allSection.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            //REMOVE SELECTED FROM THE OTHER BUTNS
            sectBtnsBox.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            //HIDE OTHER SECTIONS
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
        console.log(e.target);
    });

    //TOGGLE THEME
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransition();