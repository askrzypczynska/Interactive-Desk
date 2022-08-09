const numbers = document.querySelectorAll('.numbers');
const action = document.querySelectorAll('.action');
const equals = document.querySelector('.equals');
const mainResult = document.querySelector('.mainResult');
const currentResult = document.querySelector('.currentResult');
const clear = document.querySelector('.clear')
const remove = document.querySelector('.remove')

var actualNumber = "";
var actualAction = "";
var nextNumber = "";

function numbersHandler(numbers){
	numbers.addEventListener("click", () => {

		if(mainResult.innerHTML === "Error" || mainResult.innerHTML !== "&nbsp;"){
			clearAll();
		}

		if(actualAction){
			if (numbers.innerHTML === "·"){
				if(nextNumber == ""){
					nextNumber = "0."
				}else{
					nextNumber = nextNumber + ".";
				}
			} else{
				nextNumber = nextNumber + numbers.innerHTML;
			}			
		} else {
			if (numbers.innerHTML === "·"){
				if(actualNumber == ""){
					actualNumber = "0."
				}else {
					actualNumber = actualNumber + ".";
				}
			} else {
				actualNumber = actualNumber + numbers.innerHTML;
			} 
		}

		resultUpdate();		
	});
}

function actionInit(action){
	action.addEventListener("click", () => {

		if(actualNumber !== ""){

			actualAction = action.innerHTML;

			if(action.innerHTML === `%<br><p class="modulo">(Mod)</p>`){
				actualAction = "%";
			}

			if(mainResult.innerHTML !== "&nbsp;" && mainResult.innerHTML !== "Error"){
				actualNumber = mainResult.innerHTML;
				nextNumber = "";
				mainResult.innerHTML = "&nbsp;"
			} else if(mainResult.innerHTML === "Error"){
				mainResult.innerHTML = "&nbsp;";
			}

			resultUpdate()
		} 
		
	});
}


function equalsHandler(equals){
	var result = 0;
	if(actualNumber !== "" && actualAction !== "" && nextNumber !== ""){

		switch(actualAction){

			case '+':
				result = parseFloat(actualNumber) + parseFloat(nextNumber);
				break;

			case '-':
				result = parseFloat(actualNumber) - parseFloat(nextNumber);
				break;

			case '×':
				result = parseFloat(actualNumber) * parseFloat(nextNumber);
				break;

			case '÷':
				result = parseFloat(actualNumber) / parseFloat(nextNumber);
				break;

			case '%':
				result = parseFloat(actualNumber) % parseFloat(nextNumber);
				break;		
		}
	
		mainResult.innerHTML = (parseInt(result*1000)/1000).toString();

		if(actualAction == "÷" && nextNumber == "0"){
			clearAll();
			mainResult.innerHTML = "Error";

		}
		actualNumber = "";
		actualAction = "";
		nextNumber = "";
		
		currentResult.innerHTML = "&nbsp;";
	}

}

function resultUpdate(){

	currentResult.innerHTML = actualNumber + actualAction + nextNumber;

}

const clearAll = () => {
	actualNumber = "";
	actualAction = "";
	nextNumber = "";
	
	currentResult.innerHTML = "&nbsp;";
	mainResult.innerHTML = "&nbsp;";
}

const deleteLast = () => {
	if(nextNumber !== ""){;
		nextNumber = nextNumber.slice(0, nextNumber.length-1)
	}else if(actualAction !== ""){
		actualAction = "";
	}else if(actualNumber !== ""){
		actualNumber = actualNumber.slice(0, actualNumber.length-1)
	}

	resultUpdate();
}


equals.addEventListener("click", equalsHandler);
numbers.forEach(numbersHandler);
action.forEach(actionInit);
clear.addEventListener("click", clearAll);
remove.addEventListener("click", deleteLast);