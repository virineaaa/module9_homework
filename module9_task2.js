//Модуль 9. Задание 1. Написать код, оторый будет преобразовывать JSON в JS-объект и выводить его в консоль.

/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
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
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
// console.log('list', list);


/* Этап 3. Запись данных в результирующий объект */
for (let i = 0; i < list.length; i++) {
  const result = {
  name: list[i].name,
  age: Number(list[i].age),
  prof: list[i].prof,
};
  // Вывод данных
  console.log('list', result);
}