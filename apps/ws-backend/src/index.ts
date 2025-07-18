import {WebSocketServer ,WebSocket} from "ws"
const wss= new WebSocketServer({
  port:3002
})
 console.log("server chalu horha hai" )
wss.on("connection",(socket,request)=>{
 socket.on("message",(message)=>{
  console.log("message aya hai" + message.toString() )
 })
})