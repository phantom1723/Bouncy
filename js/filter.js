/**
 * Created by User on 15.08.2017.
 */
let images = document.querySelector('.portfolio-images');
let imagesChildren = images.childNodes;

let all = document.querySelector('#all');
all.addEventListener('click', function () {filterPhotos('all');});

let print = document.querySelector('#print');
print.addEventListener('click', function () {filterPhotos('print');});

let identity = document.querySelector('#identity');
identity.addEventListener('click', function () {filterPhotos('identity');});

let branding = document.querySelector('#branding');
branding.addEventListener('click', function () {filterPhotos('branding');});

let web = document.querySelector('#web');
web.addEventListener('click', function () {filterPhotos('web');});

let html = document.querySelector('#html');
html.addEventListener('click', function () {filterPhotos('html');});

let wordpress = document.querySelector('#wordpress');
wordpress.addEventListener('click', function () {filterPhotos('wordpress');});


function filterPhotos (filterClassName) {
    for (let i = 1; i < images.childNodes.length; i += 2) {
        imagesChildren[i].classList.remove('invisible');

        if ( !imagesChildren[i].classList.contains(filterClassName) ) {
            imagesChildren[i].classList.add('invisible');
        }
    }

}



