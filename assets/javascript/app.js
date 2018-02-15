import shuffleArray from 'shuffle.js';

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

let obj;
let text = $.getJSON('/assets/json/players.json', function(){
    obj = JSON.parse(text.responseText);
    console.log(obj);
});