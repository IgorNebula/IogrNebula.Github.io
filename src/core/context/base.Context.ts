import { Context, Scenes } from "telegraf";
import { Quiz } from "../../app/Quiz";

/**
 * Можно расширить объект сеанса, который доступен для каждого мастера.
 * Это может быть сделано путем расширения `WizardsessionData` и, в свою очередь, передавая ваш
 * собственный интерфейс как переменная типа для `Wizardsession` и для
 * `WizardContextWizard`.
 */
interface MyWizardSession extends Scenes.WizardSessionData {
  // будет доступен в соответствии с `ctx.scene.session.mywizardsessionprop`
  myWizardSessionProp: number;
}

/**
 * Мы все еще можем расширить обычный объект сеанса, который мы можем использовать на
 * контекст.Однако, поскольку мы используем Волшебников, мы должны заставить его расширить
 * `WizardSession`.
 *
 * Можно передать переменную типа в `Wizardsession`, если вы также хотите
 * Расширьте сеанс волшебника, как мы делаем выше.
 */
interface MySession extends Scenes.WizardSession<MyWizardSession> {
  // будет доступен под `ctx.session.mySessionProp`
  quiz: Quiz;
  userAnswer: number[];
}

/**
 * Теперь, когда у нас есть наш объект сеанса, мы можем определить наш собственный объект контекста.
 *
 * Как всегда, если мы также хотим использовать наш собственный объект сеанса, мы должны установить его
 * Здесь, под собственности `сессии.Кроме того, теперь нам также придется установить
 * Объект сцены под свойством `сцены.Когда мы расширяем сессию, мы
 * нужно еще раз передать тип как переменную типа.
 *
 * Мы также должны установить объект Wizard под свойством `Wizard`.
 */
export interface MyContext extends Context {
  // будетДоступенПод ctx.myContextProp`
  myContextProp: string;

  // declare session type
  session: MySession;
  // declare scene type
  scene: Scenes.SceneContextScene<MyContext, MyWizardSession>;
  // declare wizard type
  wizard: Scenes.WizardContextWizard<MyContext>;
}
