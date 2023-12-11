const ans = () => {
  var b = parseInt(document.getElementById("cf").value);

  if (isNaN(b) || b == 0) {
    alert("Please Enter Valid value");
  }

  var a = 1;
  for (let i = b; i >= 1; i--) {
    a = a * i;
  }

  document.getElementById("get").innerHTML = `The Factorial of ${b} is : ${a}`;
};
