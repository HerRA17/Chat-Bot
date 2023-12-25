import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
connectToDatabase().then(() => {
    // connection and listeners
    app.listen(5000, () => console.log("Server open"));
}).catch((err) => console.log(err));
//# sourceMappingURL=index.js.map