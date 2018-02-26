// http://myjson.com

$(document).ready(function(){
    $.getJSON(url, function(response){
        let arr = response.tournament.players;
        console.log(arr);

        let matchA = createMatch(arr, 1);
        let matchB = createMatch(arr, 6);
        let matchC = createMatch(arr, 11);
        let matchD = createMatch(arr, 16);
        let matchE = createMatch(arr, 21);
        let matchF = createMatch(arr, 26);
        let matchG = createMatch(arr, 31);
        let matchH = createMatch(arr, 36);

        let resultA = "Match not played.";
        let resultB = "Match not played.";
        let resultC = "Match not played.";
        let resultD = "Match not played.";
        let resultE = "Match not played.";
        let resultF = "Match not played.";
        let resultG = "Match not played.";
        let resultH = "Match not played.";

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
    console.log(arr);
    let grp = group-1;

    let data = "<table><tr><th>Match</th><th>Results</th></tr><tr><td>";
    data += arr[0+grp].name + " vs " + arr[1+grp].name;
    data += "</td><td>";
    data += arr[0].result[0];
    data += "</td></tr><tr><td>";
    data += arr[2+grp].name + " vs " + arr[0+grp].name;
    data += "</td><td>";
    data += arr[0].result[1];
    data += "</td></tr><tr><td>";
    data += arr[0+grp].name + " vs " + arr[3+grp].name;
    data += "</td><td>";
    data += arr[0].result[2];
    data += "</td></tr><tr><td>";
    data += arr[0+grp].name + " vs " + arr[4+grp].name;
    data += "</td><td>";
    data += arr[0].result[3];
    data += "</td></tr><tr><td>";
    data += arr[1+grp].name + " vs " + arr[2+grp].name;
    data += "</td><td>";
    data += arr[0].result[4];
    data += "</td></tr><tr><td>";
    data += arr[3+grp].name + " vs " + arr[1+grp].name;
    data += "</td><td>";
    data += arr[0].result[5];
    data += "</td></tr><tr><td>";
    data += arr[1+grp].name + " vs " + arr[4+grp].name;
    data += "</td><td>";
    data += arr[0].result[6];
    data += "</td></tr><tr><td>";;
    data += arr[2+grp].name + " vs " + arr[3+grp].name;
    data += "</td><td>";
    data += arr[0].result[7];
    data += "</td></tr><tr><td>";
    data += arr[4+grp].name + " vs " + arr[2+grp].name;
    data += "</td><td>";
    data += arr[0].result[8];
    data += "</td></tr><tr><td>";
    data += arr[3+grp].name + " vs " + arr[4+grp].name;
    data += "</td><td>";
    data += arr[0].result[9];
    data += "</td></tr></table>"
    
    return data;
}