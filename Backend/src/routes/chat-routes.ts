import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion, sendChatsToUser, deleteChats } from "../controllers/chat-controllers.js";

// Protected API
const chatsRoutes = Router();
chatsRoutes.post(
    "/new",
    validate(chatCompletionValidator),
    verifyToken,
    generateChatCompletion);
chatsRoutes.get(
    "/all-chats",
    verifyToken,
    sendChatsToUser);
chatsRoutes.delete(
    "/delete",
    verifyToken,
    deleteChats);
    


export default chatsRoutes;