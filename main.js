function product(x, y) {

  if (x === 0 || y === 0) {
      return 0;
  }
  return x + product(x, y - 1);
}



console.log(product(2, 3));



function reverseString(str) {
  if (str.length <= 1) {
      return str;
  } else {
      return str.slice(-1) + reverseString(str.slice(0, -1));
  }
}

console.log(reverseString("hello"));




function countDownClockSimulation(seconds) {
  if (seconds <= 0) {
    document.getElementById('countdown').innerHTML = 'Countdown expired!';
  } else {
    document.getElementById('countdown').innerHTML = `Time remaining: 24 hours:0 minutes: ${seconds} seconds`;

    setTimeout(function () {
      countDownClockSimulation(seconds - 1);
    }, 1000);
  }
}

countDownClockSimulation(60);