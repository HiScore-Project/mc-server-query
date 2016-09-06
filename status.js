var requesturl1 = "https://mcapi.us/server/status?ip=98.26.9.103";
var requesturl2 = "https://mcapi.us/server/status?ip=98.26.9.103&port=25580";
var requesturl3 = "https://mcapi.us/server/status?ip=98.26.9.103&port=25570";

$.getJSON(requesturl1, function(json) {
    var html = '';

    var online = json.online;
    var players_max = json.players.max
    var players_now = json.players.now

    if(online == true){
        html += "Players Online: " + players_now
    } else {
        html += "Offline"
    }

    htmlOutput1(html);
});
$.getJSON(requesturl2, function(json) {
    var html = '';

    var online = json.online;
    var players_max = json.players.max
    var players_now = json.players.now

    if(online == true){
        html += "Players Online: " + players_now
    } else {
        html += "Offline"
    }

    htmlOutput2(html);
});
$.getJSON(requesturl3, function(json) {
    var html = '';

    var online = json.online;
    var players_max = json.players.max
    var players_now = json.players.now

    if(online == true){
        html += "Players Online: " + players_now
    } else {
        html += "Offline"
    }

    htmlOutput3(html);
});

function htmlOutput1(html) {
    $('#vanilla').html(html);
}
function htmlOutput2(html) {
    $('#modded').html(html);
}
function htmlOutput3(html) {
    $('#crackpack').html(html);
}
