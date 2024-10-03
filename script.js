const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

function drawTree(x, y, size, angle, iteration) {
	if (iteration === 0) {
		return;
	}

	const nextSize = (size * Math.sqrt(2)) / 2;
	const x1 = x + size * Math.cos(angle);
	const y1 = y - size * Math.sin(angle);

	const red = 0;
	const blue = Math.floor(255 - 50 * iteration);
	const green = Math.floor(255 - 50 * iteration);
	ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;

  ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x1, y1);
	ctx.stroke();

	const angle1 = angle - Math.PI / 4;
	const angle2 = angle + Math.PI / 4;

	drawTree(x1, y1, nextSize, angle1, iteration - 1);
	drawTree(x1, y1, nextSize, angle2, iteration - 1);
}

function FractalishTree() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	const startX = canvas.width / 2;
	const startY = canvas.height;
	const initialSize = 80;
	const initialAngle = Math.PI / 2;
	//let iteration = 1;
	for (let i = 0; i < 10; i++) {
		setTimeout(function () {
			drawTree(startX, startY, initialSize, initialAngle, 0 + i);
		}, i * 450);
		//iteration++;
	}
}

FractalishTree();
setInterval(FractalishTree, 8000);


        const canvasg = document.getElementById('myCanvas');
        const ctxg = canvasg.getContext('2d');

        function resizeCanvas() {
            canvasg.width = canvasg.parentElement.clientWidth;
            canvasg.height = canvasg.parentElement.clientHeight;
            draw1(); // Redraw the canvas after resizing
          draw2();
        }



        function draw1() {
            // Clear the canvas
            ctxg.clearRect(0, 0, canvasg.width, canvasg.height);
            
            ctxg.fillStyle = 'rgba(78, 205, 196, 0.6)';
            ctxg.fillRect(0, 0, canvasg.width, canvasg.height);

            // Cubic curves example
            ctxg.beginPath();
            ctxg.moveTo(canvasg.width,  canvasg.height);
            ctxg.bezierCurveTo(canvasg.width, (canvasg.height/4),2*( canvasg.width/3), 2*(canvasg.height/3), canvasg.width /3, canvasg.height );

            ctxg.fillStyle = 'rgba(41, 47, 54, 0.6)';
            ctxg.fill();
                      ctxg.bezierCurveTo(canvasg.width /10, canvasg.height, canvasg.width/2, canvasg.height/10, canvasg.width , canvasg.height/3);
        

                       ctxg.fillStyle = 'rgba(41, 47, 54, 0.4)';
            ctxg.fill();
     
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Initial resize