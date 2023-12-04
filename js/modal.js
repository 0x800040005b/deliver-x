`use strict`

document.addEventListener('DOMContentLoaded',function (){
   const buttons = document.querySelectorAll('[data-modal="register"]'),
       overlay = document.querySelector('#overlay'),
       closeButton = document.querySelector('#close-btn'),
       closeButtonMenu = document.querySelector('#close-btn__menu'),
       menu = document.querySelector('.header-mobile__block'),
       burgerButton = document.querySelector('.burger'),
       form = document.querySelector('.register-form'),
       popup = document.querySelector('.popup');
   if(buttons.length === 0) return;



   buttons.forEach((button) => {
      button.addEventListener('click',registerRestaurant)
   })

   if(closeButton) closeButton.addEventListener('click', function (e){
       buttons.forEach(button => button.dataset.active="false");
       hideModal(popup);
   });
   form.addEventListener('submit', (e)=> e.preventDefault());
   burgerButton.addEventListener('click', openMenuHandler);
   closeButtonMenu.addEventListener('click', closeMenuHandler);
function registerRestaurant(e){
    this.dataset.active = 'true';

      e.preventDefault();
      let popup = document.querySelector(`[data-modal-name="${this.dataset.modal}"]`);
      if(overlay && popup && closeButton) {
         showModal(popup);
      }

}
function openMenuHandler(e) {
    burgerButton.dataset.active = 'true';
    showModal(menu);
}
function closeMenuHandler(e) {
    burgerButton.dataset.active = 'false';
    hideModal(menu);
}

function hideModal(popup) {

    if(overlay && closeButton){
        popup.classList.remove('active');
        let hasPopupActive = document.querySelectorAll('[data-active="true"]').length > 0;
        if(!hasPopupActive){
            overlay.classList.remove('active');
            document.body.classList.remove('lock');
        }
    }

}
function showModal(popup) {
    document.body.classList.add('lock');

    if(overlay && closeButton && popup){
        popup.classList.add('active');
        if(!overlay.classList.contains('active')){
            overlay.classList.add('active');
        }

    }
}
});