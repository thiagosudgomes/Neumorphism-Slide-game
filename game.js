var size = document.getElementById("numbers").childElementCount;
var numbers = document.getElementById("numbers").children;
var row = 4;
var column = 4;

init();


function init(){
	
	document.getElementById("shufflebtn").addEventListener("click", function(e) {
	shuffleSolvable();
	});
	
	shuffleSolvable();
	for(num of numbers){ //adiciona evento para cada numero no div numbers
		num.addEventListener("click", function(e) {
			move(e);
			if(isSolved())
				//shuffleSolvable();
				shuffle(numbers);
		});
	}
}

function move(e){
	var index = Array.prototype.indexOf.call(numbers, e.target);
	
	if(index + row < size && numbers.item(index + row).textContent == "") {
		numbers.item(index + row).textContent = e.target.textContent;
		e.target.textContent = "";
	}
	else if(index + 1 < size && numbers.item(index + 1).textContent == "" && (index + 1) % row > 0) {
		numbers.item(index + 1).textContent = e.target.textContent;
		e.target.textContent = "";
	}
	else if(index - row >= 0 && numbers.item(index - row).textContent == "") {
		numbers.item(index - row).textContent = e.target.textContent;
		e.target.textContent = "";
	}
	else if(index - 1 >= 0 && numbers.item(index - 1).textContent == "" && (index) % row > 0) {
		numbers.item(index - 1).textContent = e.target.textContent;
		e.target.textContent = "";
	}
}

function shuffle(arr){
    var temp, j;
    for (var i = 0; i < arr.length - 1; i++) {
        j = Math.floor(Math.random() * (arr.length - 1) + 1);
        temp = arr[j].textContent;
        arr[j].textContent = arr[i].textContent;
        arr[i].textContent = temp;
    }
}

function isSolved() {
	var count = 0;
	for(var i = 0; i < numbers.length - 1; i++){
		if(numbers[i].textContent == i + 1)
			++count;
	}
	if(count == numbers.length - 1){
		alert("You solved it");
		return true
	}
}

function invertions(arrNum){
	var invertions = 0;
	var temp = [];
	for(var t = 0; t < arrNum.length; t++){
		temp[t] = parseInt(arrNum[t].textContent);
	}
	for(var i = 0; i < temp.length; i++){
		for(var j = i; j < temp.length; j++){
			if(temp[i] > temp[j]){
				invertions++;
			}
		}
	}
	return invertions;
}

function shuffleSolvable(){
	shuffle(numbers);
	var solvable = false;
	//console.log(numbers.item);
	while(solvable == false){
		if(invertions(numbers) % 2 == 0 ) {
			//if(row % 2 > 0)
				solvable = true;
		}
		//else if (row % 2 == 0 && (Array.prototype.indexOf.call(numbers, "blank"))
		else{
			shuffle(numbers);
		}
	}
}