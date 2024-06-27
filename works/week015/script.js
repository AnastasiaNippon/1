// Массив городов
const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань"];
// Пустой массив для хранения температур
const temperatures = [];

// Запрашиваем у пользователя температуру для каждого города
for (let i = 0; i < cities.length; i++) {
    let temp = prompt(`Введите температуру для города ${cities[i]}:`);
    temperatures.push(Number(temp));
}

// Находим максимальную и минимальную температуру
let maxTemp = Math.max(...temperatures);
let minTemp = Math.min(...temperatures);

// Выводим информацию о погоде в разных городах
const cityList = document.getElementById("cityList");
for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
    cityList.appendChild(listItem);
}

// Выводим максимальную и минимальную температуру
document.getElementById("maxTemp").textContent = `Максимальная температура: ${maxTemp}°C`;
document.getElementById("minTemp").textContent = `Минимальная температура: ${minTemp}°C`;
