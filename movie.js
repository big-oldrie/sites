const starContainer = document.getElementById('stars');
let currentRating = 0;

// Создание звёздочек
for (let i = 1; i <= 10; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = '&#9733;'; // Символ звезды
    star.dataset.rating = i;

    // Наведение мыши
    star.addEventListener('mouseover', function () {
        resetStars();
        highlightStars(i);
    });

    // Уход мыши
    star.addEventListener('mouseout', function () {
        resetStars();
        highlightStars(currentRating);
    });

    // Клик по звезде
    star.addEventListener('click', function (event) {
        currentRating = i;
        resetStars();
        highlightStars(currentRating);

        // Координаты выбранной звезды
        const rect = event.target.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Вызов конфетти
        confetti({
            particleCount: 50,
            spread: 20,
            origin: {
                x: x / window.innerWidth,
                y: y / window.innerHeight
            }
        });
    });


    starContainer.appendChild(star);
}

// Подсветка звёзд до указанного рейтинга
function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        }
    });
}

// Сброс всех звёздочек
function resetStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('selected'));
}


// Копирование ссылки
document.getElementById('share-button').addEventListener('click', () => {
    const notification = document.getElementById('notification');

    // Копируем ссылку в буфер обмена
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            // Показываем уведомление
            notification.style.display = 'flex';

            // Скрываем уведомление через 3 секунды
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy the link:', err);
        });
});

const favoriteImage = document.getElementById('favorite');

favoriteImage.addEventListener('click', () => {
    const isFavorite = favoriteImage.firstElementChild.src.includes('Icons/bookmark-on.png');
    favoriteImage.classList.toggle('active');
    favoriteImage.firstElementChild.src = isFavorite ? 'Icons/bookmark.png' : 'Icons/bookmark-on.png';
    favoriteImage.firstElementChild.alt = isFavorite ? 'Add to Favorites' : 'In Favorites';
});


const toggleButton = document.getElementById('toggle-button');
const expandableBlock = document.getElementById('expandable-block');

toggleButton.addEventListener('click', () => {
    const isOpen = expandableBlock.classList.toggle('open');
    toggleButton.lastElementChild.textContent = isOpen ? 'Закрыть трейлер' : 'Смотреть трейлер';
});