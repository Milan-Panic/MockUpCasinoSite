console.log('Zdravooo');

//Aside menu

const naslov = $('.naslov');
const podnaslov = $('.podnaslov');
const strelica = $('.naslov > .arrow');

naslov.eq(0).parent().find('.podnaslov').show();
naslov.eq(0).find('.arrow').addClass('blue-arrow');


naslov.click( function () {
    podnaslov.hide();
    strelica.removeClass('blue-arrow')
    $(this).parent().find('.podnaslov').show();

    $(this).find('.arrow').addClass('blue-arrow');   
       
})

//Casino review

const reviewNaslov = $('.review-naslov');
const reviewPodnaslov = $('.review-podnaslov');
const strDva = $('.review-naslov > .arrow');


reviewNaslov.eq(2).parent().find('.review-podnaslov').show();
reviewNaslov.eq(2).find('.txtnsl').addClass('blue-txt');
reviewNaslov.eq(2).find('.arrow').addClass('blue-arrow');

reviewNaslov.click( function () {
    reviewPodnaslov.hide();
    strDva.removeClass('blue-arrow');
    reviewNaslov.parent().find('.txtnsl').removeClass('blue-txt');
    $(this).parent().find('.review-podnaslov').show();
    $(this).parent().find('.txtnsl').addClass('blue-txt');
    $(this).find('.arrow').addClass('blue-arrow');   

});

//Showing menu

let calendar = document.querySelector('.calendar');
calendar.style.display = 'none';
let calendars = document.querySelector('.calendars');
calendars.addEventListener('mouseenter', e => {
    calendar.style.display = 'block';
})
calendars.addEventListener('mouseleave', e => {
    calendar.style.display = 'none';
})

let region = document.querySelector('.region');
region.style.display = 'none';

let regions = document.querySelector('.regions');
regions.addEventListener('mouseenter', e => {
    region.style.display = 'block';
})
regions.addEventListener('mouseleave', e => {
    region.style.display = 'none';
})

let major = document.querySelector('.major');
major.style.display = 'none';

let majors = document.querySelector('.majors');
majors.addEventListener('mouseenter', e => {
    major.style.display = 'block';
})
majors.addEventListener('mouseleave', e => {
    major.style.display = 'none';
})

//To top

const btnScrollToTop = document.querySelector('#btnScrollToTop');

btnScrollToTop.addEventListener("click", function () {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

//slider za bonuses

var trenutni = 1; 
var drugi =  $('.slider-frame').length;
var move = $('.prikaz-slajdova');
move.html(` ${trenutni} / ${drugi} `);  

$(document).ready(function(){
    $('.next').on('click', function(){
        var currentBloc = $('.current');
        var nextBlock = currentBloc.next();
        
        if (trenutni < drugi) {
            trenutni++;
            move.html(` ${trenutni} / ${drugi} `);           
        }


        if (nextBlock.length) {
            currentBloc.removeClass('current').css('z-index', -10);
            nextBlock.addClass('current').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currentBloc = $('.current');
        var prevBlock = currentBloc.prev();
        
        if (trenutni > 1) {
            trenutni--;
            move.html(` ${trenutni} / ${drugi} `);           
        }


        if (prevBlock.length == 0){
            currentBloc.removeClass('current');
            $('.slider-frame').eq(0).addClass('current')
        }else{
            currentBloc.removeClass('current').css('z-index', -10);
            prevBlock.addClass('current').css('z-index', 10);
        }
    });
});

//menu button
var clicked = true;
$(document).ready(function(){
    $('.show-menu').on('click', function(){
        if (!clicked) {
            $('#meny-links').css('display', 'none');
            clicked = !clicked;
            $('.fa-bars').removeClass('rotateMenu')
        }else{
            $('#meny-links').css('display', 'block');            
            clicked = !clicked;
            $('.fa-bars').addClass('rotateMenu')
        }
    })
});
