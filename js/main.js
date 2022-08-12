/* Parallax */

let ob1 = document.querySelector('.ob-1');
let ob2 = document.querySelector('.ob-2');
let ob3 = document.querySelector('.ob-3');
let ob4 = document.querySelector('.ob-4');
let ob5 = document.querySelector('.ob-5');
let ob6 = document.querySelector('.ob-6');
let ob7 = document.querySelector('.ob-7');
let ob8 = document.querySelector('.ob-8');
let ob9 = document.querySelector('.ob-9');
let ob10 = document.querySelector('.ob-10');
let ob11 = document.querySelector('.ob-11');
let ob12 = document.querySelector('.ob-12');
let ob13 = document.querySelector('.ob-13');
let ob14 = document.querySelector('.ob-14');
let ob15 = document.querySelector('.ob-15');
let ob16 = document.querySelector('.ob-16');
let ob17 = document.querySelector('.ob-17');
let allImg = document.querySelector('.all__img');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    ob1.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    ob2.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
    ob3.style.transform = 'translate(+' + x * 25 + 'px, -' + y * 25 + 'px)';
    ob4.style.transform = 'translate(+' + x * 25 + 'px, -' + y * 25 + 'px)';
    ob5.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
    ob6.style.transform = 'translate(+' + x * 10 + 'px, -' + y * 10 + 'px)';
    ob7.style.transform = 'translate(+' + x * 35 + 'px, -' + y * 35 + 'px)';
    ob8.style.transform = 'translate(+' + x * 60 + 'px, -' + y * 60 + 'px)';
    ob9.style.transform = 'translate(+' + x * 10 + 'px, -' + y * 10 + 'px)';
    ob10.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 20 + 'px)';
    ob11.style.transform = 'translate(+' + x * 10 + 'px, -' + y * 10 + 'px)';
    ob12.style.transform = 'translate(+' + x * 30 + 'px, -' + y * 30 + 'px)';
    ob13.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 20 + 'px)';
    ob14.style.transform = 'translate(+' + x * 10 + 'px, -' + y * 10 + 'px)';
    ob15.style.transform = 'translate(-' + x * 20 + 'px, +' + y * 20 + 'px)';
    ob16.style.transform = 'translate(-' + x * 20 + 'px, +' + y * 20 + 'px)';
    ob17.style.transform = 'translate(-' + x * 30 + 'px, +' + y * 30 + 'px)';
    allImg.style.transform = 'translate(-' + x * 20 + 'px, +' + y * 20 + 'px)';
});

/* Animations */

const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('anim-active');
            }
            else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('anim-active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
    
}

/* Modal */

const button = document.querySelectorAll('[data-modal-button]');
const allModals = document.querySelectorAll('[data-modal]');
const btnBlock = document.querySelector('#btn__block');
const btnBlock2 = document.querySelector('#btn__block-2');
const btnBlock3 = document.querySelector('#btn__block-3');

button.forEach(function (item) {
    item.addEventListener('click', function() {

        const modalId = this.dataset.modalButton;
        
        const modal = document.querySelector('#' + modalId);

        modal.classList.remove('hidden');

        modal.querySelector('.modal__window').addEventListener('click', function (event) {
            event.stopPropagation();
        })

        body.classList.add('of__hidden');

    });
})

allModals.forEach(function (item) {

    item.addEventListener('click', function () {

        this.classList.add('hidden');

        body.classList.remove('of__hidden');

    })
})

btnBlock.addEventListener('click', function() {
    const modal1 = document.querySelector('#modal-1');
    modal1.classList.add('hidden');
})

btnBlock2.addEventListener('click', function() {
    const modal2 = document.querySelector('#modal-2');
    modal2.classList.add('hidden');
})

btnBlock3.addEventListener('click', function() {
    const modal2 = document.querySelector('#modal-3');
    modal2.classList.add('hidden');
})