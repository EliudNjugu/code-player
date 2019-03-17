$(".togglebtn").hover(function(){
    $(this).addClass("highlightedbtn");
},function() {
     $(this).removeClass("highlightedbtn");                 
                      })
$(".togglebtn").click(function(){
$(this).toggleClass("active");    
$(this).removeClass("highlightedbtn");
var panelId=$(this).attr("id") + "panel"; 
$("#"+panelId).toggleClass("hidden");

var numberOfActivePanels=4-$('.hidden').length;    
$(".panel").width(($(window).width() / numberOfActivePanels) - 10);    
})
$(".panel").height($(window).height() - $("#header").height() - 15);
            
 $(".panel").width(($(window).width() / 2) - 10);


$("textarea").on('change keyup paste', function() {
  $("#outputpanel").contents().find("html").html("<html><head><style type='text/css'>"+$("#csspanel").val()+"</style></head><body>"+$("#htmlpanel").val()+"</body></html>");
document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());    
});
