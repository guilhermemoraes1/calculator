function calcularValores() {
  let value1 = Number(document.getElementById("txtValor1").value);
  let value2 = Number(document.getElementById("txtValor2").value);

  let result;
  switch(document.getElementById("cbxOperacao").value) {
    case "+": result = value1 + value2; break;
    case "-": result = value1 - value2; break; 
    case "*": result = value1 * value2; break;
    case "/": result = value1 / value2; break; 
  }

  document.getElementById("txtResultado").innerHTML = result.toFixed(2);
}