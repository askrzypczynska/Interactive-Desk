const colorBtns = document.querySelectorAll(".color")
const clearPaint = document.querySelector("#clearPaint")

function setup() {
	let myCanvas = createCanvas(400, 400);
	myCanvas.parent('drawingCanvas');
	fill(0);
	strokeWeight(0);
}

const changeColor = e => {
	fill((e.target.closest("button").value))
}

function draw() {
	if(mouseIsPressed) {
		ellipse(mouseX, mouseY, 10, 10);
	}
}

const clearCanvas = () => {
	clear();
}

colorBtns.forEach(button => button.addEventListener("click", changeColor))
clearPaint.addEventListener("click", clearCanvas)
