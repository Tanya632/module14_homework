
  // Ищем ноду для вставки результата запроса
   const resultNode = document.querySelector('.j-result');
   // Ищем кнопку, по нажатии на которую будет запрос
   const btn = document.querySelector('.j-btn-request');

  
   // Вешаем обработчик на кнопку для запроса
   btn.addEventListener('click', () => {
       const value1 = document.getElementById('page').value;
       const value2 = document.getElementById('limit').value;
       let s = document.getElementById('j-result');
       s.textContent = '';
       if (!(value1 >= 1 && value1 <= 10)) {
           s.textContent = 'Номер страницы вне диапазона от 1 до 10';
           return;
       }
       else if(!(value2 >= 1 && value2 <= 10)) {
           s.textContent = 'Лимит вне диапазона от 1 до 10';
           return;
       }
       else if(!(value1 >= 1 && value1 <= 10 && value2 >= 1 && value2 <= 10)) {
           s.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
           return;
       } else {
           fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
           .then((response) => {
                   document.getElementById('result').src = response.url;
               });
           console.log(result);
       }
   });