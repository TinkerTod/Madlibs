/*
*	This checked over the 
*/
function checking() {
	var empty = 0;
	$('input[type=text]').each(function(){
		maxInput++;
		if (this.value == "") {empty++;} 
	})
	if (empty == 0){
		alert("All inputs filled");
		document.getElementById("inputArea").style.display="none";
		document.getElementById("answer").style.display='block';
	}
	else{alert(empty + ' empty input(s)')}
}

function appendData(){
	for (i=1, max = maxInput; i < max; i++){
		if(i < 10){
			document.getElementById('val0'+ i).innerHTML = document.getElementById("in0" + i).value;	
		}
		else{
			document.getElementById('val'+ i).innerHTML = document.getElementById("in" + i).value;
		}
	}
}

var startBtn = document.getElementById("startBtn");
startBtn.onclick = function(){
	checking();
	appendData();
}
