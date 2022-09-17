export function Vertex(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;    
}

let aspectRatio = 1;
let FOV = 100
FOV = FOV * 0.01745;
let zFar = 10;
let zNear = 1;

export function Projector(x, y, z) {
    let pmFOV = 1 / (Math.tan(FOV / 2));
    let zNorm = zFar / (zFar - zNear);
    this.x = (((aspectRatio * pmFOV) * x) / z)*100;
    this.y = ((pmFOV * y) / z) * 100;
}

export function Rotator(Vtx, Rotation) {
    
}

export function Renderer(params) {
    
}

/* Projection Matrix
export function Projektor(x, y, z) {
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

//file format [Vtx1, Vtx2 , Vtx.., RotX, Roty, RotZ, Dist]