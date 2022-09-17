//Canvas Link
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
//Get Screen Resolution
let canvasHeight = document.getElementById('canvas').getAttribute('height');
let canvasWidth = document.getElementById('canvas').getAttribute('width');


context.beginPath();
context.lineWidth=2;
context.arc(500, 500, 300, 0, 2 * Math.PI);
context.strokeStyle='red';
context.moveTo(500,200);
context.arcTo(500, 800, 500, 800, 45);
context.stroke();
context.closePath();