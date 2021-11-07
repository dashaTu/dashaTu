var btn = document.getElementById("bt");
btn.onclick = function(e) {
    e.preventDefault();
    var text = document.querySelector('.title');
    text.classList.add("yellow");
    var img = document.querySelector('.main-logo');
    img.style.display = 'none';
    // text = document.querySelector('.icon-title');
    // text.classList.add("yellow");
    document.querySelector('.icon-title').classList.add("yellow");
    text.style.fontSize='70px';
    text.innerHTML ='Ты все ближе к цели!';
    text.style.marginLeft='100px';
    document.getElementById('form-icon-title').classList.add("yellow");
    document.querySelector('.time-title').classList.add('red');
    document.getElementById('first-time-title').classList.add('red');
    document.getElementById('three-time-title').classList.add('red');
    document.querySelector('.intro').classList.add('wheat');
    document.querySelector('.intro').style.fontSize='20px';
    document.querySelector('.intro').style.marginLeft='100px';
    btn.style.marginLeft='100px';

    // document.querySelector('input').classList.add("yellow");
}

$(function () {
	$(window).scroll(function() {
	    $('.icon-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRightBig");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('.time').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeftBig");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('.form-ticket').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("jackInTheBox");
	        }
	    });
	});
});