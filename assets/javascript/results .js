// http://myjson.com

$(document).ready(function(){
    $.getJSON(url, function(result){
        let arr = result.original.player;
        console.log(arr);

        let matchA = createMatch(arr, 1);
        let matchB = createMatch(arr, 6);
        let matchC = createMatch(arr, 11);
        let matchD = createMatch(arr, 16);
        let matchE = createMatch(arr, 21);
        let matchF = createMatch(arr, 26);
        let matchG = createMatch(arr, 31);
        let matchH = createMatch(arr, 36);

        document.getElementById('matchA').innerHTML = matchA;
        document.getElementById('matchB').innerHTML = matchB;
        document.getElementById('matchC').innerHTML = matchC;
        document.getElementById('matchD').innerHTML = matchD;
        document.getElementById('matchE').innerHTML = matchE;
        document.getElementById('tableF').innerHTML = matchF;
        document.getElementById('tableG').innerHTML = matchG;
        document.getElementById('matchH').innerHTML = matchH;
    });
});

function createMatch(arr, group){
    console.log(arr);
    let grp = group-1;
    let data = "<table><tr><td>";
    data += arr[0+grp] + " vs " + arr[1+grp];
    data += "</td></tr></table>";

    return data;
}