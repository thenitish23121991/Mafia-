

$(document).ready(function(){

$('.middle_start_new_game_button').bind('click',function(){

var game_name = $('.top_game_title').text();
game_name = game_name.trim();

var start_game = $.ajax({
url:"/is_game_ready",
type:"POST",
data:{game_name:game_name}
});
});


start_game.done(function(data){

if(data == 'game ready'){
console.log(data);
//location.href = '/game';
}

});

});


});