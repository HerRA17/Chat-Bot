import React, { useState, useRef } from 'react'
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import red from "@mui/material/colors/red";
import { useAuth } from '../context/AuthContext';
import Chatitem from '../components/chat/Chatitem.tsx';
import { IoMdSend } from "react-icons/io";
import { sendChatRequest } from '../components/helpers/api-communicator.ts';
type Message = {
  role: "user" | "assistant";
  content: string;
} 

const Chat = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [ chatMessages, setChatMessages ] = useState<Message[]>([]);
  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    if(inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage])
    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats])
  }
  return (
    <Box sx={{ 
      display: "flex",
      flex: 1,
      width: "100%",
      height: "100%",
      mt: 3,
      gap: 3
    }}>
      <Box sx={{
        display: {md: "flex", sm: "none", xs: "none"},
        flex: 0.2,
        flexDirection: "column"
         }}> 
        <Box sx={{ 
          display: "flex",
          width: "100%",
          height: "60vh",
          bgcolor: "rgb(17,29,39)",
          borderRadius: 5,
          flexDirection: "column",
          mx: 3
          }}>
            <Avatar sx={{
              mx: "auto", 
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}>
            {chatMessages.map((chat) => (
            <Chatitem content={chat.content} role={chat.role} key={index} />
            ))}
            
            </Avatar>
            <Typography sx={{mx: "auto", fontFamily: "work sans"}}>
              You are talking to a ChatBOT
            </Typography>
            <Typography sx={{mx: "auto", fontFamily: "work sans", my: 4, p: 3}}>
              You can ask me questions related to Knowledge, Business, Advices, Education, etc.
              But please, avoid sharing personal information!
            </Typography>
            <Button sx={{
              width: "200px",
              mx: "auto",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400
              }
              }} 
              >Clear conversation</Button>
          </Box>
      </Box>
      <Box sx={{
        display: "flex",
        flex: { md: 0.8, sm: 1, xs: 1 },
        flexDirection: "column",
        px: 3 }}>
        <Typography sx={{ 
          fontSize: "40px",
          color: "white",
          mx: "auto",
          mb: 2}}>
          Model- GPT 3.5 Turbo
        </Typography>
        <Box sx={{ 
          width: "100%",
          height: "60vh",
          borderRadius: 3,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
          overflowX: "hidden",
          scrollBehavior: "smooth"
          }}>
            {chatMessages.map((chat) => (<div>{chat.content}</div>))}
        </Box>
        <div style={{
          display: "flex",
          width: "100%",
          padding: "20px",
          margin: "auto",
          borderRadius: 8,
          backgroundColor: "rgb(17,27,39)"
          }}>
            {" "}
            <input 
            ref={inputRef}
            type="text"
            style={{ 
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px" }} />
              <IconButton sx={{ml: "auto", color: "white"}} onClick={handleSubmit}>
                <IoMdSend/>
              </IconButton>
          </div>
        
      </Box>
    </Box>
  )
}

export default Chat