var c = document.getElementById("draw_pannel");
var ctx = c.getContext("2d");

let brush_size = 5;
let brush_color = 'black';
let drag = false;

const decrease_brush_size = () => {
    brush_size--
    flash_brush_size()
}
const increase_brush_size = () => {
    brush_size++
    flash_brush_size()
}
const change_brush_color = (color) => {
    brush_color = color
}
const clear_board = () => ctx.clearRect(0,0, c.width, c.height)

c.addEventListener('mousedown', () => drag = true);
c.addEventListener('mousemove', (e) => { if(drag) drawCircle(e.offsetX, e.offsetY, brush_size); });
document.addEventListener('mouseup', () => drag = false);

function flash_brush_size() {
    drawCircle(c.width/2, c.height/2, brush_size)
    setTimeout(()=>{
        ctx.clearRect(0,0, c.width, c.height) 
    }, 500)
}

function drawCircle (x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = brush_color
    ctx.fill();
} 
