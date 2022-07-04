const ftoc = function(far) {

  let celcius = 0
  celcius = (far - 32) * 5/9;
  if (celcius == 0){
    return celcius
    }
  else {
  celResult = parseFloat(celcius.toFixed(1));
  return celResult
  }
};

const ctof = function(cel) {
  
  let farenheit = 0
  farenheit = (cel * 9/5) +32;
  if(farenheit == 0){
    return farenheit
  }
  else {
    farResult = parseFloat(farenheit.toFixed(1))
    return farResult
  }

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
