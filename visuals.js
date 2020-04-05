let imgWidth = 100;
let imgHeight = 100;
let imgDiff = 100;
let CANVASW = window.innerWidth;
let CANVASH = window.innerHeight;
const CIRCLENO = 1000;
let VELOCITY = 5;


let circArr = [];


function init() {
    circArr = [];
    for (let i = 0; i < CIRCLENO; i++) {
        let CIRCLERAD = Math.random() * 5 + 1;
        let x = Math.random() * (CANVASW - CIRCLERAD*2) + CIRCLERAD;
        let y = Math.random() * (CANVASH - CIRCLERAD*2) + CIRCLERAD;
        let dx = (Math.random() - 0.5) * VELOCITY;
        let dy = (Math.random() - 0.5) * VELOCITY;
        circArr.push(new Circle(x, y, dx, dy, CIRCLERAD));
    }
}


function setup() {
    // put setup code here
    init();
    createCanvas(CANVASW, CANVASH);
    window.addEventListener('resize', ()=>{
    CANVASH = window.innerWidth;
    CANVASH = window.innerHeight;
    init();
    });
}

function draw() {

    clear();
    circArr.forEach((cir) => {
        cir.update();
    });



    //clear();
}