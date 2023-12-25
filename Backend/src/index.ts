import app from "./app.js"
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
// connection and listeners
app.listen(PORT, () => console.log("Server open"));
}).catch((err) =>console.log(err))