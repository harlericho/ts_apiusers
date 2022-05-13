import dontenv from "dotenv";
import App from "./config/app";
dontenv.config();
const app = new App();
app.listen();
