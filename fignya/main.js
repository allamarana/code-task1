	function triangleSolve (a, b, c) {
		if (a==b && b==c && c==a){ 
			return "Треугольник равносторонний";
		} else if (a==b || b==c || c==a) { 
			return "Треугольник равнобедренный";
		} else { 
			return "Треугольник разносторонний";
		}
	}
	function triangle () {
		var aSide = document.getElementById("ida").value;
		var bSide = document.getElementById("idb").value;
		var cSide = document.getElementById("idc").value;
		alert (triangleSolve(aSide, bSide, cSide));

	}
