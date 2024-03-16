import { Telegraf, session } from "telegraf";
import { IConfigService } from "./configs/Config.InterfaceConfig";
import { Stage } from "telegraf/typings/scenes";
import { MyContext } from "./context/base.Context";
import { questions, results } from "../app/contents";
import { Quiz } from "../app/Quiz";

export class Bot {
  bot: Telegraf<MyContext>;

  constructor(configService: IConfigService, private stage: Stage<MyContext>) {
    this.bot = new Telegraf<MyContext>(configService.get("TOKEN_BOT"));
    this.bot.use(session());
    this.bot.use(stage.middleware());
  }

  init() {
    this.bot
      .use((ctx, next) => {
        return next();
      })
      .start(async (ctx) => {
        ctx.session.quiz = new Quiz(1, questions, results);
        ctx.session.userAnswer = [];

        await ctx.scene.enter("scene");
      });
    this.bot.launch();
  }
}
