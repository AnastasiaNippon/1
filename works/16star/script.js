const models = {
    toyota: ['Supra', 'Yaris', 'Aqua'],
    honda: ['N-Box', 'N-One', 'S660'],
    mazda: ['RX-8', 'Mazda3', 'Mazda6'],
    lexus: ['LX', 'NX', 'LFA']
};

function updateModels() {
    const brand = document.getElementById('brand').value;
    const modelSelect = document.getElementById('model');
    modelSelect.innerHTML = '';
    models[brand].forEach(model => {
        const option = document.createElement('option');
        option.value = model.toLowerCase();
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

function calculatePrice() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const fuel = document.querySelector('input[name="fuel"]:checked').value;
    const engine = parseFloat(document.getElementById('engine').value);
    const condition = document.querySelector('input[name="condition"]:checked').value;
    const owners = condition === 'used' ? document.querySelector('input[name="owners"]:checked').value : 'new';
    const payment = document.querySelector('input[name="payment"]:checked').value;

    let price = 1000000; // базовая стоимость

    switch (brand) {
        case 'toyota': price += 100000; break;
        case 'honda': price += 200000; break;
        case 'mazda': price += 300000; break;
        case 'lexus': price += 500000; break;
    }

    switch (fuel) {
        case 'benzin': price += 50000; break;
        case 'diesel': price += 70000; break;
        case 'gaz': price += 30000; break;
        case 'electric': price += 100000; break;
    }

    price += engine * 10000;

    if (condition === 'used') {
        price -= 200000;
        if (owners === '3+') price -= 50000;
    }

    switch (payment) {
        case 'card': price += 20000; break;
        case 'cash': price -= 20000; break;
        case 'invoice': price += 50000; break;
    }

    document.getElementById('price').textContent = `Стоимость: ${price} руб.`;
}

document.querySelectorAll('input[name="condition"]').forEach(el => {
    el.addEventListener('change', () => {
        const ownerGroup = document.getElementById('owner-group');
        if (el.value === 'used') {
            ownerGroup.style.display = 'block';
        } else {
            ownerGroup.style.display = 'none';
        }
    });
});

updateModels();