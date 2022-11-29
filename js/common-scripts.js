
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });

        

        if($(window).width() > 768){

            $(".product-component").each(function(){
                var $this = $(this);
                $this.find(" > .product-tab-btn").on("click touch", function(e){
                    e.preventDefault();
                    $(".product-component").removeClass("active")
                    $(".product-component .product-tab-item").hide();
                    if($this.find(".product-tab-item:visible").length){
                        $(".product-component").removeClass("active")
                        $(".product-component .product-tab-item").hide();
                    }
                    else{
                        $this.addClass("active")
                        $(".product-component .product-tab-item").hide();
                        $this.find(" > .product-tab-item").show();
                    }
                })
            })
        }

        if($(window).width() < 769){

            if ($('.product-tab-trigger').length) {
                var swiper = new Swiper(".mySwiper", {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                    loop: true,
                    speed: 800,
                    navigation: false,
                    centeredSlides: true,
                    breakpoints: {
                        
                        481: {
                            slidesPerView: 2.5,
                        },
                        374: {
                            slidesPerView: 1.85,
                        }
                    }
                });
                $(window).on('resize', function () {
                    $('.product-tab-trigger').slick('resize');
                });
            }
            
            
        }

        
        
       
        $(window).scroll(function () {
            var $window = $(window),
                $body = $('body'),
                $panel = $('.bg-change');
            var scroll = $window.scrollTop() + ($window.height() / 2);
            $panel.each(function () {
                var $this = $(this);
                if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                    $body.removeClass(function (index, css) {
                        return (css.match(/(^|\s)bg-\S+/g) || []).join('');
                    });
                    $body.addClass('bg-' + $(this).attr('data'));
                }
            });
        }).scroll();
        
        
       
        


        // Start Shop Js
        
        if ($('.marquee-wrap').length) {
            $('.marquee-wrap').marquee({
                direction: 'left',
                duration: 50000,
                gap: 50,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }


        $('.shop-filter-dropdown').each(function () {
            var $$this = $(this);
            $$this.find('> div').click(function () {
                $(this).toggleClass('dropdown-active');
                $$this.find('ul').slideToggle();
            })
            $$this.find('ul li').click(function () {
                var valText = $(this).text(),
                    showText = $$this.find('> div')
                console.log(valText)
                $('ul li').removeClass('dropdown-active')
                $(this).addClass('dropdown-active')
                $(this).addClass('dropdown-active')
                $$this.find('> div').removeClass('dropdown-active')
                $$this.find('ul').slideUp();
                showText.text(valText)
            })
        })

        $('.shop-filter-wrap > span').click(function () {
            $(".shop-filter").slideToggle()
        });
        // End Shop Js

        // Start Cart Js
        
        $('.cart-icon').click(function (e) {
            e.preventDefault()
            $("body").toggleClass("cartShown");
            $("html").toggleClass("scrollOff");

            $('.cart-close').click(function () {
                $("body").removeClass("cartShown");
                $("html").removeClass("scrollOff");
            });
        });

        $('.cart-wrap').click(function () {
            $("body").removeClass("cartShown");
            $("html").removeClass("scrollOff");
        });
        $('.main-cart-wrap').click(function (e) {
            e.stopPropagation();
        });
        
        
        if($('.cart-wrap').length){
            $(window).on('load resize', function(){
                var cartTopHeight = $('.cart-top').outerHeight(),
                windowHeight = $(window).outerHeight(),
                windowNeedHeight = windowHeight - cartTopHeight,
                bottomPadding = $('.cart-bottom').outerHeight();
                $('.cart-main').css({'height': windowNeedHeight, 'padding-bottom': bottomPadding})
            })
        }
        // End Cart Js

		
	})// End ready function.
   
    if($('.bg-torch-red').length){
        $('body').addClass('bg-torch-red')
    }
	
    $(window).ready(function () {
        setTimeout(function(){
            $('.hero-thumb').fadeIn()
        },2000)
    })
})(jQuery)


function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}