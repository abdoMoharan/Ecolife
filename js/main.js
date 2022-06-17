$(function(){

    // Start Show First DrobDowen

        $('.drobdowen-list a').click(function (e) { 
            e.preventDefault();
            $('.main-drob').hide();
            var showId = $('#' + $(this).data('first'))
            console.log('#' + $(this).data('first'));
            showId.toggle(500)
        });
        $('.drobdowen-list a').blur(function(){
            $('.main-drob').hide();
        })
    // End Show First DrobDowen

    // Start Creat The DrobDowen All Categories

    $('.box-container').on('click',function(){
        $('.bi-justify').toggleClass('bi-x')
        $('.drob-categor').slideUp();
        $('.mune-categories').toggleClass('is-show');
        if( $('.mune-categories').hasClass('is-show')){

            $('.mune-categories').slideDown(500);
        } 
        $('.bi-x').click(function(){
            $('.mune-categories').slideUp(500);
        })

    })
    // End Creat The DrobDowen All Categories

    // Start Hover Categories
    $('.mune-categories ul li a').hover(function(){

        $('.drob-categor').hide();

        var howH = $('#'+ $(this).data('drop'));
        howH.slideDown(700);
         
         
    } )
    
    
    $('.drob-categor').mouseleave(function(){
        $('.drob-categor').slideUp(1000);

    }) 
        
   
    // End Hover Categories

// Start  window scroll
 $(window).on('load scroll',function(){

//  Start Nav Scroll
 

        // Start Creat Code Span Slider
    $('.frist-slider .carousel-inner').find('span').eq(0).animate({
        width:'100%'
    },5000,function(){
        $(this).hide(500);
    })
        // End Creat Code Span Slider
 })
 
// End  window scroll


// Start Creat Prodct-Slider

$('.list ul li .aa').click(function (e) { 
    e.preventDefault();
    $('.mune-list .aa').removeClass('coloring');
    $(this).addClass('coloring');
    $('.inner-block').hide();

    var showSlider = $('#' + $(this).data('sliderr'));
     console.log(showSlider)
    showSlider.show(1000);

});



// End Creat Prodct-Slider




})