// http://myjson.com

$(document).ready(function(){
    $.getJSON(url, function(response){
        let arr = response.tournament.players;

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
        document.getElementById('matchF').innerHTML = matchF;
        document.getElementById('matchG').innerHTML = matchG;
        document.getElementById('matchH').innerHTML = matchH;

    });
});

function createMatch(arr, group){
    let grp = group-1;
    let data = "<table><tr><th>Match</th><th>Results</th></tr><tr><td>";
    data += arr[0+grp].name + " vs " + arr[1+grp].name;
    data += "</td><td>";
    console.log(arr[0+grp].result.match1);
    data += arr[0+grp].result.match1;
    data += "</td></tr><tr><td>";
    data += arr[2+grp].name + " vs " + arr[0+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match2;
    data += "</td></tr><tr><td>";
    data += arr[0+grp].name + " vs " + arr[3+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match3;
    data += "</td></tr><tr><td>";
    data += arr[0+grp].name + " vs " + arr[4+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match4;
    data += "</td></tr><tr><td>";
    data += arr[1+grp].name + " vs " + arr[2+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match5;
    data += "</td></tr><tr><td>";
    data += arr[3+grp].name + " vs " + arr[1+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match6;
    data += "</td></tr><tr><td>";
    data += arr[1+grp].name + " vs " + arr[4+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match7;
    data += "</td></tr><tr><td>";;
    data += arr[2+grp].name + " vs " + arr[3+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match8;
    data += "</td></tr><tr><td>";
    data += arr[4+grp].name + " vs " + arr[2+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match9;
    data += "</td></tr><tr><td>";
    data += arr[3+grp].name + " vs " + arr[4+grp].name;
    data += "</td><td>";
    data += arr[0+grp].result.match10;
    data += "</td></tr></table>"
    
    return data;
}