import { Scenes } from "telegraf";
import "dotenv/config";
import { Bot } from "../core/Bot";
import { ConfigService } from "../core/configs/config.service";
//import { mainScene } from "./scenes/MainScene";
import { MyContext } from "../core/context/base.Context";
import { scene} from "./scenes/StartScene";
import { resultscene } from "./scenes/ResultScene";



const stage = new Scenes.Stage<MyContext>([scene,resultscene], {
  ttl: 10,
  default: "scene",
});
export const bot = new Bot(new ConfigService(), stage);
