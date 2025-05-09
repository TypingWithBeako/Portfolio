/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    if (window.innerWidth >= 768) {  // 768px is the standard Bootstrap md breakpoint
        $('ul.nav').addClass('show');
        $('#nav-toggle').addClass('is-active');
    }
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

$(document).ready(function(){
    // Set Home as active by default
    $('.nav .item .link[href="#home"]').addClass('active');
    
    // Initialize Bootstrap scrollspy with proper offset
    $('body').scrollspy({
        target: '.custom-navbar',
        offset: 200  // Adjust this value as needed
    });
    
    // Force a refresh when the page loads
    setTimeout(function() {
        $('body').scrollspy('refresh');
    }, 500);
    
    // Update active class on scroll
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        
        // Find which section is currently in view
        $('.section, .header').each(function() {
            var top = $(this).offset().top-300;
            var bottom = top + $(this).outerHeight();
            var id = $(this).attr('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                $('.nav .item .link').removeClass('active');
                $('.nav .item .link[href="#' + id + '"]').addClass('active');
            }
        });
    });
});