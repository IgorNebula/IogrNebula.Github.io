import { Markup, Scenes } from "telegraf";
import { MyContext } from "../../core/context/base.Context";

export const resultscene = new Scenes.BaseScene<MyContext>("resultScene");

resultscene
  .enter(async (ctx) => {
    await ctx.reply(
      `Хотите посмотреть результат?`,
      Markup.inlineKeyboard([
        [Markup.button.callback("да", "ok")],
        [Markup.button.callback("выйти", "exit")],
      ])
    );
  })
  .leave(async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
  })
  .action("ok", async (ctx) => {
    await ctx.answerCbQuery();
    /**
     * вывод результата
     */
    const quiz = ctx.session.quiz;
    let textResult = "";

    for (let i = 0; i < quiz.questions.length; i++) {
      textResult += `❔${i + 1}. ${quiz.questions[i].text}
      `;
      let answerstxt = "";
      for (let j = 0; j < quiz.questions[i].answers.length; j++) {
        if (quiz.questions[i].answers[j].value > 0) {
          answerstxt += "✅";
        } else {
          if (ctx.session.userAnswer[i] === j) answerstxt += "❌";
        }
        answerstxt += `${quiz.questions[i].answers[j].text} 
        `;
      }
      textResult += answerstxt + "\n\n";
    }
    await ctx.reply(textResult);
    return ctx.scene.leave();
  })
  .action("exit", async (ctx) => {
    return ctx.scene.leave();
  });
