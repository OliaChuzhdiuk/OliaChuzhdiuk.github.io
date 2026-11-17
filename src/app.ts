import MyUser from "./User";
import { log as logger } from "./analytics";

const user = new MyUser("John");
console.log(user.greet());
logger(user.greet());
