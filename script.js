function sq(){
	var number = document.getElementById("number").value;
	number = Math.pow(number,2)
	document.getElementById("Result").innerHTML = number;
}

function cu(){
	var number = document.getElementById("number").value;
	number = Math.pow(number,3)
	document.getElementById("Result").innerHTML = number;
	
}