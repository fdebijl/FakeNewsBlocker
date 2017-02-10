(function (){
	"use strict";
	
	var reader = new XMLHttpRequest(), url = "", art = "", line = 0, then = "", fromCache = false,
	tab = window.location.toString(), ael = 0, aels = document.getElementsByTagName('a'), now = new Date(), cacheFile = "";
	var weekFromNow = new Date(now.getTime() + 604800000);
	now.setHours(0,0,0,0);
	
	function loadFile(skipCheck) {
		if (localStorage.getItem("FakeNews_blocklist") !== null && skipCheck !== 1) {
			then = localStorage.getItem("FakeNews_expires");
			if (then < now) {
				loadFile(1);
			} else {
				cacheFile = localStorage.getItem("FakeNews_blocklist");
				fromCache = true;
			}
		} else {
			reader.open('get', 'https://raw.githubusercontent.com/Fdebijl/FakeNewsBlocker/master/blocklist.txt', true); 
			reader.onreadystatechange = function(){
				if(reader.readyState === 4) {
					matchURL();
					console.log(reader.responseText);
					localStorage.setItem("FakeNews_blocklist", reader.responseText);
					localStorage.setItem("FakeNews_expires", weekFromNow);
				}
			};
			reader.send(null);
		}
	} window.onload = function(){
		loadFile();
		document.styleSheets[0].addRule('.FakeNews_link:before','content: url(https://github.com/Fdebijl/FakeNewsBlocker/raw/master/logo16_fake.png); display: inline !important; visibility: visible !important; height: 1em !important; width: 1em !important; z-index: 999999999 !important; padding: .3em !important; ');
	};

	function getPat(u) {
		u = u.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
		return new RegExp('(http|https)(:\/\/)(.+|)(' + u + ')', 'i');
	};
	
	function matchURL() {
		var lines = fromCache ? cacheFile.split('\n') : reader.responseText.split('\n');
		for (line = 0; line < lines.length; line++) {
      		url = (lines[line]).split(',')[0];
			art = (lines[line]).split(',')[1];
			if(tab.match(getPat(url)) && url !== "") {
				chrome.runtime.sendMessage({t: "notu", l: url});
				console.warn("Supplied proof: " + art);
			}
			
			for (ael = 0; ael < aels.length; ael++) {
                if((aels[ael].href).match(getPat(url)) && url !== "" && (aels[ael].href) !== "") {
					aels[ael].className += " FakeNews_link"; 
					aels[ael].setAttribute('title', "Possible fake news");
				}	
			}
    	}
	}
})();