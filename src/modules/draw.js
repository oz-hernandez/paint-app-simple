
export function updateCanvas() {
   console.log('inside update canvas');
}


export function drawContext(color) {
    this.color = color;
}

let methodsToRemove = new Map();

export function draw(event) {
    const canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();

    switch(event.target.id) {
        case "pencil":
            function draw(event) {
                context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
                context.stroke();
            }
            function drawTouch(event) {
                context.lineTo(event.touches[0].clientX - rect.left, event.touches[0].clientY - rect.top);
                context.stroke();
            }

            function setup(event) {
                let context = canvas.getContext('2d');
                context.strokeStyle = 'blue';
                context.lineWidth = 2;
                context.beginPath();
                context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
                canvas.addEventListener('mousemove', draw);
            }
            function setupTouch(event) {
                let context = canvas.getContext('2d');
                context.strokeStyle = 'blue';
                context.lineWidth = 2;
                context.beginPath();
                context.moveTo(event.touches[0].clientX - rect.left, event.touches[0].clientY - rect.top);
                canvas.addEventListener('touchmove', (event) => {
                    drawTouch(event);
                });
            }
            canvas.addEventListener('mousedown', setup);

            canvas.addEventListener('mouseup', event => {
                canvas.removeEventListener('mousemove', draw);
            });

            canvas.addEventListener('touchstart', (event) => {
                event.preventDefault();
                setupTouch(event);
                canvas.addEventListener('touchend', (event) => {
                    canvas.removeEventListener('touchmove', drawTouch);
                });
            });
            
            if(!methodsToRemove.has("pencil")) {
                methodsToRemove.set("pencil", setup);
                methodsToRemove.set("pencil", setupTouch);
            }
            break;
        case "eraser":
            canvas.removeEventListener('mousedown', methodsToRemove.get('pencil'));
            canvas.removeEventListener('touchstart', methodsToRemove.get('pencil'));
            canvas.addEventListener('mousedown', event => {
                console.log("mouse down");
                canvas.addEventListener('mousemove', event => {
                    console.log("hello");
                });
            });
            canvas.addEventListener('mouseup', (event) =>{
                // canvas.removeEventListener('mousemove', draw);
            });
            break;
        }
    }


  // var clearButton = document.getElementById('clear');

    // clearButton.addEventListener('click', function() {
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    // });
