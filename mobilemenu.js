$('.controls').click(function(){
    $('.line1').toggleClass("line1-transform");
    $('.line2').toggleClass("line2-transform");
    $('.line3').toggleClass("line3-transform");
    $('.toggle-button').toggleClass("toggle-active");
})

$('.open').click(function(){
    $('.toggle-button').hide(1000);
    $('.open-menu').addClass("open-active");
});

$('.go-back').click(function(){
    $('.toggle-button').show();
    $('.open-menu').removeClass("open-active");
});
