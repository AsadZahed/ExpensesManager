import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

//function to validate env, otherwise return error for missing env variable.
export default cleanEnv(process.env, {
  MONGO_CONNECTION_STRING: str(),
  PORT: port(),
});
