const burgerOptions = document.querySelector('.burger-options');
const burgerMenu = document.querySelector('.burger');
burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.burger-options').classList.toggle('open');

    
});

// Функция обновления размеров
const updateDimensions = () => {
    const width = window.innerWidth;
    if (width > 1440) {
        burgerOptions.classList.remove('open');
        burgerMenu.classList.remove('active');
    }
};

// Событие изменения размера окна
window.addEventListener('resize', updateDimensions);

// Инициализация текущих размеров
updateDimensions();

let cart = {
    'id1': {
        'name': 'Стражи Галактики. Часть 3',
        'price': 350,
        'added': false,
    },
    'id2': {
        'name': 'Гран Туризмо',
        'price': 400,
        'added': false,
    },
    'id3': {
        'name': 'Джон Уик 4',
        'price': 550,
        'added': false,
    },
    'id4': {
        'name': 'Оппенгеймер',
        'price': 450,
        'added': false,
    },
    'id5': {
        'name': 'Кот в сапогах: Последнее желание',
        'price': 350,
        'added': false,
    },
    'id6': {
        'name': 'Человек-паук: Паутина вселенных',
        'price': 400,
        'added': false,
    }
};

const cartContainer = document.getElementById('cart');
const totalCostElement = document.getElementById('total-cost');

document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }

    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
};

const plusFunction = id => {
    if (!cart[id]['added']) {
        cart[id]['added'] = true;
        renderCart();
    }
};

const minusFunction = id => {
    if (cart[id]['added']) {
        cart[id]['added'] = false;
        renderCart();
    }
};

const renderCart = () => {
    cartContainer.innerHTML = '';
    let totalCost = 0;

    for (let id in cart) {
        if (cart[id]['added']) {
            const item = document.createElement('div');
            item.classList.add('movie-card');
            item.innerHTML = `
                <span>${cart[id]['name']} - ${cart[id]['price']} ₽</span>
                <button class="button3 minus" data-id="${id}"><img src="Icons/trash-can.png" alt="remove"></button>
            `;
            cartContainer.appendChild(item);
            totalCost += cart[id]['price'];
        }
    }

    const totalElement = document.createElement('div');
    totalElement.id = 'total-cost';
    totalCostElement.textContent = `Общая стоимость: ${totalCost} ₽`;
};

renderCart();