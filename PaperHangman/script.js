// -----------------------------PieceOfPaper-------------------------------- //
const colorBtns = document.querySelectorAll(".color")
const clearPaint = document.querySelector("#clearPaint")

function setup() {
	let myCanvas = createCanvas(400, 400);
	myCanvas.parent('drawingCanvas');
	fill(0);
	strokeWeight(0);
	noLoop()
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
	clear()
}

colorBtns.forEach(button => button.addEventListener("click", changeColor))
clearPaint.addEventListener("click", clearCanvas)

// -----------------------------Hangman------------------------------------- //

const passwordHang = document.querySelector(".passwordHang")
const piniataStatus = document.querySelector("#piniataStatus")
const lettersHang = document.querySelector(".lettersHang")
const newGameBtn = document.querySelector(".newGameHang")
const piniataImg = document.querySelector(".piniataImg")
const gameResoult = document.querySelector(".gameResoult")
const hangBtns = document.querySelectorAll('button')

let piniataImg2 = document.createElement("img")
let animationOn = false;

let countHang = 0
let countBadHang = 0
let passwordsArray = [
	"Rasberry",
	"Horseradish",
	"Hedgehog",
	"Platypus",
	"Komodo Dragon",
	"Switzerland",
	"Unicorn",
]

let chosenWord = "";

const randomizePassword = () =>{
	chosenWord = passwordsArray[Math.floor(Math.random() * passwordsArray.length)];
	chosenWord = chosenWord.toUpperCase();
}

const piniataExplosion = () =>{
	piniataStatus.src = "img/hangman11.png"
	piniataStatus.classList.add("confetti")
	piniataImg.removeChild(piniataImg2)
	animationOn = false;
}

const checkLetter = e => {
	if(e.target.classList[0] === "letter"){
		if(chosenWord.includes(e.target.innerHTML)){
			countHang ++
			e.target.closest("button").disabled = true
			for(let i=0; i<chosenWord.length; i++){
				if(chosenWord[i] === e.target.innerHTML){
					let tmpStr = ""
					for(let j = 0; j<passwordHang.innerHTML.length; j++){
						if(i==j){
							tmpStr += e.target.innerHTML
						}else {
							tmpStr += passwordHang.innerHTML[j]
						}
					}
					passwordHang.innerHTML = tmpStr
				}
			}
			checkGameResoult();
	
		}else{
			countBadHang ++
			e.target.closest("button").disabled = true
			if(countBadHang <= 8){
				piniataStatus.src = `img/hangman${countBadHang}.png`}
			if(countBadHang === 9){
				piniataStatus.src = `img/hangman9.png`
				piniataImg2.src = "img/hangman10.png"
				piniataImg2.classList.add("piniataAnimation")
				piniataImg.appendChild(piniataImg2)
				animationOn = true;
				setTimeout(piniataExplosion, 2500);
				
			}
			checkGameResoult();
		}
	}
}

const hangStart = () => {
	if(!animationOn){
		randomizePassword()
		countHang = 0
		countBadHang = 0
		passwordHang.innerHTML = "";
		gameResoult.innerHTML = "";
		piniataStatus.src = `img/hangman0.png`;
	
		document.getElementsByClassName("letter").disabled = false;
	
		for (let i=0; i < chosenWord.length; i++){
			if(chosenWord.charAt(i) !== " "){
				passwordHang.innerHTML += "_"
			}else{
				passwordHang.innerHTML += " "
			}
		}
	
		hangBtns.forEach((btn) => {
			btn.disabled = false
		})
	
		lettersHang.addEventListener("click", checkLetter)
	}
}


hangStart()

const checkGameResoult = () => {
	if(countBadHang === 9){
		lettersHang.removeEventListener('click', checkLetter);
		gameResoult.innerHTML = 'YOU LOST'
	}
	if(!passwordHang.innerHTML.includes("_")){
		lettersHang.removeEventListener('click', checkLetter);
		gameResoult.innerHTML = 'YOU WON'
	}
}




newGameBtn.addEventListener("click", hangStart)
lettersHang.addEventListener("click", checkLetter)


// -----------------------------ChangingPage------------------------------------- //

const hangman = document.querySelector(".hangman")
const PieceofPaper = document.querySelector(".PieceofPaper")

const changePage = () => {
	hangman.classList.toggle("paperOnTop")
	PieceofPaper.removeEventListener("click", changePage)
	hangman.addEventListener("click", changePage2)
	loop()
	lettersHang.removeEventListener('click', checkLetter);
}

const changePage2 = () =>{
	hangman.removeEventListener("click", changePage2)
	hangman.classList.toggle("paperOnTop")
	PieceofPaper.addEventListener("click", changePage)
	noLoop()
	lettersHang.addEventListener('click', checkLetter);
}

PieceofPaper.addEventListener("click", changePage)


