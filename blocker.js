(function() {
	"use strict";
	
	var reader = new XMLHttpRequest(); var url = ""; var art = "";
	var tab = window.location.toString(); var aels = document.getElementsByTagName('a');
	
	window.onload = loadFile();
	function loadFile() {
		reader.open('get', 'https://raw.githubusercontent.com/Fdebijl/FakeNewsBlocker/master/blocklist.txt', true); 
		reader.onreadystatechange = function(){
			if(reader.readyState === 4) {
				matchURL();
			}
		};
		reader.send(null);
	}

	function getPat(u) {
		u = u.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
		return new RegExp('(http|https)(:\/\/)(.+|)(' + u + ')');
	}
	
	function matchURL() {
		var lines = reader.responseText.split('\n');
    	for (var line = 0; line < lines.length; line++) {
      		url = (lines[line]).split(',')[0];
			art = (lines[line]).split(',')[1];
			if(tab.match(getPat(url)) && url !== "") {
				chrome.runtime.sendMessage({t: "notu", l: url});
				console.warn("Supplied proof: " + art);
			}
			
			for (var ael = 0; ael < aels.length; ael++) {
				if((aels[ael].href).match(getPat(url)) && url !== "" && (aels[ael].href) !== "") {
					
				}	
			}
    	}
	}
})();