const colorArr = [
    '#962D3E',
    '#343642',
    '#979C9C',
    '#F2EBC7',
    '#348899',
    '#041D42',
];

const maxRAD = 40;
const growthRange = 60;

let mouse = {
    x : undefined,
    y : undefined
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArr[Math.floor(Math.random() * colorArr.length)];
    }

    draw() {
        // c.beginPath();
        // c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        // //c.strokeStyle = 'red';
        // c.fill();
        fill(this.color);
        circle(this.x, this.y, this.radius);
    };

    update() {
        this.draw();
        if(this.x + this.radius > CANVASW ||
            this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > CANVASH ||
            this.y - this.radius < 0) {
                this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        //interactivity
        if(mouse.x - this.x < growthRange 
             && mouse.x - this.x > -growthRange
             && mouse.y - this.y < growthRange 
             && mouse.y - this.y > -growthRange
             ) {
            if(this.radius < maxRAD) {
            this.radius = this.radius + 1;
            }
            
        } else if(this.radius > this.minRadius) {
            this.radius = this.radius - 1;
        }
    }  
}