import './chat.scss';
import { MdTextsms } from 'react-icons/md'
import { AiFillBank } from 'react-icons/ai'
import { RiCloseCircleLine } from 'react-icons/ri'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import React, { useState, useRef, useEffect } from 'react';
import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";

// function App() {
function Chat() {
  const [showTextBox, setShowTextBox] = useState(false)
  const [showX, setShowX] = useState(false)
  const [stompClient, setStompClient] = useState(null);
  const [transcript, setTranscript] = useState([])
  const [chatType, setChatType] = useState()
  const [userName, setUserName] = useState("mzere")
  const [sendText, setSendText] = useState(true)

  const [chatWrapHeight, setChatWrapHeight] = useState('50px')

  let tranDiv = document.getElementById("trDiv");

  let socket = useRef(null)//test

  const updateChatArr = (from, newChat) => {
    setTranscript(prev => [...prev, { who: from, message: newChat, time: getTime() }])
  }

  useEffect(() => {
    if (transcript.length) {
      tranDiv.scrollTop = tranDiv.scrollHeight
    }
  }, [transcript])

  useEffect(() => {
    socket.current = new SockJS(
      "https://fast-eyrie-01446.herokuapp.com/hello"
    );
    setStompClient(Stomp.over(socket.current));
    let stompClient = Stomp.over(socket.current);

    stompClient.connect(
      { username: "mzere" },
      function (frame) {
        stompClient.subscribe("/users/queue/messages", function (greeting) {
          const messageSender = JSON.parse(greeting.body).from;
          const messageReceived = JSON.parse(greeting.body).text
          console.log(messageReceived);
          console.log("From: " + messageSender);
          updateChatArr(messageSender, messageReceived);
        });
      }
    )

    return () => stompClient.disconnect()

  }, [])

  const submitMessage = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSendText(false);
      setTranscript(prev => [...prev, { who: userName, message: chatType, time: getTime() }])
      setChatType('');

      setTimeout(() => {
        setSendText(true)
      }, 1000);
    }
  }

  const getTime = () => {
    let today = new Date();

    // let minute = today.getMinutes()>=0 && today.getMinutes()<10? '0'+today.getMinutes():
    // today.getMinutes();
    // console.log(minute);

    // let time = today.getHours() + ":" + minute ;

    let minute = today.getMinutes() >= 0 && today.getMinutes() < 10 ? '0' + today.getMinutes() :
      today.getMinutes();
    let hour = today.getHours() % 12 == 0 ? 12 : today.getHours() % 12;
    let suffix = today.getHours() < 12 ? " AM" : " PM"
    let time = hour + ":" + minute + suffix;


    return time;
  }

  return (
    <div className="mainCont" >
      <div className='chatWrap' style={{ height: chatWrapHeight, }}>
        <Slide bottom unmountOnExit={true} mountOnEnter={true} when={showTextBox} appear={true}
          onReveal={() => setTimeout(() => {
            setShowX(true)
          }, 1000)}>

          <div className='chatBoxCont' style={{}}>

            <Fade top opposite when={showX}>
              <div style={{
                position: 'absolute', top: '-10%', right: '-20px', cursor: 'pointer'
              }}
                onClick={() => setTimeout(() => { setTranscript([]) }, 500)}>
                <RiCloseCircleLine size='30'
                  color={'salmon'}
                  onClick={() => {
                    setShowX(false);
                    setTimeout(() => {
                      setShowTextBox(prev => !prev)
                    }, 800);
                    setTimeout(() => {
                      setChatWrapHeight('50px')
                    }, 500);
                  }} />
              </div>
            </Fade>

            <div className='transcriptArea' id='trDiv' style={{}}>
              {transcript.map(t => {
                return (
                  <Fade duration={1000} bottom when={transcript} appear={true} collapse>
                    <div className='chatTranscript'
                      style={{ justifyContent: `${t.who === userName ? "" : "flex-end"}`, }}>

                      {t.who === userName ?
                        <span className="chatPlayerSpan" >
                          {userName[0].toUpperCase()}
                        </span> : ''
                      }

                      {t.who === userName ?
                        '' : <span style={{ marginLeft: '7px', marginTop: '5px', color: 'grey' }}>
                          {t.time}</span>
                      }

                      <div style={{
                        wordBreak: 'break-word', borderRadius: '5px',
                        marginLeft: t.who === userName ? '30px' : '7px',
                        marginRight: t.who === userName ? '7px' : '30px',
                        backgroundColor: t.who === userName ? 'rgba(252, 100, 47, 0.8)'
                          :
                          'rgba(255, 177, 56,0.8)', padding: '8px'
                      }}>
                        {t.message}
                      </div>

                      {t.who === userName ?
                        <span style={{ marginRight: '7px', marginTop: '5px', color: 'grey' }}>
                          {t.time}</span> : ''
                      }

                      {t.who === userName ?
                        '' :
                        <span className="chatPlayerSpan" >
                          <AiFillBank />{/* {t.color.toUpperCase()} */}
                        </span>
                      }
                    </div>
                  </Fade>
                )
              })
              }
            </div>

            <div style={{ height: '30%', borderTop: '1px solid black' }}>
              <Fade bottom opposite when={sendText} distance={'30px'}>
                <textarea id='tArea' onChange={(e) => setChatType(e.target.value)} value={chatType}
                  onKeyPress={submitMessage} className='chatBoxText'
                  placeholder="Type your message..."></textarea>
              </Fade>
            </div>
          </div>
        </Slide>

        <div style={{ pointerEvents: showTextBox ? 'none' : '' }}
          className='chatIconWrap' onClick={() => {
            setShowTextBox(prev => !prev);
            setTimeout(() => {
              setChatWrapHeight('500px')
            }, 500);
          }}>
          <Slide bottom unmountOnExit={true} mountOnEnter={true} when={!showTextBox} appear={true}>
            <MdTextsms style={{ width: '100%', height: '100%', cursor: 'pointer' }} />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Chat;


// <div style={{position:'absolute',
// right: t.who===userName? '':'30px',
// left: t.who===userName? '30px':'',
// top:'5px', display:'flex', }}>
// {t.message}
// <div style={{backgroundColor:'blue',height:'50px' }}>
//   </div>
// </div>

