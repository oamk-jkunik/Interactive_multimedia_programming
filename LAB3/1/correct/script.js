var output;
var websocket;
function init(){
  output = document.getElementById("output");
}
function connect(){

  if ("WebSocket" in window){
    websocket = new WebSocket("ws://obscure-waters-98157.herokuapp.com");

    output.innerHTML = "connecting..." ;

    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage;
    websocket.onerror = onError;
  } else {
    alert("WebSockets not supported on your browser.");
  }
}
function onOpen(evt){

  output.innerHTML = "<p>CONNECTED TO SERVER</p>";
}
function onClose(evt){

  output.innerHTML += "<p>DISCONNECTED</p>";
}
function onMessage(evt){

  output.innerHTML += "<p class = 'response'>RESPONSE: "
    + evt.data + "</p>";
}
function onError(evt){

  output.innerHTML += "<p class = 'error'>ERROR: "
    + evt.data + "</p>";
}
function sendMessage(){

  txtMessage = document.getElementById("txtMessage");
  message = txtMessage.value;

  websocket.send(message);
  output.innerHTML += "<p>MESSAGE SENT: " + message + "</p>";
}
