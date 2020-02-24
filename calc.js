


// create a Function
function calculateTip () {

    // store the data of inputs
  
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numOfPeople = document.getElementById("totalPeople").value;
  
    // Quick valdiation
    if(billAmount === "" || serviceQuality == 0) {
      window.alert("Please enter a value");
      return;
  
    }
    
  // to check if the input is enpty or less than or equal to one
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
  document.getElementById("each").style.display = "none"
  
  
  } else {
    document.getElementById("each").style.display = "block"
  }
  
  
  let total = (billAmount * serviceQuality) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  
  
  //Display the Tip!!
  
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  
  }
  
  
  
  
  // Hide the Tip Amount on load 
  document.getElementById("totalTip").style.display = "none"
  document.getElementById("each").style.display = "none"
  
  // clicking the bottom calls our function
  document.getElementById("calculate").onclick = function () {
    calculateTip();
  }