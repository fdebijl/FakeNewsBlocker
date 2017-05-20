(function (){
	"use strict";
	
	window.onload = function() {
		// Query the chrome.tabs API for the tab that is currently in focus. Will return singular array.
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			// Send a message to the focused tab asking if there is a block active. Return false if n.a.
			chrome.tabs.sendMessage(tabs[0].id, {type: "getBlockInfo"}, function(url, type, proof, notes, origin, name, version, kind) {
				if(url){document.getElementById('url').innerHTML = url};
				if(type){document.getElementById('type').innerHTML = type};
				if(proof){document.getElementById('proof').innerHTML = proof};
				if(notes){document.getElementById('notes').innerHTML = notes};
				if(origin){document.getElementById('origin').innerHTML = origin};
				if(name){document.getElementById('name').innerHTML = name};
				if(version){document.getElementById('version').innerHTML = version};
				if(kind){document.getElementById('kind').innerHTML = kind};	
				
				document.getElementById('status').innerHTML = "This website is known for spreading fake news.";
			});
		});	
	}
})();

