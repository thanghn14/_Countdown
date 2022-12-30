var countDownDate = new Date("Dec 30, 2022 11:25:00").getTime();

var x = setInterval(function () {
  // var now = new Date().getTime();
  // var distance = countDownDate - now;
  // var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var weeks = 0;
  var days = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var main = document.querySelector(".title");
  var dash = document.querySelector('.dash');
  var next = document.querySelector('.next');

  if (distance <= 0) {
    main.classList.add("modalImg");
    dash.classList.add("displayBlock");
    next.classList.add("displayBlock");
    // window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiMDdlNjYxODktOTdlNS00MDlkLWI4OWItZmU3Mjk3MDU0NTM1IiwidCI6IjYyODY2ZjAxLTg2ZDAtNDhhZC05ZDMzLWZkZWVkNjczNjhiYyIsImMiOjEwfQ%3D%3D";
    clearInterval(x);
    document.getElementById("week").innerHTML = 0;
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
  } else {
    document.getElementById("week").innerHTML = weeks;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
}, 1000);
