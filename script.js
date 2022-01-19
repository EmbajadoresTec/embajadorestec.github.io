
/*----------------------------------------------------*/
/* WEB PAGE
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());




$(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});



jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);


/*----------------------------------------------------*/
/* Envío WhatsApp
------------------------------------------------------ */


document.querySelector('#submit').addEventListener('click',function(){
    
    let name = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let request = document.querySelector('#request').value;
    let phone = document.querySelector('#phone').value;
 
    let url = "https://api.whatsapp.com/send?phone=523411490022&text=*_VEL_*%0A*Pedidos*%0A%0A*Nombre del cliente:*%0A" + name + "%0A*Domicilio a enviar el pedido:*%0A" + address + "%0A*Descripción del pedido:*%0A" + request;
    window.open(url);

});