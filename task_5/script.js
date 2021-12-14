const wsUri = "wss://ws.ifelse.io";
const out = document.querySelector(".out");
const input = document.querySelector(".input");
const btnSend = document.querySelector(".send");
const btnGeoLoc = document.querySelector(".geo_loc");
const websocket = new WebSocket(wsUri);

const writeToScreen = (mesage, opt) => {
  let pre = document.createElement("div");
  let position;
  let xH = out.scrollHeight;

  out.scrollTo(0, xH);
  opt === true ? (position = "right") : (position = "left");
  pre.innerHTML = `
  <div class="wrapper ${position}">
  <div class="out__inner">${mesage}</div>
  </div>
  `;
  out.appendChild(pre);
};

const sendMessage = (callback) => {
  let message = input.value;
  input.value = "";
  callback(message, true);
  websocket.send(message);
  websocket.onmessage = (evt) => {
    callback(evt.data, false);
  };
};

// механизм отправки гео-локации

const getLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation не поддерживается вашим браузером");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

const success = (position) => {
  let link = `<a href="https://www.openstreetmap.org/#map=15/${position.coords.latitude}/${position.coords.longitude}" >Гео-локация</a>`;
  writeToScreen(link, true);
  websocket.send(link);
};

const error = () => {
  let error = "При получении местоположения произошла ошибка";
  writeToScreen(error, true);
};

//
btnSend.addEventListener("click", () => {
  sendMessage(writeToScreen);
});
btnGeoLoc.addEventListener("click", getLocation);
