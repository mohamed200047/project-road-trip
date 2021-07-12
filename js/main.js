$(document).ready(function(){
       
$('.open-nav').on('click', function(){

$('.nav-content').animate({ width:'35%'}, 500)

});
});


$(document).ready(function(){
       
$('.close-nav').on('click', function(){

$('.nav-content').animate({ width:'0'}, 500)

});
});