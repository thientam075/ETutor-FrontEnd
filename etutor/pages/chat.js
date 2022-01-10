import Navbar from "../components/navbar";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import {
  Chat,
  MessageList,
  MessageInput,
} from "@pubnub/react-chat-components";
import { useState, useEffect } from "react";

const pubnub = new PubNub({
  publishKey: "pub-c-0e95f14b-ce30-45f0-9cc3-4477d5685559",
  subscribeKey: "sub-c-b418c8f4-721a-11ec-97ad-065127b61789",
  uuid: "123",
});
const currentChannel = "myCurrentChannel";
const theme = "light";

const ChatComponent = ({ channel }) => {
  const [mounted, setMounted] = useState(false);

  const renderMessage = (data) => {
    return (
      <div className="w-100" style={{textAlign: data.isOwn ? 'right' : 'left'}}>
        <p >
          <strong>{data.message.sender?.name}</strong> {data.time}
        </p>
        <p >{data.message.message.text}</p>
      </div>
    )
  }

  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <>
      <div className="vh-100">
        <Navbar />
        <div style={{ height: '80%' }}>
          {mounted && (
            <PubNubProvider client={pubnub}>
              <Chat {...{ currentChannel, theme }}>
                <MessageList fetchMessages={10} messageRenderer={renderMessage}/>
                <MessageInput />
              </Chat>
            </PubNubProvider>
          )}
        </div>
      </div>
    </>
  )
};

export default ChatComponent;