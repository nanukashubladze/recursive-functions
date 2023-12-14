// function product(x, y) {

//   if (x === 0 || y === 0) {
//       return 0;
//   }
//   return x + product(x, y - 1);
// }



// console.log(product(2, 3));



// function reverseString(str) {
//   if (str.length <= 1) {
//       return str;
//   } else {
//       return str.slice(-1) + reverseString(str.slice(0, -1));
//   }
// }

// console.log(reverseString("hello"));




function countDownClockSimulation(seconds) {
  if (seconds <= 0) {
    document.getElementById('countdown').innerHTML = 'Countdown expired!';
  } else {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    document.getElementById('countdown').innerHTML = `Time remaining: ${hours} hours: ${minutes} minutes: ${remainingSeconds} seconds`;

    setTimeout(function () {
      countDownClockSimulation(seconds - 1);
    }, 1000);
  }
}

countDownClockSimulation(3665);

function convertSecondsToHoursMinutesAndSeconds(seconds) {
  if (seconds < 0) {
    console.log("It's a negative number");
    return;
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  console.log(`${hours} hours, ${minutes} minutes, and ${remainingSeconds} seconds.`);
}

convertSecondsToHoursMinutesAndSeconds(3665);