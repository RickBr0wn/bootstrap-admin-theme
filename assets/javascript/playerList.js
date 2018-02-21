// http://myjson.com

$(document).ready(function(){
    $.getJSON("https://api.myjson.com/bins/mnq9l", function(result){
        let arr = result.original.player;
        console.log(arr);
        
    });
});

