export class Quiz {
  public current: number;
  public score: number;
  public result: number;
  constructor(
    public type: number,
    public questions: Question[],
    public results: Result[]
  ) {
    //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
    this.type = type;

    //Массив с вопросами
    this.questions = questions;

    //Массив с возможными результатами
    this.results = results;

    //Количество набранных очков
    this.score = 0;

    //Номер результата из массива
    this.result = 0;

    //Номер текущего вопроса
    this.current = 0;
  }

  click(index: number): number {
    try {
      //Добавляем очки
      const value = this.questions[this.current].click(index);
      this.score += value;

      let correct = -1;

      //Если было добавлено хотя бы одно очко, то считаем, что ответ верный
      if (value >= 1) {
        correct = index;
      } else {
        //Иначе ищем, какой ответ может быть правильным
        for (let i = 0; i < this.questions[this.current].answers.length; i++) {
          if (this.questions[this.current].answers[i].value >= 1) {
            correct = i;
            break;
          }
        }
      }

      this.Next();

      return correct;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return 0;
    }
  }

  //Переход к следующему вопросу
  Next() {
    this.current++;

    if (this.current >= this.questions.length) {
      this.End();
    }
  }

  //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
  End() {
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].check(this.score)) {
        this.result = i;
      }
    }
  }
}
export class Question {
  constructor(public text: string, public answers: Answer[]) {
    this.text = text;
    this.answers = answers;
  }
  click(index: number): number {
    return this.answers[index].value;
  }
}

export class Answer {
  constructor(public text: string, public value: number) {
    this.text = text;
    this.value = value;
  }
}

export class Result {
  constructor(public text: string, public value: number) {
    this.text = text;
    this.value = value;
  }
  public check(value: number): boolean {
    if (this.value <= value) {
      return true;
    } else {
      return false;
    }
  }
}
