// http://myjson.com

$(document).ready(function(){
    $.getJSON(url, function(result){
        let arr = result.original.player;
        console.log(arr);
        
    });
});

