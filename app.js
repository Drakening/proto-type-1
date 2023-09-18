let slideImg = document.getElementById('slideImg');
let images = new Array(
    "images/hero/hero-clothes.jpg",
    "images/hero/hero-deco.jpg",
    "images/hero/hero-skincare.jpg",
    "images/hero/hero-tech.jpg"
);

let len = images.length;
let i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src= images[i];
    i++;
    setTimeout('slider()', 4000)
}




const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}