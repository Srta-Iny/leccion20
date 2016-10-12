// tu codigo va aca
function callbackPromedio (a, b, c, callback){
  var suma= (a+b+c)/3;
	return callback(suma);
}

// parte 2

var segundo=1;
function segundero(){   
  document.getElementById("titulo").innerHTML = segundo;
  segundo++;
}
setInterval(segundero,1000);