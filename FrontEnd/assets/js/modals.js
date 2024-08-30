import { removeWorks } from './work.js';

const modals = document.querySelectorAll('.modals');
const filter = document.querySelector('.filter');
const modalsButton = document.querySelectorAll('.modalsButton');
const buttonClose = document.querySelectorAll('.buttonClose');
const buttonBack = document.querySelector('.buttonBack');


async function openModals() {
    for (let i = 0; i < modals.length; i++) {
        modalsButton[i].addEventListener('click', async () =>{

            if (i == 1) {
                modals[0].classList.add('displayNone');  //Si on click sur ajouter photo alors la modale 0 se voit appliquer le style display none et donc disparait
            }

            modals[i].classList.remove('displayNone'); // Après avoir cliqué sur ce boutton, la modale 1 voit son style displaynone retiré et donc elle apparait
            filter.classList.remove('displayNone'); //ca fait apparaitre le filtre

            await removeWorks();
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
            modals[0].classList.remove('displayNone'); // Si on fait retour ca remet le style display none sur la modale 1 (pour la faire disparaitre) 
        });
    }

}

openModals()
closeModals();
backModal();