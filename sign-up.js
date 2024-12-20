const openPopupButton = document.getElementById('open-popup');
const popup = document.getElementById('popup');

openPopupButton.addEventListener('click', () => {
    popup.classList.add('active');
});