let time;

function updateMessage(message) {
    document.getElementById('message').textContent = message;
}

function calculateTravelTime(fromCity, toCity) {
    if (fromCity === "Псков" && toCity === "Москва") {
        return 540;
    } else {
        return 120;
    }
}

function showFarewellMessage() {
    const farewellElement = document.getElementById('farewellMessage');
    farewellElement.style.display = 'block'; // Отображаем сообщение "Хорошего пути!"
}

function startTrip() {
    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;

    if (!fromCity || !toCity) {
        updateMessage('Пожалуйста, введите оба города.');
        return;
    }

    const totalTravelTime = calculateTravelTime(fromCity, toCity);
    time = totalTravelTime;

    updateMessage(`Старт поездки из ${fromCity} в ${toCity}. Предполагаемое время в пути: ${time} минут.`);
    showFarewellMessage();

    let interval = setInterval(() => {
        time -= 10;
        if (time > 0) {
            updateMessage(`Поездка продолжается. Осталось минут: ${time}`);
        } else {
            clearInterval(interval);
            updateMessage(`Вы приехали. Добро пожаловать в ${toCity}.`);
        }
    }, 1000);
}
