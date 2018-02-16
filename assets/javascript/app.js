// import {shuffleArray} from 'shuffle.js';

// let players = ["Dave", "Bob", "Sue", "George", "Peter"]
// let p1 = document.getElementById('p1');
// let p2 = document.getElementById('p2');
// let p3 = document.getElementById('p3');
// let p4 = document.getElementById('p4');
// let p5 = document.getElementById('p5');
// let arr = [p1, p2, p3, p4, p5];

// for(let i = 0; i < players.length; i++){
//     arr[i].innerHTML = players[i];
// }

$(document).ready(function(){
    $.getJSON("https://api.myjson.com/bins/xvjzx", function(result){
        let arr = result.original.player;
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
        createTable(arr, 6);
    });
});

function createTable(arr, group){
    let grp = group-1;
    let data = "<table><tr><th>Player Name</th><th>Games Played</th><th>Match Points</th><th>Tournament Points</th></tr><tr><td>" + arr[0+grp] + "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>" + arr[1+grp] + "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>" + arr[2+grp] + "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>" + arr[3+grp] + "</td><td>0</td><td>0</td><td>0</td></tr><tr><td>" + arr[4+grp] + "</td><td>0</td><td>0</td><td>0</td></tr></table>";
    
    document.getElementById('groupA').innerHTML = data;
	console.log(arr[0]);
}