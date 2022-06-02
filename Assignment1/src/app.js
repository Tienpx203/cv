// DOM
const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')

// Event
let isMenuOpen = false
menuIcon.addEventListener('click', function(e) {
    if(isMenuOpen == false) {
        menu.classList.remove('hidden')
        isMenuOpen = true
    } else {
        menu.classList.add('hidden')
        isMenuOpen = false
    }
})

var slider = document.getElementById('slider')

var anh=[
    '3.jpg',
    '2.jpg',
  
]
var len = anh.length;
var dem = 0;

function next(){
    if(dem == len-1){
        dem = 0;
        slider.src = anh[dem];

    }else{
        dem ++;
        slider.src  = anh[dem];
    }

}
var t = null;
function play(){
    t = setInterval(function(){
next();
    },1500)

}
play();