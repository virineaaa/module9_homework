// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j__result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j__btn__request');

/**
  * Функция-обертка над XMLHttpRequest, осуществляющая запрос
  * url - урл, по которому будет осуществляться запрос
  * callback - функция, которая вызовется при успешном выполнении
  * и первым параметром получит объект-результат запроса
  */
function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

/**
  * Функция обработки полученного результата
  * apiData - объект с результатом запроса
  */
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card__image"
        />
        <p class="p__card">${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
  const value = +document.querySelector("input").value;
  if (!value) {return};
  if (value < 1 || value > 10) {
    let hint = document.querySelector(".p__hint").innerHTML = `*число не входит в диапазон от 1 до 10`;
      } else {
        useRequest(`https://loremflickr.com/json/g/320/240/all=${value}`, displayResult);
        document.querySelector("input").value = '';
        document.querySelector(".p__hint").innerHTML = '';
   }
})

