//Canvas Linking Function
let canvasId;
let ctx;
export function BeginHandler(elementId) {
    canvasId = elementId;
    ctx = document.getElementById(canvasId).getContext('2d');
}

//Element Data Pull Functions
export function PullScreenData() {
    let elementData = document.getElementById(canvasId);
    this.elementHeight = elementData.getAttribute('height');
    this.elementWidth = elementData.getAttribute('width');
    this.aspectRatio = this.elementHeight / this.elementWidth;
    /*let elementClass = elementData.getAttribute('class');
    elementClass = document.querySelector(elementClass);
    this.elementHeightCss = window.getComputedStyle(elementClass).getPropertyValue('height');
    this.elementWidthCss = window.getComputedStyle(elementClass).getProperyuValue('width');
    this.aspectRatioCss = this.elementHeightCss / this.elementWidthCss;*/
}

//Drawing Functions
export function Line(x1, y1, x2, y2, lineWidth, strokeColor) {
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

export function Triangle(x1, y1, x2, y2, x3, y3, lineWidth, strokeColor, fill, fillColor) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    if (fill == true){
        ctx.fillStyle=fillColor;
        ctx.fill();
    }
    ctx.closePath();
}

export function Rectangle(x, y, width, height, angle, lineWidth, strokeColor, fill, fillColor) {
    angle = -angle * 0.01745;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.moveTo(x, y);
    x = x+(width * Math.cos(angle));
    y = y+(width * Math.sin(angle));
    ctx.lineTo(x, y);
    x = x+(height * Math.cos(angle - 1.5705));
    y = y+(height * Math.sin(angle - 1.5705));
    ctx.lineTo(x, y);
    x += (width * Math.cos(angle - 3.141));
    y += (width * Math.sin(angle - 3.141));
    ctx.lineTo(x, y);
    x += (height * Math.cos(angle - 4.7115));
    y += ((height+2.6) * Math.sin(angle - 4.7115));
    ctx.lineTo(x, y);
    if (fill == true) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    ctx.stroke();
    ctx.closePath();
}

export function Circle(x ,y, radius, lineWidth, strokeColor, fill, fillColor) {
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

export function Text(x, y, content, maxWidth, lineWidth, font, strokeColor, fill, fillColor) {
    ctx.beginPath();
    ctx.font = font;
    ctx.lineWidth = ctx.lineWidth=lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.strokeText(content, x, y, maxWidth);
    if (fill == true) {
        ctx.fillStyle = fillColor;
        ctx.fillText(content, x, y, maxWidth);        
    }
    ctx.closePath();
}

export function ClearScreen() {
    let tmpElemData = document.getElementById(canvasId);
    ctx.clearRect(0, 0, tmpElemData.getAttribute('width'), tmpElemData.getAttribute('height'));
}
export function Render() {
    
}