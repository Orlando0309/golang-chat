import "./ChatHistory.scss"

const ChatHistory = ({chatHistory})=>{
    const messages = chatHistory.map((msg, index) => (
        <p key={index}>{JSON.parse(msg.data).body}</p>
      ));
    return (
        <div className="ChatHistory">
          <h2>Chat History</h2>
          {messages}
        </div>
      );
}

export default ChatHistory