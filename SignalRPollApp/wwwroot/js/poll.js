"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/pollHub").build();
var chartBlock = '\u25A3'; //(U+25A3) is "▣" 

connection.on("ReceiveMessage", function (user, message, myCaptainId, myCaptainVal) { 
    document.getElementById(myCaptainId + 'Block').innerHTML += chartBlock;
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {   
    var message = ""; 

    if ($('input:radio[name=myCaptain]').is(':checked')) {
        var myCaptainId = $('input[name=myCaptain]:checked').attr('id');
        var myCaptainVal = $('input[name=myCaptain]:checked').val();
        connection.invoke("SendMessage",   message, myCaptainId, myCaptainVal).catch(function (err) {
            return console.error(err.toString());
        });
    } else {
        return console.log("No captain selected.");
    }

    event.preventDefault();
});