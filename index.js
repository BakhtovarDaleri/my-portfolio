// Находим кнопки по ID и перенаправляем на страницу GitHub
document.addEventListener("DOMContentLoaded", function () {
  const myButton = this.getElementById("myButton2");

  myButton.addEventListener("click", function () {
    window.open("https://github.com/BakhtovarDaleri", "_blank"); // Открываем в новой вкладке
  });
});

// Находим элемент по классу
const myButton1 = document.querySelector(".btn-1");

// Добавляем обработчик события
myButton1.addEventListener("click", function () {
  // При клике на кнопку перенаправляем пользователя к секции id="contacts"
  document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
});

// Находим форму по ID
const form = document.getElementById("contacts");

//Добавляем обработчик события
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Получаем значения из полей формы
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  console.log("Полное имя", fullName);
  console.log("Электронная почта:", email);
  console.log("Номер телефона", phone);
  console.log("Тема:", subject);
  console.log("Сообщение:", message);

  form.requestFullscreen();
});
