
export function updateCanvas() {
   console.log('inside update canvas');
}

export function pencilDraw() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
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

    // var clearButton = document.getElementById('clear');

    // clearButton.addEventListener('click', function() {
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    // });

    canvas.addEventListener('mouseup', (event) => {
        canvas.removeEventListener('mousemove', draw);
    });
}

export function erase() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    function draw(event) {
        // context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
        // context.stroke();
    }
   
    canvas.addEventListener('mousedown', event => {
        // let context = canvas.getContext('2d');
        // context.strokeStyle = 'blue';
        // context.lineWidth = 2;
        // context.beginPath();
        // context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
        // canvas.addEventListener('mousemove', draw);
    });
    canvas.addEventListener('mouseup', (event) =>{
        canvas.removeEventListener('mousemove', draw);
    });
 console.log('hello');
}
