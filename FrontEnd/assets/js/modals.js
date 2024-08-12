const modals = document.querySelectorAll('.modals');
const filter = document.querySelector('.filter');
const modalsButton = document.querySelectorAll('.modalsButton');
const buttonClose = document.querySelectorAll('.buttonClose');
const buttonBack = document.querySelector('.buttonBack');




function openModals() {
    for (let i = 0; i < modals.length; i++) {
        modalsButton[i].addEventListener('click', () =>{

            if (i == 1) {
                modals[0].classList.add('displayNone');
            }

            modals[i].classList.remove('displayNone');
            filter.classList.remove('displayNone');
        });
    }
}

function closeModals() {

    for (let i = 0; i < modals.length; i++) {
        buttonClose[i].addEventListener('click', ()=> {
            modals[i].classList.add('displayNone');
            filter.classList.add('displayNone');
        });
        
        filter.addEventListener('click', ()=> {
            modals[i].classList.add('displayNone');
            filter.classList.add('displayNone');
        });
    }
}

function backModal(){
    for (let i = 0; i < modals.length; i++) {
        buttonBack.addEventListener('click', ()=>{
            modals[1].classList.add('displayNone');
            modals[0].classList.remove('displayNone');
        });
    }

}

openModals();
closeModals();
backModal();