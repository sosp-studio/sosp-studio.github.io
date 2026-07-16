let f;
let l =[]
let ll=300; 

function preload(){
    f = loadFont("../fonts/ArthemysDisplayTRIAL-Light.otf");
    // for(let i=0;i<ll;i++){ l.push(noise(i*0.015)) }
}


function setup() {
    let canvas = createCanvas(windowWidth, 200);
    canvas.parent("canvasParent");
    frameRate(60);
    noiseSeed(1)
    randomSeed(8)
    blendMode(BLEND)
    fill(255,255);
}


function draw() {
    background(200);

    cliff(0,0);
    cliff(0,30);
    cliff(0,60);

    push();
    let xf = map(11,0,l.length-1,0,width);
    let xm = map(l.length/2,0,l.length-1,0,width);
    let x = map(l.length-11,0,l.length-1,0,width);

    let yf = map(l[11],0,1,0,200)-12;
    let ym = map(l[floor(l.length*0.5)],0,1,0,200)-12;
    let y = map(l[l.length-11],0,1,0,200)-12;

    fill(0);
    stroke(0);
    strokeWeight(1.5);
    ellipse(xf, yf+map(yf,0,200,-4,15), 15, map(yf,0,200,20,5));
    ellipse(xm, ym+map(ym,0,200,-19,59), 22, map(ym,0,200,27,12));
    ellipse(x, y+map(y,0,200,-30,90), 25, map(y,0,200,30,15));
    pop();
}


function cliff(lx,ly){
    push();
    fill(255,105);
    translate(lx,ly);
    strokeWeight(1.5);
    if(l.length>ll)l.shift();
    l.push(noise(frameCount*0.015))
    beginShape();
    for(let i=0;i<l.length;i++){
        let x = map(i,0,l.length-1,0,width);
        let y = map(l[i],0,1,0,200)
        if(i==l.length-1){
            vertex(x,y);
        }else{
            curveVertex(x,y);
        }
    }
    vertex(width+5,map(l[l.length-1],0,1,0,200)+10)
    vertex(width,height);
    vertex(0,height);
    endShape(CLOSE);
    pop();
}


function windowResized() {
  resizeCanvas(windowWidth, 200);
}
