function soma(){

  const value1 = document.querySelector("input[name='input1']").value;
  const value2 = document.querySelector("input[name='input2']").value;
  const c = parseInt(value1) + parseInt(value2);
  
  alert("Total da soma: " + c);
}

document.querySelector("button").onclick = soma;