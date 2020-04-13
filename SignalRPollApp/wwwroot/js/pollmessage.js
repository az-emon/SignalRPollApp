
var connection = new signalR.HubConnectionBuilder().withUrl("/pollHub").build();
 
connection.on("ReceiveMessage", function (user, message, myCaptainId, myCaptainVal) {
    //var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
   
    var pollResultMsg = user + " voted for '" + myCaptainVal + "'.";

    var ulPoll = document.getElementById("messagesList");
    var liPollResult = document.createElement("li");
    liPollResult.textContent = pollResultMsg;

    ulPoll.insertBefore(liPollResult, ulPoll.childNodes[0]);
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});
