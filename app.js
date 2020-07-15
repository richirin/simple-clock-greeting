const clock = document.getElementById('time');
const greeting = document.getElementById('greeting');
const yourName = document.getElementById('your-name');
const name = document.getElementById('name');

const showTime = function () {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  var time = h + ':' + m + ':' + s;
  clock.innerText = time;
  clock.textContent = time;

  setTimeout(showTime, 1000);
  return h;
};

const hideTimeGreet = function () {
  clock.className = 'hidden';
  greeting.className = 'hidden';
};

const hideInput = function () {
  name.className = 'hidden';
  yourName.className = 'hidden';
};

const checkDate = function (time) {
  const name = localStorage.getItem('name');
  if (time <= 14 && time >= 10) {
    return `Selamat Siang, ${name} :)`;
  } else if (time <= 17 && time >= 15) {
    return `Selamat Sore, ${name} :)`;
  } else if (time <= 9 && time >= 4) {
    return `Selamat Pagi, ${name} :)`;
  } else {
    return `Selamat Malam, ${name} :)`;
  }
};

const showTimeGreet = function () {
  clock.className = '';
  greeting.className = '';
  showTime();
  greeting.innerText = checkDate(showTime());
};

if (localStorage.getItem('name') === null) {
  hideTimeGreet();
} else {
  hideInput();
  showTimeGreet();
}

name.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    localStorage.setItem('name', name.value);
    window.location.reload();
  }
});
