// http://myjson.com

$(document).ready(function(){
    $.getJSON(url, function(response){
        let obj = response.tournament;
        console.log(obj);
        let tableA = createTable(obj, 1);
        let tableB = createTable(obj, 6);
        let tableC = createTable(obj, 11);
        let tableD = createTable(obj, 16);
        let tableE = createTable(obj, 21);
        let tableF = createTable(obj, 26);
        let tableG = createTable(obj, 31);
        let tableH = createTable(obj, 36);
        
        document.getElementById('tableA').innerHTML = tableA;
        document.getElementById('tableB').innerHTML = tableB;
        document.getElementById('tableC').innerHTML = tableC;
        document.getElementById('tableD').innerHTML = tableD;
        document.getElementById('tableE').innerHTML = tableE;
        document.getElementById('tableF').innerHTML = tableF;
        document.getElementById('tableG').innerHTML = tableG;
        document.getElementById('tableH').innerHTML = tableH;

    });
});

function createTable(obj, group){
    let grp = group-1;
    let data = "<table><tr><th>Player Name</th><th>Games Played</th><th>Match Points</th><th>Tournament Points</th></tr><tr><td>";
    data += obj.players[0+grp].name;
    data += "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>";
    data += obj.players[1+grp].name;
    data += "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>";
    data += obj.players[2+grp].name;
    data += "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>";
    data += obj.players[3+grp].name;
    data += "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>";
    data += obj.players[4+grp].name;
    data += "</td><td>0</td><td>0</td><td>0</td></tr></table>";
    
    return data;
}
