import { Context, Markup, Scenes } from "telegraf";
import { MyContext } from "../../core/context/base.Context";
import { Update, CallbackQuery } from "telegraf/typings/core/types/typegram";

export const scene = new Scenes.BaseScene<MyContext>("scene");

scene
  .enter(async (ctx) => {
    const quiz = ctx.session.quiz;
    // 
    if (quiz.current < quiz.questions.length) {
      //textQuestion
      const textQuest = `${quiz.current+1}из${quiz.questions.length} ${quiz.questions[quiz.current].text}`
      //создаем кнпки
      const buttons = [];
      for(let i=0;i<quiz.questions[quiz.current].answers.length;i++){
        buttons.push([
          Markup.button.callback(quiz.questions[quiz.current].answers[i].text,String(i))
        ])
      }
      await ctx.replyWithMarkdownV2(
        textQuest,
        Markup.inlineKeyboard( buttons
        )
      );
    } else {
      await ctx.reply(`Ваш счёт: ${ctx.session.quiz.score}
      ${ctx.session.quiz.results[ctx.session.quiz.result].text}`);
      ctx.scene.enter("resultScene");
    }
  })
.action("0", async (ctx) => {
    await HandleAction("0", ctx);
  })
  .action("1", async (ctx) => {
    await HandleAction("1", ctx);
  })
  .action("2", async (ctx) => {
    await HandleAction("2", ctx);
  })
  .action("3", async (ctx) => {
    await HandleAction("3", ctx);
  })
  .action("4", async (ctx) => {
    await HandleAction("4", ctx);
  })
  .action("5", async (ctx) => {
    await HandleAction("5", ctx);
  });
  /**
 * обработчик щелчка в викторине
  */
async function HandleAction(
  index: string,
  ctx: Context<Update.CallbackQueryUpdate<CallbackQuery>> &
    Omit<MyContext, keyof Context<Update>> & { match: RegExpExecArray }
) {
  await Click(index, ctx);
  ctx.session.userAnswer.push(Number(index));
  await ctx.answerCbQuery();
  await ctx.deleteMessage();
  await ctx.scene.reenter();
}

async function Click(
  index: string,
  ctx: Context<Update.CallbackQueryUpdate<CallbackQuery>> &
    Omit<MyContext, keyof Context<Update>> & { match: RegExpExecArray }
) {
  ctx.session.quiz.click(Number(index));
}
