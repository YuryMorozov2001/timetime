$(document).ready(function () {
  new TypeIt("#element", {
    strings: ["Сегодня у меня был очень продуктивный день!", "Сегодня я успел просмотреть все свои сериалы!", "В этот день я отмечал день рождения своего друга!"],
    speed: 75,
    breakLines: false,
    autoStart: false,
    loop: true
  }).go();
});