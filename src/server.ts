import { login, connectDb } from "./services/index";

login("admin", "password");
connectDb();
