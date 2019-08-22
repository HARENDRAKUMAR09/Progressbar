
$("#html").mouseover(function(){
      $(this).css({"background-color": "red","font-size": "200%"});
});
 
$("#css").mouseover(function(){
    $(this).css({"background-color": "dark-gray","font-size": "200%"});
});

$("#javascript").mouseover(function(){
    $(this).css({"background-color": "yellow","font-size": "200%"});
});

$("#bootstrap").mouseover(function(){
    $(this).css({"background-color":"gray","font-size": "200%"})
});
$("#angular").mouseover(function(){
    $(this).css({"background-color":"blue","font-size": "150%"})
});

$("#html").mouseleave(function(){
    $(this).css({"font-size":"100%"})
});
$("#css").mouseleave(function(){
    $(this).css({"font-size":"100%"})
});
$("#angular").mouseleave(function(){
    $(this).css({"font-size":"100%"})
});
$("#javascript").mouseleave(function(){
    $(this).css({"font-size":"100%"})
});
$("#bootstrap").mouseleave(function(){
    $(this).css({"font-size":"100%"})
});