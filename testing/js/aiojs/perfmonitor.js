let elementId = 'perfmonitor';
const canvas = document.getElementById(elementId);
const ctx = canvas.getContext('2d');
//Code
let coords0 = new RelativePos(25, 20);
let coords1 = new RelativePos(50, 30);
ctx.font= '20px Arial, Helvetica, sans-serif';
ctx.fillStyle='red';
ctx.fillText('FPS Monitor', coords0.x, coords0.y);

//Relative Coordinates Convertion
function RelativePos(x, y) {
    this.x = (document.getElementById(elementId).getAttribute('width')/100)*x;
    this.y = (document.getElementById(elementId).getAttribute('height')/100)*y;
}
//Element Data Pull Functions
function PullResolution(elementId) {
    this.elementHeight = document.getElementById(elementId).getAttribute('height');
    this.elementWidth = document.getElementById(elementId).getAttribute('width');
}
//Drawing Functions
function Line(x1, y1, x2, y2, lineWidth, strokeColor) {
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function Rectangle(x, y, width, height, lineWidth, strokeColor, fill, fillColor) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y);
    if (fill == true) {
        ctx.fillStyle=fillColor;
        ctx.fill();
    }
    ctx.stroke();
    ctx.closePath();
}

function Circle(x ,y, radius, lineWidth, strokeColor, fill, fillColor) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle=strokeColor;
    ctx.arc(x, y, radius, 0, 6.28318531);
    if (fill == true) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    ctx.stroke();
    ctx.closePath();
}