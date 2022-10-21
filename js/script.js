// message
function comingSoon() {
    alert("Coming Soon");
}

// textarea placeholder

// var textAreas = document.getElementsByTagName('textarea');

// Array.prototype.forEach.call(textAreas, function(elem) {
//     elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
// });

// owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2,
            margin: 10
        },
        1000:{
            items:2,
            margin: 10
        },
        1100:{
            items:2,
            margin: 0
        },
        1200:{
            items:3,
            margin: 200
        },
        1300:{
            items:3,
            margin: 100
        },
        1600:{
            items:4,
            margin: 250
        },
        2100:{
            items:5,
            margin: 200
        }
    }
})

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

// textarea placeholder SAFARI SURRORT

const ta = document.querySelector('textarea');
const pp = document.querySelector('.dt-main__placeholder');
console.log(ta);
ta.addEventListener('input', () => {
  pp.classList.toggle('hidden', ta.value !== '');
});