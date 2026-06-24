import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

function ChatWindow() {
  return (
    <div className="chatarea">

      <div className="chat-header">
        John Doe
      </div>

      <div className="message-area">

        <MessageBubble
          text="Hello!"
          isSent={false}
        />

        <MessageBubble
          text="How are you?"
          isSent={true}
        />

      </div>

      <MessageInput />

    </div>
  );
}

export default ChatWindow;