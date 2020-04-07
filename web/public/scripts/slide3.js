var i= 7775271220;
function augmenter() {
		i = i+3;
		document.getElementById("numberhuman").innerHTML = i;
	}
    setInterval("augmenter()", 1000);