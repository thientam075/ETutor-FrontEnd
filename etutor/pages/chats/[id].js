import Navbar from '../../components/navbar';
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import {
  Chat,
  MessageList,
  MessageInput,
} from "@pubnub/react-chat-components";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { API } from "../../configs/API";
import { useAppSelector } from "../../context";
import withAuth from '../../hoc/withAuth';

const ChatComponent = ({}) => {
  const router = useRouter();

  const { id } = router.query;
  const { jwt, user } = useAppSelector((state) => state.auth);
  const [user2, setUser2] = useState();
  const [mounted, setMounted] = useState(false);

  const getUser2 = async (id) => {
    const response = await fetch(API.USER.DETAIL(id), {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type':'application/json'
      },
    });
    const result = await response.json();
    if (response.status === 200) {
      setUser2(result);
    }
  }

  useEffect(() => {
    if (!id) {
      return
    }
    getUser2(id);
  }, [id]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chatData = useMemo(() => {
    if (!user2 || !user) {
      return {
        pubnub: null,
        channel: null,
      }
    } else {
      const pubnub = new PubNub({
        publishKey: "pub-c-0e95f14b-ce30-45f0-9cc3-4477d5685559",
        subscribeKey: "sub-c-b418c8f4-721a-11ec-97ad-065127b61789",
        uuid: user.Fullname,
      });
      const channel = user.id < user2.id
        ? `${user.id}-${user2.id}`
        : `${user2.id}-${user.id}`;
      return {
        pubnub,
        channel,
      }
    }
  }, [user2]);

  const renderMessage = (data) => {
    return (
      <div className="w-100 container" style={{textAlign: data.isOwn ? 'right' : 'left'}}>
        <div className='row '>
          {!data.isOwn &&
            <div className='col-sm-1'><img src={data.isOwn ? user.Avatar : user2.Avatar}  className="avatarChat"></img></div>
          }
          <div className='col-sm-11'>
            <p >
              <strong>{data.message.sender?.name}</strong> {data.time}
            </p>
            <p >{data.message.message.text}</p>
          </div>
          {data.isOwn &&
            <div className='col-sm-1'><img src={data.isOwn ? user.Avatar : user2.Avatar}  className="avatarChat"></img></div>
          }
        </div>
      </div>
    )
  }
  
  return (
    <>
      <div className="vh-100">
        <Navbar />
        <div style={{ height: '80%' }}>
          {mounted && user2 && chatData.pubnub && chatData.channel && (
            <PubNubProvider client={chatData.pubnub}>
              <Chat {...{ currentChannel: chatData.channel, theme: 'light' }}>
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

export default withAuth(ChatComponent);