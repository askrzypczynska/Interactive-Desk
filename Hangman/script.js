const passwordHang = document.querySelector(".passwordHang")
const piniataImg = document.querySelector(".piniataHang")
const lettersHang = document.querySelector(".lettersHang")
const newGameBtn = document.querySelector(".newGameHang")

let countHang = 0
let passwordsArray = [
	"Rasberry",
	"Horseradish",
	"Hedgehog",
	"Platypus",
	"Komodo Dragon",
	"Switzerland",
	"Mesopotamia",
]

let chosenWord = "";

const randomizePassword = () =>{
	chosenWord = passwordsArray[Math.floor(Math.random() * passwordsArray.length)];
	chosenWord = chosenWord.toUpperCase();
}

const hangStart = () => {
	
	randomizePassword()
	passwordHang.innerHTML = ""

	for (let i=0; i < chosenWord.length; i++){
		if(chosenWord.charAt(i) !== " "){
			passwordHang.innerHTML += "_"
		}else{
			passwordHang.innerHTML += " "
		}
	}

	console.log(chosenWord);

}

hangStart()

const checkLetter = e => {
	if(chosenWord.includes(e.target.innerHTML)){
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

	}else{
		e.target.classList.add("letterUsed")
		console.log("false");
	}

}


newGameBtn.addEventListener("click", hangStart)
lettersHang.addEventListener("click", checkLetter)