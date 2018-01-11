$(document).ready(function() {
  var auto_slide = 1;
  var hover_pause = 2;
  var key_slide = 1;
  var auto_slide_seconds = 7000;
  $('#slides li:first').before($('#slides li:last'));
  if(auto_slide == 1){
    var timer = setInterval('slide("right")', auto_slide_seconds);
    $('#hidden_auto_slide_seconds').val(auto_slide_seconds);
  }
  if(hover_pause == 2){
    $('#slides').hover(function(){
      clearInterval(timer)
    },function(){
      timer = setInterval('slide("right")', auto_slide_seconds);
    });
  }
  if(key_slide == 1){
    $(document).bind('keypress', function(e) {
      if(e.keyCode==37){
        slide('left');
      }else if(e.keyCode==39){
        slide('right');
      }
    });
  }
});

function slide(where){
  var item_width = $('#slides li').outerWidth();
  if(where == 'left'){
    var left_indent = parseInt($('#slides').css('left')) + item_width;
  }else{
    var left_indent = parseInt($('#slides').css('left')) - item_width;
  }
  $('#slides:not(:animated)').animate({'left' :
  left_indent},7000,function(){
    if(where == 'left'){
      $('#slides li:first').before($('#slides li:last'));
    }else{
      $('#slides li:last').after($('#slides li:first'));
    }
    $('#slides').css({'left' : '0px'});
  });
}
