
import './chat.css';
import {MdTextsms} from 'react-icons/md'
import {AiFillBank} from 'react-icons/ai'
import {RiCloseCircleLine} from 'react-icons/ri'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import React,{useState, useRef, useEffect, useContext} from 'react';
import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import PulseLoader from "react-spinners/PulseLoader";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import {BankContext} from '../../Context/bank-context'




function Chat() {

  const [showTextBox, setShowTextBox] = useState(false)
  const [showX, setShowX] = useState(false)
  const [stompClient, setStompClient] = useState(null);
  const [transcript, setTranscript] = useState([])
  const [chatType, setChatType] = useState()
  const [sendText, setSendText] = useState(true)
  const [repUname, setRepUname] = useState();
  const [chatWrapHeight, setChatWrapHeight] = useState('50px')
  let chatCTX = useContext(BankContext)
  const [userName, setUserName] = useState(chatCTX.onUserData.firstName)

  let tranDiv = document.getElementById("trDiv");

 

  let socket = useRef(null)//test

  const updateChatArr = (from, newChat) => {

   let id = new Date().getTime() + from;
    
   if(newChat==="~~~`typing`~~~"){
     if(transcript[transcript.length-1]!=="~~~`typing`~~~"){
      setTranscript(prev=>[...prev.filter(m=> m.message !=="~~~`typing`~~~" ), 
      {who: from, message: newChat, time: '', id:id}])
     }
   } else {
    setTranscript(prev=>[...prev.filter(m=> m.message !=="~~~`typing`~~~" )])

    setTimeout(() => {
     if(newChat==="~~~`stopTyping`~~~"){
        
      }
      else if(newChat==="~~~`first message`~~~"){
        setTranscript(prev=>[...prev, 
          {who: 'bank', message: 'You are now being connected to '+ from,
           time: '', id:id}])
           setRepUname(from)
      }
      else if(newChat==="~~~`discon`~~~"){
        setTranscript(prev=>[...prev, 
          {who: 'bank', message: from+ ' disconnected. Chat is closed.',
           time: '', id:id}])
           setRepUname('')
      }
      else {
        setTranscript(prev=>[...prev.filter(m=> m.message !=="~~~`typing`~~~" ), 
        {who: from, message: newChat, time: getTime(), id:id}])
      }
     }, 500);

   }
     
   
    
  }

  const requestSupport = () => {
    console.log('requestSupport', userName);
    
    let id = new Date().getTime();
    fetch(' http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/chat/employee/allEmployee')
    .then(res=> res.json())
    .then(data=> {
      
      if(data.length){
        console.log(data);
        
        setRepUname(data[0].employeeUsername)
        setTranscript(prev=>[...prev, 
          {who: 'bank', message: 'You are now being connected to '+ data[0].employeeUsername,
           time: '', id:id}])
        removeRepFromWL()

        stompClient.send("/app/hello/hellouser", {}, JSON.stringify({from:userName, 
          to: data[0].employeeUsername,text:'~~~`first message`~~~'}));

      } else {
        addCustomerToWL();
        setTranscript(prev=>[...prev, 
          {who: 'bank', message: 'All of our representatives are busy assisting other '+
           'customers. You have been added to our waiting list.',
           time: '', id:id}])
      }
    }).catch(err=>console.log(err))
  }

  const removeRepFromWL = () => {
    fetch('http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/chat/employee/remove',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: '',
    }
    ).then(res=>res.json()).then(data=>{
      console.log('removing rep');
      console.log(data);
      
    }).catch(err=>console.log(err))
  }

  const addCustomerToWL = () => {
    fetch('http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/chat/user/'+userName,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: '',
    }
    ).then(res=>res.json()).catch(err=>console.log(err))
  }

  useEffect(()=>{
    if(transcript.length) {
      setTimeout(() => {
        tranDiv.scrollTop = tranDiv.scrollHeight;
      }, 300);
      
      
    }
  },[transcript])

  useEffect(()=>{
    socket.current = new SockJS(
      "https://fast-eyrie-01446.herokuapp.com/hello"
    );
    setStompClient(Stomp.over(socket.current));
    let stompClient = Stomp.over(socket.current);

    stompClient.connect(
      { username: userName },
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

        return ()=> stompClient.disconnect()

  },[chatCTX.onUserData])

  const submitMessage = (e) => {
    
    
    if(e.key==="Enter") {
      e.preventDefault();
      setSendText(false);
      let id = new Date().getTime() + userName;
      setTranscript(prev=>[...prev, {who: userName, message: chatType, time: getTime(),id:id}])
      setChatType('');
      
      setTimeout(() => {
        setSendText(true)
      }, 1000);

      sendMessage();
    } 

  }



  const getTime = () => {
    let today = new Date();
    
    let minute = today.getMinutes()>=0 && today.getMinutes()<10? '0'+today.getMinutes():
    today.getMinutes();
    let hour = today.getHours()%12==0 ? 12 : today.getHours()%12;    
    let suffix = today.getHours()<12 ? " AM" : " PM"
    let time = hour + ":" + minute + suffix;

    
    return time;
  }


  function sendMessage() {
    let id = new Date().getTime();
   if(repUname){
    console.log(JSON.stringify({from:userName, 
      to: repUname,text:chatType}));
    
    stompClient.send("/app/hello/hellouser", {}, JSON.stringify({from:userName, 
    to: repUname,text:chatType}));
   } else {
    setTranscript(prev=>[...prev, 
      {who: 'bank', message: 'You are not connected to anyone yet',
       time: '', id:id}])
   }
    
  }

  return (
    <div  >
        
      <div className='chatWrap' style={{height:chatWrapHeight, }}>

    <Slide  bottom unmountOnExit={true} mountOnEnter={true} when={showTextBox} appear={true} 
    onReveal={ () => setTimeout(() => {
      setShowX(true)
    }, 1000) }>

          <div className='chatBoxCont' style={{}}>
            <Fade top opposite when={showX}>
          <div style={{position:'absolute', top:'-10%', right:'-20px', 
            cursor:'pointer',   }} onClick={()=>setTimeout(() => {
              setTranscript([])

              if(repUname){
                stompClient.send("/app/hello/hellouser", {}, JSON.stringify({from:userName, 
                  to: repUname,text:'~~~`discon`~~~'}));
                  setRepUname('')
              }

            }, 500)}>
                <RiCloseCircleLine  size='30'
                color={'salmon'}
                onClick={()=>{
                  setShowX(false)
                  setTimeout(() => {
                    setShowTextBox(prev=>!prev)
                  }, 800);
                  setTimeout(() => {
                    setChatWrapHeight('50px')
                  }, 500);

                }}/>
          </div>
            </Fade>
            

            <div className='transcriptArea' id='trDiv' style={{ }}>

            <TransitionGroup >

              
              {
                  transcript.map(t=>  {
                  return (
                    <Fade bottom opposite collapse appear={true} key={t.id}>
                       
                    <div className='chatTranscript' 
                    style={{ justifyContent:`${t.who===userName?"":"flex-end"}`,
                    
                    
                     }}>

                        {t.who===userName?
                          <span className="chatPlayerSpan" >
                          {userName[0].toUpperCase()}
                        </span>:''
                        }

                        {
                          t.who===userName? 
                          
                          '':<span style={{marginLeft:'7px', marginTop:'5px', color:'grey'}}>
                            {t.time}</span>
                     
                        }

                       
                              
                        <div style={{wordBreak:'break-word', borderRadius:'5px',
                        marginLeft:t.who===userName? '30px':'7px',
                        marginRight: t.who===userName? '7px':'30px',
                        color:  t.who ==='bank' ? 'grey': 'black' ,
                        fontStyle : t.who ==='bank' ? 'italic': '' ,
                        backgroundColor:t.who===userName?'rgba(252, 100, 47, 0.8)'
                        :
                        t.message ==="~~~`typing`~~~" || t.who ==='bank' ?
                         '':'rgba(255, 177, 56,0.8)', padding:'8px'}}>
                        {t.message==="~~~`typing`~~~"? 
                        <span style={{color:'grey', fontStyle:'italic', position:'relative'}}> 
                        {repUname} is typing <PulseLoader color='grey' size={6} /> </span>: 
                        t.message}
                        </div>
                       
                        

                        {
                          t.who===userName? 
                          
                          <span style={{marginRight:'7px', marginTop:'5px',color:'grey'}}>
                            {t.time}</span>:''
                     
                        }
                        
                        {t.who===userName?
                          '':
                          <span className="chatPlayerSpan" >
                          <AiFillBank/>{/* {t.color.toUpperCase()} */}
                        </span>
                        }
                      
                    </div>
                        
                     </Fade>

                  )
                  })
              }

              
            </TransitionGroup >   
              
            </div>
            
           <div style={{height:'30%', borderTop:'1px solid black'}}>
           <Fade  bottom opposite when={sendText} distance={'30px'}>
           <textarea id='tArea' onChange={(e)=>setChatType(e.target.value)} value={chatType}
            onKeyPress={submitMessage}  className='chatBoxText' 
            
            placeholder="Type your message..."></textarea>
            </Fade>
           </div>
        </div>
     </Slide>

    
          <div style={{pointerEvents: showTextBox? 'none':'' }} 
          className='chatIconWrap' onClick={()=>{
            setShowTextBox(prev=>!prev);
            setTimeout(() => {
              setChatWrapHeight('500px')
            }, 500);
            requestSupport();
          }}>
     <Slide  bottom unmountOnExit={true}  mountOnEnter={true} when={!showTextBox} appear={true}>
            
          <MdTextsms style={{width:'100%', height:'100%',cursor:'pointer'}}/>
     </Slide>
          </div>

   
    </div>
      
    </div>
  );
}

export default Chat;







// import './chat.scss';
// import { MdTextsms } from 'react-icons/md'
// import { AiFillBank } from 'react-icons/ai'
// import { RiCloseCircleLine } from 'react-icons/ri'
// import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';
// import React, { useState, useRef, useEffect } from 'react';
// import * as SockJS from "sockjs-client";
// import * as Stomp from "stompjs";

// // function App() {
// function Chat() {
//   const [showTextBox, setShowTextBox] = useState(false)
//   const [showX, setShowX] = useState(false)
//   const [stompClient, setStompClient] = useState(null);
//   const [transcript, setTranscript] = useState([])
//   const [chatType, setChatType] = useState()
//   const [userName, setUserName] = useState("mzere")
//   const [sendText, setSendText] = useState(true)

//   const [chatWrapHeight, setChatWrapHeight] = useState('50px')

//   let tranDiv = document.getElementById("trDiv");

//   let socket = useRef(null)//test

//   const updateChatArr = (from, newChat) => {
//     setTranscript(prev => [...prev, { who: from, message: newChat, time: getTime() }])
//   }

//   useEffect(() => {
//     if (transcript.length) {
//       tranDiv.scrollTop = tranDiv.scrollHeight
//     }
//   }, [transcript])

//   useEffect(() => {
//     socket.current = new SockJS(
//       "https://fast-eyrie-01446.herokuapp.com/hello"
//     );
//     setStompClient(Stomp.over(socket.current));
//     let stompClient = Stomp.over(socket.current);

//     stompClient.connect(
//       { username: "mzere" },
//       function (frame) {
//         stompClient.subscribe("/users/queue/messages", function (greeting) {
//           const messageSender = JSON.parse(greeting.body).from;
//           const messageReceived = JSON.parse(greeting.body).text
//           console.log(messageReceived);
//           console.log("From: " + messageSender);
//           updateChatArr(messageSender, messageReceived);
//         });
//       }
//     )

//     return () => stompClient.disconnect()

//   }, [])

//   const submitMessage = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       setSendText(false);
//       setTranscript(prev => [...prev, { who: userName, message: chatType, time: getTime() }])
//       setChatType('');

//       setTimeout(() => {
//         setSendText(true)
//       }, 1000);
//     }
//   }

//   const getTime = () => {
//     let today = new Date();

//     // let minute = today.getMinutes()>=0 && today.getMinutes()<10? '0'+today.getMinutes():
//     // today.getMinutes();
//     // console.log(minute);

//     // let time = today.getHours() + ":" + minute ;

//     let minute = today.getMinutes() >= 0 && today.getMinutes() < 10 ? '0' + today.getMinutes() :
//       today.getMinutes();
//     let hour = today.getHours() % 12 == 0 ? 12 : today.getHours() % 12;
//     let suffix = today.getHours() < 12 ? " AM" : " PM"
//     let time = hour + ":" + minute + suffix;

//     return time;
//   }

//   return (
//     <div className="mainCont" >
//       <div className='chatWrap' style={{ height: chatWrapHeight, }}>
//         <Slide bottom unmountOnExit={true} mountOnEnter={true} when={showTextBox} appear={true}
//           onReveal={() => setTimeout(() => {
//             setShowX(true)
//           }, 1000)}>

//           <div className='chatBoxCont' style={{}}>

//             {/* This is the div that has the X button to close the chat box */}
//             <Fade top opposite when={showX}>
//               <div className="chatHeader"
//                 onClick={() => setTimeout(() => { setTranscript([]) }, 500)}>
//                 <RiCloseCircleLine size='30'
//                   color={'gray'}
//                   onClick={() => {
//                     setShowX(false);
//                     setTimeout(() => {
//                       setShowTextBox(prev => !prev)
//                     }, 800);
//                     setTimeout(() => {
//                       setChatWrapHeight('50px')
//                     }, 500);
//                   }} />
//                   <h1>Support Chat</h1>
                  
//               </div>
//               <p id="support-tagline">Wallet got you in checkmate?<br/>We can help.</p>
//             </Fade>

//             <div className='transcriptArea' id='trDiv' style={{}}>
//               {transcript.map(t => {
//                 return (
//                   <Fade duration={1000} bottom when={transcript} appear={true} collapse>
//                     <div className='chatTranscript'
//                       style={{ justifyContent: `${t.who === userName ? "" : "flex-end"}`, }}>

//                       {t.who === userName ?
//                         <span className="chatPlayerSpan" >
//                           {userName[0].toUpperCase()}
//                         </span> : ''
//                       }

//                       {t.who === userName ? '' : <span className="chatTimeSpan"> {t.time} </span>}

//                       <div style={{
//                         wordBreak: 'break-word', borderRadius: '10px',
//                         marginLeft: t.who === userName ? '30px' : '7px',
//                         marginRight: t.who === userName ? '7px' : '30px',
//                         backgroundColor: t.who === userName ? 'rgba(252, 100, 47, 0.8)'
//                           :
//                           'rgba(255, 177, 56,0.8)', padding: '8px'
//                       }}>
//                         {t.message}
//                       </div>

//                       {t.who === userName ? <span className="chatTimeSpan"> {t.time}</span> : ''}

//                       {t.who === userName ?
//                         '' :
//                         <span className="chatPlayerSpan" >
//                           <AiFillBank />{/* {t.color.toUpperCase()} */}
//                         </span>
//                       }
//                     </div>
//                   </Fade>
//                 )
//               })
//               }
//             </div>

//             <div className='textInputContainer'>
//               <Fade bottom opposite when={sendText} distance={'30px'}>
//                 <textarea id='tArea' onChange={(e) => setChatType(e.target.value)} value={chatType}
//                   onKeyPress={submitMessage} className='chatBoxText' placeholder="Type your message..."></textarea>
//               </Fade>
//             </div>
//           </div>
//         </Slide>

//         <div style={{ pointerEvents: showTextBox ? 'none' : '' }}
//           className='chatIconWrap' onClick={() => {
//             setShowTextBox(prev => !prev);
//             setTimeout(() => {
//               setChatWrapHeight('500px')
//             }, 500);
//           }}>
//           <Slide bottom unmountOnExit={true} mountOnEnter={true} when={!showTextBox} appear={true}>
//             <MdTextsms style={{ width: '100%', height: '100%', cursor: 'pointer' }} />
//           </Slide>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chat;




