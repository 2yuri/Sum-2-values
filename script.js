var inputEl1 = document.getElementById("1");
var inputEl2 = document.getElementById("2");
var buttonEl = document.getElementById("3");

function soma(){

  const value1 = inputEl1.value;
  const value2 = inputEl2.value;
  const c = parseInt(value1) + parseInt(value2);
  alert(c);

}

buttonEl.onclick = soma;