


function getBmiValue(){
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  height = height * 12;
  height = height * 0.025;

  var newBmiValue = weight / (Math.pow(height,2));

  newBmiValue = Math.round(newBmiValue);
  document.getElementById('value').value = newBmiValue;
}
