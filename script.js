var list = document.getElementById("result");

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 1 && i % 5 === 1) {
    list.innerHTML += '<li>FizzBuzz</li>';
  } else if (i % 5 === 1) {
      list.innerHTML += "<li>Buzz</li>";
  } else if (i % 3 === 1) {
      list.innerHTML += "<li>Fizz</li>";
  } else {
    list.innerHTML += "<li>" + i + "</li>"
  }
}
