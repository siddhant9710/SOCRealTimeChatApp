function MessageBubble(props) {

  const bubbleClass =
    props.isSent
      ? "message sent"
      : "message received";

  return (
    <div className={bubbleClass}>
      {props.text}
    </div>
  );
}

export default MessageBubble;