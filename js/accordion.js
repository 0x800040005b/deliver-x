`use strict`
document.addEventListener('DOMContentLoaded', function (){
    const accordionButtons = document.querySelectorAll('.footer-list__title');
    if(accordionButtons.length === 0) return;
    accordionButtons.forEach((button) => {
       button.addEventListener('click', clickAccordionHandler);
    });


    function  clickAccordionHandler(e) {
        if(!this.classList.contains('active')){
            resetAccordions();
        }
        this.classList.toggle('active');
        let menu = this.nextElementSibling;
        if (menu !== null){
            let nestedMenus = menu.querySelectorAll('.footer-menu');
            if(nestedMenus.length === 0) return;
            nestedMenus.forEach(nestedMenu => {
                nestedMenu.classList.toggle('active');
            })
            menu.classList.toggle('active');
        }

    }

    function resetAccordions() {
        const menus = document.querySelectorAll('.footer-menu');

        accordionButtons.forEach(button => button.classList.remove('active'));
        menus.forEach(menu => menu.classList.remove('active'));

        }
});