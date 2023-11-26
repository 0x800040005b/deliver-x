`use strict`

document.addEventListener('DOMContentLoaded',function (){
   const buttons = document.querySelectorAll('[data-modal="register"]'),
       overlay = document.querySelector('#overlay'),
       closeBtn = document.querySelector('#close-btn')
   if(buttons.length === 0) return;

   buttons.forEach((button) => {
      button.addEventListener('click',function (e){
         e.preventDefault();
         console.log(this.dataset.modal);
         let popup = document.querySelector(`[data-modal-name="${this.dataset.modal}"]`);
         if(overlay && popup && closeBtn) {
            toggleItems();
         }
      })
   })

   if(closeBtn) closeBtn.addEventListener('click', function (e){
      toggleItems();
   });

function toggleItems() {
   overlay.classList.toggle('active');
   closeBtn.classList.toggle('active');
   popup.classList.toggle('active');
   document.body.classList.toggle('lock');

}
});