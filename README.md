# module9_homework (AJAX)

skillfactory

module9_task1

    Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
   
    XML:
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>
    
    JS-объект:
    {
      list: [
        { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
        { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
      ]
    }

module9_task2

    Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
    JSON:
    {
      "list": [
        {
          "name": "Petr",
          "age": "20",
          "prof": "mechanic"
        },
        {
          "name": "Vova",
          "age": "60",
          "prof": "pilot"
        }
      ]
    }
   
    JS-объект:
    {
      list: [
        { name: 'Petr', age: 20, prof: 'mechanic' },
        { name: 'Vova', age: 60, prof: 'pilot' },
      ]
    }
    
module9_task3

    Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
    - Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
    - Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
    
    
