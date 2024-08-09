const modalEditPicture = document.querySelector('.modalEditPicture');
const filter = document.querySelector('.filter');
const editButton = document.querySelector('.editButton');
const buttonClose = document.querySelector('.buttonClose');




function openModals() {
    editButton.addEventListener('click', () =>{
        modalEditPicture.classList.remove('displayNone');
        filter.classList.remove('displayNone');
    });
}

function closeModals() {

    buttonClose.addEventListener('click', ()=> {
        modalEditPicture.classList.add('displayNone');
        filter.classList.add('displayNone');
    });

    filter.addEventListener('click', ()=> {
        modalEditPicture.classList.add('displayNone');
        filter.classList.add('displayNone');
    });
}

openModals();
closeModals();