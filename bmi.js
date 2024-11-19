document.querySelector(".submit").addEventListener("click", ()=> {
   
   let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid inputs");
  }
  
  const bmiResult = weight / (height * height);
  const category = bmiResult < 18.5 ? "You are underweight" : bmiResult < 24.9 ? "You have a healthy weight" : bmiResult > 25.0 && bmiResult <= 29.9 ? "You are overweight" : bmiResult > 29.9 ? "You are obese": "Please enter required values";

  localStorage.setItem("bmiResult", bmiResult)
  localStorage.setItem("category", category);

  window.location.href = "result.html";

})
