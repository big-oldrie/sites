function askLogin() {
    const login = prompt("Введите логин:");

    if (login === "Админ") {
        const password = prompt("Введите пароль:");

        if (password === "Я главный") {
            alert("Здравствуйте!");
        } else if (password === null || password === "") {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        }
    } else if (login === null || login === "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
}

function askRegistration() {
    const answer = prompt("Желаете пройти регистрацию на сайте?");

    if (answer && answer.toLowerCase() === "да") {
        alert("Круто!");
        document.location='sign-up.html';
    } else {
        alert("Попробуй ещё раз");
    }
}