// http://myjson.com

$(document).ready(function(){
    $.getJSON(url, function(response){
        let obj = response.tournament;
        console.log(obj);
        let table = createTable(obj);
        
        document.getElementById('table').innerHTML = table;
        let sorted = document.getElementById('table');
        sortTableDOWN(sorted, 0);
    });
});

function createTable(obj){
    let data = "<table><tr><th>Player Name</th><th>Group</th></tr><tr><td>";
    for(let i = 0; i < obj.players.length; i++){
        console.log(obj.players[i].name);
        data += obj.players[i].name;
        data += "</td><td>";
        data += obj.players[i].group;
        data += "</td></tr><tr><td>";
    }
    
    return data;
}