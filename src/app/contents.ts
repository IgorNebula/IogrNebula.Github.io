import { Result, Question, Answer } from "./Quiz";



export const results = [
  new Result("Вам многому нужно научиться", 0),
  new Result("Вы уже не плох разбираетесь", 4),
  new Result("Ваш уровень выше среднего", 8),
  new Result("Вы в совершенстве знаете тему", 14),
];

export const questions = [
  new Question(
    `Какие функции выполняет JS?
 В вопросе не идет речь про платформу Node JS`,
    [
      new Answer("Выполняет работу с сервером", 0),
      new Answer("Создает разметку на странице сайта", 0),
      new Answer("Создает стилевое оформление сайта", 0),
      new Answer("Отвечает за работу с базами данных", 0),
      new Answer("Отвечает за функции на стороне клиента", 1),
    ]
  ),
  new Question(
    'Что будет выведено в консоль?\n\n'+ '```var b = 10;\n if (b % 3 == 0) {\n	var i = 10;}\nconsole.log(i);```' ,
    [
      new Answer("Ошибку", 0),
      new Answer("Число 10", 0),
      new Answer("Значение пустой строки", 0),
      new Answer("Значение undefined", 1),
    ]
  ),
  new Question(
    'Какое количество сообщений будет выведено в консоль?\n'+'```for(var i = 10; i < 35; i += 5) {\n console.log(i);}```',
    [
      new Answer("25", 0),
      new Answer("Такой цикл работать не будет", 0),
      new Answer("6", 0),
      new Answer("15", 0),
      new Answer("5", 1),
    ]
  ),
];
questions.push(
  new Question(`Какие значения можно хранить в переменных?`, [
    new Answer("Только числа и строки", 0),
    new Answer("Строки, числа с точкой и простые числа", 0),
    new Answer("Строки, числа с точкой, простые числа и булевые выражения", 1),
  ])
);
questions.push(
  new Question(
    `Где можно использовать JavaScript?
`,
    [
      new Answer("Мобильные приложения", 0),
      new Answer("Веб-приложения", 0),
      new Answer("Серверные приложения", 0),
      new Answer("Прикладное программное обеспечение", 0),
      new Answer("Можно во всех перечисленных", 1),
    ]
  )
);
questions.push(
  new Question(`В чем отличие между локальной и глобальной переменной?`, [
    new Answer("Локальные видны повсюду, глобальные только в функциях", 0),
    new Answer("Глобальные можно переопределять, локальные нельзя", 0),
    new Answer("Локальные можно переопределять, глобальные нельзя", 0),
    new Answer("Глобальные видны повсюду, локальные только в функциях", 1),
  ])
);
questions.push(
  new Question(`Какие циклы есть в языке JavaScript?`, [
    new Answer("for, forMap, foreach, while", 0),
    new Answer("or, forMap, foreach, while, do while", 0),
    new Answer("for, while, do while, foreach", 0),
    new Answer("for, while, do while", 1),
  ])
);
questions.push(
  new Question(`Где верно указано имя переменной?`, [
    new Answer("var 2num;", 0),
    new Answer("ver num;", 0),
    new Answer("var num", 0),
    new Answer("var num-1;", 0),
    new Answer("var num_1;", 1),
  ])
);
questions.push(
  new Question(`Где верно указан вывод данных?`, [
    new Answer(`documentWrite("Hello");`, 0),
    new Answer(`print(Hello);`, 0),
    new Answer(`prompt("Hello")`, 0),
    new Answer(`write("Hello");`, 0),
    new Answer(`console.log("Hello");`, 1),
  ])
);
questions.push(
  new Question(`Что такое условный оператор?`, [
    new Answer("Конструкция, что выполняет код несколько раз", 0),
    new Answer("Конструкция для создания определенной переменной", 0),
    new Answer("Оператор сравнения значений", 1),
  ])
);
questions.push(
  new Question(`Где верно указан запуск всплывающего окна?`, [
    new Answer(`new alert ("Hi")`, 0),
    new Answer(`info ("Hi")`, 0),
    new Answer(`Нет верных вариантов`, 0),
    new Answer(`alert ("Hi")`, 1),
  ])
);
questions.push(
  new Question(`В чем разница между confirm и prompt?`, [
    new Answer(`Они ничем не отличаются`, 0),
    new Answer(
      `confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением`,
      0
    ),
    new Answer(
      `prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением`,
      1
    ),
  ])
);
questions.push(
  new Question(
    'Что будет записано в переменную test?\n\n'+"```var a = 5;\n var test = 5\n != a ? 'Yes' : 'No';```",
    [
      new Answer(`"Yes"`, 0),
      new Answer(`a`, 0),
      new Answer(`5`, 0),
      new Answer(`Будет ошибка`, 0),
      new Answer(`"No"`, 0),
    ]
  )
);
questions.push(
  new Question(`Какая переменная записана неверно?`, [
    new Answer(`var num = "STRING";`, 0),
    new Answer(`var isDone = 0;`, 0),
    new Answer(`var b = false;`, 0),
    new Answer(`var number = 12,5;`, 1),
  ])
);
questions.push(
  new Question(
    'Почему код ниже не будет работать?\n'+'```< script type="javascript/text">/n console.log("Hi!")</script>```',
    [
      new Answer(`Необходима точка с запятой после console.log("Hi!")`, 0),
      new Answer(
        `Запись console.log необходимо прописывать лишь в отдельных файлах`,
        0
      ),
      new Answer(`Неверно записан атрибут type`, 1),
    ]
  )
);
