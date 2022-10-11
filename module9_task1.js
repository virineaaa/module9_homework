//Модуль 9. Задание 1. Написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
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
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

for (let i = 0; i < studentNode.length; i++) {
  const nameNode = studentNode[i].querySelector("name");
  const firstNode = studentNode[i].querySelector("first");
  const secondNode = studentNode[i].querySelector("second");
  const ageNode = studentNode[i].querySelector("age");
  const profNode = studentNode[i].querySelector("prof");
  
  // console.log('nameNode', nameNode);
  // console.log('ageNode', ageNode);
  // console.log('profNode', profNode);
  // console.log('langNode', langNode);
  // console.log('secondNode', secondNode);
  
  
  // Получение данных из атрибутов
   const langAttr = nameNode.getAttribute('lang');
  //console.log('langAttr', langAttr);
  
  /* Этап 3. Запись данных в результирующий объект */ 
  const studentsList = {name: firstNode.textContent + '  ' + secondNode.textContent, age: ageNode.textContent, prof: profNode.textContent, lang: langAttr};
  
  // Вывод данных
  console.log('list', studentsList);
}