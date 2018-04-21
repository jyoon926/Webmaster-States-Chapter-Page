jQuery(document).ready(function(){

var elementPosition = $('.h').offset();

$(window).scroll(function(){
  if($(window).scrollTop() > elementPosition.top){
    $('.h').css('position','fixed').css('top','100px').css('box-shadow','0 0 16px rgba(0,0,0,0.7)');
  } else {
    $('.h').css('position','absolute').css('top','100vh').css('box-shadow','0 0 16px rgba(0,0,0,0)');
  }
});

});
