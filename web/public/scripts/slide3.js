
var i= 7775271220;

//function format(i, sep) {
//    i += '';
//   var l = i.length;
//   return i.substring(0, l % 3) + i.substring(l % 3).replace(reg, sep + '$1');
//}

function augmenter() {
		i = i+3;
		document.getElementById("nbHumain").innerHTML = i;
	}
    setInterval("augmenter()", 1000);
    
