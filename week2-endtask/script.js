const messageInput = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-btn");
const messageList = document.querySelector("#message-list");

function sendMessage() {

    const messageText = messageInput.value;

    if(messageText.trim() === ""){
        return;
    }

    const time = new Date().toLocaleTimeString();

    const newMessage = document.createElement("div");

    newMessage.classList.add("message");
    newMessage.classList.add("sent");

    newMessage.innerHTML =
        `${messageText}<br><small>${time}</small>`;

    messageList.appendChild(newMessage);
    newMessage.scrollIntoView({
    behavior: "smooth"
});

    messageInput.value = "";

}

sendButton.addEventListener("click",sendMessage);

messageInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});