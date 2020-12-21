const ftoc = function(deg) {
  let celsius = (deg - 32) * 5/9;
  let rounded = Math.round(celsius * 10) / 10;

  return rounded;
}

const ctof = function(deg) {
  let fahrenheit = deg * 9/5 + 32;
  let rounded = Math.round(fahrenheit * 10) / 10;

  return rounded;
}

module.exports = {
  ftoc,
  ctof
}
