jQuery(document).ready(function(){
	$('.mobile-menu-trigger').click(function(){
		
		$(this).toggleClass('open');
		$('.menu-container').toggleClass('slide-in');
		
	});

	$('.menu-item-link').click(function(){
		$('.mobile-menu-trigger').toggleClass('open');
		$('.menu-container').toggleClass('slide-in');
	})

	// smooth page scroll to an anchor on the same page
     function smoothScroll() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top -100
            }, 800);
            return false;
        }
        }
    });
};

smoothScroll();
}); 

//const mobileMenu = document.querySelector('.mobile-menu-trigger');
//const menuContainer = document.querySelector('.menu-container');
//const menuItemLink = document.querySelector('menu-item-link');

//mobileMenu.addEventListener("click", () =>
	
//	menuContainer.classListToggle('slide-in');
//)

//menuItemLink.addEventListener("click", () =>
//	mobileMenu.classListToggle('open');
//	menuContainer.classListToggle('slide-in');
//)