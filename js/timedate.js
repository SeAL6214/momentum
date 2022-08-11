// Функция отображения реального времени
function showTime() {
    // Находим элемент с классом time и записываем его в переменную time
    const time = document.querySelector('.time');
    // Чтобы отобразить внутри элемента текст, используется метод textContent
    time.textContent = "Text";
    // Получаем текущие дату и время
    const date = new Date();
    // Чтобы из строки с датой и временем получить только время, удобно использовать метод toLocaleTimeString()
    const currentTime = date.toLocaleTimeString();
    // Задаём текущее время элементу с классом time (переменной time)
    time.innerHTML = currentTime;
    // Для обновления функции каждую секунду используем рекурсивный setTimeout — вызов функции внутри неё самой с интервалом в 1 секунду или 1000 миллисекунд
    setTimeout(showTime, 1000);
}
// Вызов функции showTime() 
showTime();

// Функция отображения даты
function showDate() {
    // Находим элемент с классом date и записываем его в переменную day
    const day = document.querySelector('.date');
    // Чтобы отобразить внутри элемента текст, используется метод textContent
    day.textContent = "Text";
    // Получаем текущие дату и время
    const date = new Date();
    // Для получения даты используем метод toLocaleDateString(). У данного метода два аргумента: локаль - язык отображения даты, например 'en-US', 'ua-UA', 'ru-RU' и объект options в котором перечисляются какие параметры даты и в каком представлении нужно отображать
    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        // hour: 'numeric',
        // minute: 'numeric',
        timeZone: 'Europe/Kiev'
    };
    // Чтобы из строки с датой и временем получить только дату, удобно использовать метод toLocaleDateString()
    const currentDate = date.toLocaleDateString('en-US', options);
    // Задаём текущую дату элементу с классом date (переменной day)
    day.innerHTML = currentDate;
    // Для обновления функции каждую секунду используем рекурсивный setTimeout — вызов функции внутри неё самой с интервалом в 1 секунду или 1000 миллисекунд.
    setTimeout(showDate, 1000);
}
// Вызов функции showDate()
showDate();