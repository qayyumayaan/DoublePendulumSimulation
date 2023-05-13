// Double Pendulum Simulation

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const g = 9.81; // acceleration due to gravity

let theta1 = Math.PI / 2; // initial angle of the first pendulum
let theta2 = Math.PI / 2; // initial angle of the second pendulum
let omega1 = 0; // initial angular velocity of the first pendulum
let omega2 = 0; // initial angular velocity of the second pendulum
const length1 = 200; // length of the first pendulum
const length2 = 200; // length of the second pendulum
const mass1 = 20; // mass of the first pendulum
const mass2 = 20; // mass of the second pendulum

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetSimulation);

// Add the resetSimulation function
function resetSimulation() {
  // Reset the pendulum angles and angular velocities to their initial values
  theta1 = Math.PI / 2;
  theta2 = Math.PI / 2;
  omega1 = 0;
  omega2 = 0;
}

function drawPendulum(x, y, angle, length, mass) {
  const endX = x + length * Math.sin(angle);
  const endY = y + length * Math.cos(angle);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, endY);
  ctx.lineWidth = mass / 10;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(endX, endY, mass / 2, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function update() {
  const numerator1 =
    -g * (2 * mass1 + mass2) * Math.sin(theta1) -
    mass2 * g * Math.sin(theta1 - 2 * theta2) -
    2 * Math.sin(theta1 - theta2) * mass2 * (omega2 * omega2 * length2 + omega1 * omega1 * length1 * Math.cos(theta1 - theta2));
  const denominator1 = length1 * (2 * mass1 + mass2 - mass2 * Math.cos(2 * theta1 - 2 * theta2));
  const numerator2 = 2 * Math.sin(theta1 - theta2) * (omega1 * omega1 * length1 * (mass1 + mass2) + g * (mass1 + mass2) * Math.cos(theta1) + omega2 * omega2 * length2 * mass2 * Math.cos(theta1 - theta2));
  const denominator2 = length2 * (2 * mass1 + mass2 - mass2 * Math.cos(2 * theta1 - 2 * theta2));

  const alpha1 = numerator1 / denominator1;
  const alpha2 = numerator2 / denominator2;

  omega1 += alpha1;
  omega2 += alpha2;
  theta1 += omega1;
  theta2 += omega2;

  ctx.clearRect(0, 0, width, height);
  const pivotX = width / 2;
  const pivotY = height / 3;
  drawPendulum(pivotX, pivotY, theta1, length1, mass1);
  const pendulum2X = pivotX + length1 * Math.sin(theta1);
  const pendulum2Y = pivotY + length1 * Math.cos(theta1);
  drawPendulum(pendulum2X, pendulum2Y, theta2, length2, mass2);

  requestAnimationFrame(update);
}

  
  update();
  
