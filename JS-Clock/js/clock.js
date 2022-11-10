function askfullName()
{
  var fullName = prompt("Lutfen Adinizi Giriniz: ");
  document.getElementById("myName").innerText = fullName;
}

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  const dateInfo = new Date();
  let day = weekday[dateInfo.getDay()];

  var time = h + ":" + m + ":" + s + " " + day;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;

  setTimeout(showTime, 1000);
}

askfullName();
showTime();