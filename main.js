function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)
  let thirdNum = Number(document.getElementById('thirdNum').innerHTML)

  let total = firstNum + secondNum + thirdNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum} + ${thirdNum}, equals to ${total}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);