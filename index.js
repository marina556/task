let leftSlide = document.querySelector('.left-slide');
let rightSlide = document.querySelector('.right-slide');
let slides = document.querySelector('.slides').children;
let index = 0;
let state;
let anmi;
leftSlide.onclick=function () {
    nextSlide('left');
}

rightSlide.onclick=function () {
    nextSlide('right');

}

function nextSlide(str){
    if(str === 'left'){
        anmi = 'slide-left';
        index++;
        if(index > slides.length-1){
            index = 0;
        }
    }
    else if(str === 'right'){
        anmi = 'slide-right';
        index--;
        if(index < 0){
            index = slides.length-1;
        }
    }
    for (let i=0 ; i<slides.length ; i++) {
        slides[i].classList.remove('active');
        slides[i].classList.remove('slide-left');
        slides[i].classList.remove('slide-right');

    }
    slides[index].classList.add('active');
    slides[index].classList.add(anmi);
}
