import { BeginHandler, Circle, ClearScreen, Line, PullScreenData, Text, Rectangle } from "./canvashandler.js";
import { Projector, Vertex } from './graphicmath.js';

BeginHandler('canvas');
let V1 = new Vertex(400, 400, 70);
let V2 = new Vertex(200, 200, 70);
let V3 = new Vertex(400, 200, 70);
let V4 = new Vertex(200, 400, 70);
let V5 = new Vertex(400, 400, 80);
let V6 = new Vertex(200, 200, 80);
let V7 = new Vertex(400, 200, 80);
let V8 = new Vertex(200, 400, 80);

V1 = new Projector(V1.x, V1.y, V1.z);
V2 = new Projector(V2.x, V2.y, V2.z);
V3 = new Projector(V3.x, V3.y, V3.z);
V4 = new Projector(V4.x, V4.y, V4.z);
V5 = new Projector(V5.x, V5.y, V5.z);
V6 = new Projector(V6.x, V6.y, V6.z);
V7 = new Projector(V7.x, V7.y, V8.z);
V8 = new Projector(V8.x, V8.y, V8.z);

Circle(V1.x, V1.y, 5, 2, 'red', false);
Circle(V2.x, V2.y, 5, 2, 'red', false);
Circle(V3.x, V3.y, 5, 2, 'red', false);
Circle(V4.x, V4.y, 5, 2, 'red', false);
Circle(V5.x, V5.y, 5, 2, 'red', false);
Circle(V6.x, V6.y, 5, 2, 'red', false);
Circle(V7.x, V7.y, 5, 2, 'red', false);
Circle(V8.x, V8.y, 5, 2, 'red', false);

Line(V1.x, V1.y, V3.x, V3.y);
Line(V1.x, V1.y, V4.x, V4.y);
Line(V2.x, V2.y, V3.x, V3.y);
Line(V2.x, V2.y, V4.x, V4.y);
Line(V1.x, V1.y, V5.x, V5.y);
Line(V3.x, V3.y, V7.x, V7.y);
Line(V4.x, V4.y, V8.x, V8.y);
Line(V2.x, V2.y, V6.x, V6.y);
Line(V5.x, V5.y, V7.x, V7.y);
Line(V5.x, V5.y, V8.x, V8.y);
Line(V8.x, V8.y, V6.x, V6.y);
Line(V6.x, V6.y, V5.x, V6.y);

