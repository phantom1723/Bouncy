/**
 * Created by User on 13.08.2017.
 */
let slidersTeam = document.querySelectorAll('.slider-team');
let switchersTeam = document.querySelectorAll('.switcher-team');

let slidersTestimonials = document.querySelectorAll('.slider-testimonials');
let switchersTestimonials = document.querySelectorAll('.switcher-testimonials');

let slidersBlog = document.querySelectorAll('.slider-blog');
let switchersBlog = document.querySelectorAll('.switcher-blog');

function changeSlides (sliders, switchers, slidersClassName='invisible', switchersClassName = 'selected') {


    for (let i = 0; i < switchers.length; i++) {
        switchers[i].addEventListener('click', function () {

            for(let i = 0; i < switchers.length; i++) {
                switchers[i].classList.remove(switchersClassName);
            }
            switchers[i].classList.add(switchersClassName);

            for(let i = 0; i < sliders.length; i++) {
                sliders[i].classList.add(slidersClassName);
            }
            sliders[i].classList.remove(slidersClassName);
        });
    }
};


changeSlides(slidersTeam, switchersTeam);
changeSlides(slidersTestimonials, switchersTestimonials);
changeSlides(slidersBlog, switchersBlog, 'invisible' ,'selected-blog');



