import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import routerUser from "../src/routes/user.routes";
class App {
  private app: Application;
  private apiPatchs = {
    users: "/api/users",
  };
  public port: number | string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 9000;
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.apiPatchs.users, routerUser);
  }
  async listen() {
    await this.app.listen(this.port, () => {
      console.log("Server running on http://localhost:" + this.port);
    });
  }
}

export default App;
