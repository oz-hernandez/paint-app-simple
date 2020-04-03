
export function updateCanvas() {
   console.log('inside update canvas');
}

export function pencilDraw() {
    let context = document.getElementById('canvas').getContext('2d');
    function draw(event) {
        context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
        context.stroke();
    }
   
    canvas.addEventListener('mousedown', event => {
        let context = canvas.getContext('2d');
        context.strokeStyle = 'blue';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
        canvas.addEventListener('mousemove', draw);
    });
    canvas.addEventListener('mouseup', (event) =>{
        canvas.removeEventListener('mousemove', draw);
    });
}

export function erase() {

}