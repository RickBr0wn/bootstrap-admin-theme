// http://myjson.com

$(document).ready(function(){
    $.getJSON("https://api.myjson.com/bins/mnq9l", function(result){
        let arr = result.original.player;
        console.log(arr);
        let tableA = createTable(arr, 1);
        let tableB = createTable(arr, 6);
        let tableC = createTable(arr, 11);
        let tableD = createTable(arr, 16);
        let tableE = createTable(arr, 21);
        let tableF = createTable(arr, 26);
        let tableG = createTable(arr, 31);
        let tableH = createTable(arr, 36);
        
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

function createTable(arr, group){
    let grp = group-1;
    let data = "<table><tr><th>Player Name</th><th>Games Played</th><th>Match Points</th><th>Tournament Points</th></tr><tr><td>";
    data += arr[0+grp];
    data += "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>";
    data += arr[1+grp];
    data += "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>";
    data += arr[2+grp];
    data += "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>";
    data += arr[3+grp];
    data += "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>";
    data += arr[4+grp];
    data += "</td><td>0</td><td>0</td><td>0</td></tr></table>";
    
    return data;
}

function createMatch(arr, group){
    console.log(arr);
    let grp = group-1;
    let data = "<table><tr><td>";
    data += arr[0+grp] + " vs " + arr[1+group];
    data += "</td></tr></table>";
}