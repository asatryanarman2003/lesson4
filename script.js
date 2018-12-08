function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button2 = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function deleteMessage() {
        socket.emit("uzum em jnjem");
    }
    button.onclick = handleSubmit;
    button2.onclick = deleteMessage;


    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    function deleteMessageFromDom() {
        
    }

    socket.on('display message', handleMessage);

    socket.on('de jnjeq dzer motic', deleteMessageFromDom);
} // main closing bracket

window.onload = main;