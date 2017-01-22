jQuery(document).ready(function($) {

   if ($('.carousel').length) {
        var $carousels = $('.carousel');

        $carousels.each(function(index, el) {
            //
            // set some vars
            //
            var $carBlock = $(this),
                $s2show = $carBlock.data('s2show') ? breakpoints($carBlock.data('s2show')) : breakpoints(4),
                autoplay = false || $carBlock.data('autoplay'),
                asNavv = $carBlock.find('.carousel-as-nav').length ? $carBlock.find('.carousel-as-nav-inner') : '';
            //
            // slick slider settings
            //
            var $carousel = $carBlock.find('.carousel-inner'),
                $slider = $carousel.slick({
                    arrows: false,
                    slidesToShow: $s2show.bd,
                    autoplay: autoplay,
                    asNavFor: asNavv,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: $s2show.b1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: $s2show.b2
                            }
                        },
                        {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            //
            // find and set arrow click action
            //
            $carBlock.find('.carousel-arrow.left').click(function(event) {
                $slider.slick('slickPrev');
            });
            $carBlock.find('.carousel-arrow.right').click(function(event) {
                $slider.slick('slickNext');
            });
            //
            // find and set nav items
            //
            var $nav = $carBlock.find('.carousel-nav'),
                $navItem = $nav.find('.carousel-nav-item'),
                $active = $nav.find('.active');
            // set active nav-item if not defined
            if(!$active.length){
                $navItem.eq(0).addClass('active');
            }
            // change active nav-item on slide change
            $slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
                $navItem.siblings().removeClass('active');
                $navItem.eq(currentSlide).addClass('active');
            });
            // change slide on nav-item Click
            $navItem.each(function(index, el) {
                $(this).click(function(event) {
                    $slider.slick('slickGoTo', index);
                    var $navClickitem = $(this);
                    $slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
                        $navClickitem.siblings().removeClass('active');
                        $navItem.eq(currentSlide).addClass('active');
                    })
                });
            });
            //
            // find and set AsNavFor carousel 
            //
            if($carBlock.find('.carousel-as-nav').length){
                var $asNavWrapper = $carBlock.find('.carousel-as-nav'),
                    $asNav = $carBlock.find('.carousel-as-nav-inner');
                    $s2show = $asNavWrapper.data('s2show') ? breakpoints($asNavWrapper.data('s2show')) : breakpoints(6),
                    autoplay = false || $asNavWrapper.data('autoplay');
                // slider settings
                var $asNavSlider = $asNav.slick({
                    slidesToShow: $s2show.bd,
                    asNavFor: $slider,
                    centerMode: true,
                    arrows:false,
                    autoplay: autoplay,
                    focusOnSelect: true,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: $s2show.b1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: $s2show.b2
                            }
                        },
                        {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 2
                            }
                        }
                    ]
                });
                //
                // AsNavFor carousel's arrow click actions
                //
                $asNavWrapper.find('.carousel-arrow.left').click(function(event) {
                    $asNavSlider.slick('slickPrev');
                });
                $asNavWrapper.find('.carousel-arrow.right').click(function(event) {
                    $asNavSlider.slick('slickNext');
                });
            }
                

        });
        //
        //  just to get variables for breakpoints  
        //
        function breakpoints(n){
            var x = parseInt(n, 10),
                $breakpoints ={};
            if (x > 1) {
                $breakpoints.bd = x;
                $breakpoints.b1 = parseInt(x / 2, 10) + 1;
                $breakpoints.b2 = parseInt(x / 2, 10);
            } else {
                $breakpoints.bd = $breakpoints.b1 = $breakpoints.b2 = 1;
            }
            return $breakpoints;
        }
    }
    //
    // for tabs with description
    //
    if($('.tab-item').length){
        if(!$('.tab-wrap-link .tab-item.active').length){
            $('.tab-wrap-link .tab-item').eq(0).addClass('active');
        }
        if(!$('.tab-wrap-cont .tab-item-cont.active').length){
            $('.tab-wrap-cont .tab-item-cont').eq(0).addClass('active');
        }
        $('.tab-item').each(function(index){
            $(this).click(function(){
                $(this).addClass('active').siblings().removeClass('active');
                $('.tab-wrap-cont .tab-item-cont').eq(index).addClass('active').siblings().removeClass('active');
            })
        })
    }
    $('.fancybox').fancybox();

    
        // validate the comment form when it is submitted
        $("#cform1").validate({
            rules: {
                name1: {
                    required: true,
                    minlength: 2
                },
                pass1: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name1: {
                    required: "Заполните Поле",
                    minlength: "Минимальное количество символов 2",
                },
                pass1: {
                   required: "Заполните Поле",
                    minlength: "Минимальное количество символов 2",
                }
            }

        });
        $("#cform2").validate({
            rules: {
                name2: {
                    required: true,
                    minlength: 2
                },
                pass2: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name2: {
                    required: "Заполните Поле",
                    minlength: "Минимальное количество символов 2",
                },
                pass2: {
                   required: "Заполните Поле",
                    minlength: "Минимальное количество символов 2",
                }
            }
        });

    
});

function cl($smthn){
    console.log($smthn);
}