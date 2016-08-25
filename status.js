var requesturl1 = "https://mcapi.us/server/status?ip=98.26.9.103";
var requesturl2 = "https://mcapi.us/server/status?ip=98.26.9.103:25580";

$.getJSON(requesturl1, function(json) {
    var html = '';

    var status = json.status;
    var players_max = json.players.max
    var players_now = json.players.now

    if(status == 'success'){
        html += "Status: Online" + "<br /> Players Online: " + players_now
    } else {
        html += "Status: Offline"
    }

    htmlOutput1(html);
});
$.getJSON(requesturl2, function(json) {
    var html = '';

    var status = json.status;
    var players_max = json.players.max
    var players_now = json.players.now

    if(status == 'success'){
        html += "Status: Online" + "<br /> Players Online: " + players_now
    } else {
        html += "Status: Offline"
    }

    htmlOutput2(html);
});

function htmlOutput1(html) {
    $('#vanilla').html(html);
}
function htmlOutput2(html) {
    $('#modded').html(html);
}

