const btn = document.querySelector(".btn");
const active = document.querySelector(".active");
const notActive = document.querySelector(".not_active");
const out_1 = document.querySelector(".out_1");
const out_2 = document.querySelector(".out_2");

btn.addEventListener("click", () => {
  active.classList.toggle("opacity_0");
  notActive.classList.toggle("opacity_1");
  getSizeWindow();
  getLocation();
});

// вывод размер экрана
const getSizeWindow = () => {
  out_1.innerHTML = `<div>Ширина экрана ${window.screen.width} px</div> <div>Высота экрана ${window.screen.height} px </div>`;
};

// вывод координат
const getLocation = () => {
  if (!navigator.geolocation) {
    out_2.textContent = "Geolocation не поддерживается вашим браузером";
  } else {
    out_2.textContent = "Определение местоположения…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
const error = () => {
  out_2.textContent = "Информация о местоположении недоступна";
};
const success = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  out_2.innerHTML = `<div>Широта: ${latitude} °</div> <div>Долгота: ${longitude} °</div>`;
};
