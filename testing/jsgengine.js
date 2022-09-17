//Canvas Link
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
//Get Screen Resolution and AR
let canvasHeight = document.getElementById('canvas').getAttribute('height');
let canvasWidth = document.getElementById('canvas').getAttribute('width');
let aspectRatio = canvasHeight/canvasWidth;
let FOV = 90;
FOV = FOV * 0.01745;
//temp
let zFar = 10;
let zNear = 1;
Circle(50, 50, 20);
//temp

//Cube
//3D Vertexes
let Vertex1 = new Vertex(400, 400, 80); //top left
let Vertex2 = new Vertex(600, 400, 80); //top right
let Vertex3 = new Vertex(600, 600, 80); //bottom right
let Vertex4 = new Vertex(400, 600, 80); //bottom left
let Vertex5 = new Vertex(400, 400, 90); //top left behind
let Vertex6 = new Vertex(600, 400, 90); //top right behind
let Vertex7 = new Vertex(600, 600, 90); //bottom right behind
let Vertex8 = new Vertex(400, 600, 90); //bottom left behind
//Projection
Vertex1 = new Projector(Vertex1.x, Vertex1.y, Vertex1.z);
Vertex2 = new Projector(Vertex2.x, Vertex2.y, Vertex2.z);
Vertex3 = new Projector(Vertex3.x, Vertex3.y, Vertex3.z);
Vertex4 = new Projector(Vertex4.x, Vertex4.y, Vertex4.z);
Vertex5 = new Projector(Vertex5.x, Vertex5.y, Vertex5.z);
Vertex6 = new Projector(Vertex6.x, Vertex6.y, Vertex6.z);
Vertex7 = new Projector(Vertex7.x, Vertex7.y, Vertex7.z);
Vertex8 = new Projector(Vertex8.x, Vertex8.y, Vertex8.z);
//Draw Circle at Vertex Position
Circle(Vertex1.x, Vertex1.y, 10);
Circle(Vertex2.x, Vertex2.y, 10);
Circle(Vertex3.x, Vertex3.y, 10);
Circle(Vertex4.x, Vertex4.y, 10);
Circle(Vertex5.x, Vertex5.y, 10);
Circle(Vertex6.x, Vertex6.y, 10);
Circle(Vertex7.x, Vertex7.y, 10);
Circle(Vertex8.x, Vertex8.y, 10);
//Face Draw
Triangle(Vertex1.x, Vertex1.y, Vertex2.x, Vertex2.y, Vertex3.x, Vertex3.y);
Triangle(Vertex1.x, Vertex1.y, Vertex3.x, Vertex3.y, Vertex4.x, Vertex4.y);
Triangle(Vertex5.x, Vertex5.y, Vertex2.x, Vertex2.y, Vertex3.x, Vertex3.y);
Triangle(Vertex6.x, Vertex6.y, Vertex2.x, Vertex2.y, Vertex3.x, Vertex3.y);
Triangle(Vertex2.x, Vertex2.y, Vertex5.x, Vertex5.y, Vertex6.x, Vertex6.y);
Triangle(Vertex1.x, Vertex1.y, Vertex4.x, Vertex4.y, Vertex5.x, Vertex5.y);
Triangle(Vertex1.x, Vertex1.y, Vertex2.x, Vertex2.y, Vertex3.x, Vertex3.y);
Triangle(Vertex1.x, Vertex1.y, Vertex2.x, Vertex2.y, Vertex3.x, Vertex3.y);
//Cube

function Projector(x, y, z) {
    let pmFOV = 1 / (Math.tan(FOV / 2));
    let zNorm = zFar / (zFar - zNear);
    this.x = (((aspectRatio * pmFOV) * x) / z)*100;
    this.y = ((pmFOV * y)/z)*100;
    this.z = z * (zNorm - (zNear * zNorm));
}
/*
function Projektor(x, y, z) {
    let pmFOV = 1/(Math.tan(FOV/2));
    let zNorm = zFar/(zFar - zNear);
    let projArray = [x, y, z, 1]
    let projMatrix = Math.matrix([
        [(aspectRatio*pmFOV), 0, 0, 0],
        [0, pmFOV, 0, 0],
        [0, 0, zNorm, 1],
        [0, 0, -(zNear*zNorm), 0]
    ]);
    projArray =  Math.multiply(projArray,projMatrix);
    document.getElementById('log').innerHTML = Math.subset(projArray, Math.index(0,1));    
}
*/

function Vertex(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;    
}

function Line(x1, y1, x2, y2, w) {
    context.beginPath();
    context.strokeStyle='green';
    context.lineWidth=w;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

function Triangle(x1, y1, x2, y2, x3, y3) {
    context.beginPath();
    context.lineWidth=5;
    context.strokeStyle='red';
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.lineTo(x1, y1);
    context.stroke();
    context.closePath();
}

function Rectangle(x, y, width, height, angle) {
    angle = -angle * 0.01745;
    context.beginPath();
    context.lineWidth=5;
    context.fillStyle='red';
    context.strokeStyle='blue';
    context.moveTo(x, y);
    x = x+(width * Math.cos(angle));
    y = y+(width * Math.sin(angle));
    context.lineTo(x, y);
    x = x+(height * Math.cos(angle - 1.5705));
    y = y+(height * Math.sin(angle - 1.5705));
    context.lineTo(x, y);
    x += (width * Math.cos(angle - 3.141));
    y += (width * Math.sin(angle - 3.141));
    context.lineTo(x, y);
    x += (height * Math.cos(angle - 4.7115));
    y += ((height+2.6) * Math.sin(angle - 4.7115));
    context.lineTo(x, y);
    context.fill();
    context.stroke();
    context.closePath();
}

function Circle(x ,y, rad) {
    context.beginPath();
    context.lineWidth=5;
    context.fillStyle='red';
    context.arc(x, y, rad, 0, 6.28318531);
    context.fill();
    context.closePath();
}

function Draw() {
    context.fillStyle='red';  
    context.fill();
    context.stroke();
}