(function() {
	"use strict";
	
	var localSpace = chrome.runtime.getURL();
	var reader = new XMLHttpRequest(); var url = ""; var art = "";
	var tab = window.location.toString();
	var opt = {
		type: "basic",
		title: "Deze website brengt mogelijk fake news!",
		message: "Volgens onze gegevens brengt deze website mogelijk fake news.",
		iconUrl: "logo128_fake.png",
		buttons: ["Dit klopt niet", "", "Ja, hartstikke nep", ""]
	};
	
	chrome.notifications.onButtonClicked.addListener(btnClick);
	
	window.onload = loadFile();
	function loadFile() {
		reader.open('get', localSpace + 'blocklist.txt', true); 
		reader.onreadystatechange = function(){
			if(reader.readyState === 4) {
				matchURL();
			}
		};
		reader.send(null);
	}
	
	function btnClick(notid, btninx) {
		if (btninx === 0) {
			// Hit me up on Twitter fam
		} else {
			chrome.notifications.clear(notid);
		}
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
				chrome.notifications.create(opt)
			}
    	}
	}
})();