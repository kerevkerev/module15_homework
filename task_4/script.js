const btn = document.querySelector(".btn");
const active = document.querySelector(".active");
const notActive = document.querySelector(".not_active");
const out_1 = document.querySelector(".out_1");
const out_2 = document.querySelector(".out_2");
btn.addEventListener("click", () => {
  active.classList.toggle("opacity_0");
  notActive.classList.toggle("opacity_1");
  getLocation();
});

const getLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation не поддерживается вашим браузером");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

function success(position) {
  let url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${position.coords.latitude}&long=${position.coords.longitude}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      out_1.innerHTML = data.timezone;
      out_2.innerHTML = data.date_time_txt;
    });
}
const error = () => {
  alert("При получении местоположения произошла ошибка");
};
