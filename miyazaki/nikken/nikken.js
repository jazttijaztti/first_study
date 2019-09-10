$(function(){

  $('.img1').slideUp(2000);
  $('.img2').fadeIn(2000);
  $('.img2').slideUp(2000);
  $('.img3').fadeIn(2000);



  $('.js2').on('mouseover', function(){
    $('.content4-up-right img').attr('src', '16.png');
    setTimeout(function(){
    $('.content4-up-right img').attr('src', '20.png');
    },2000);



  });


});
