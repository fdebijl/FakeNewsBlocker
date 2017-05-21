(function (){
	"use strict";
	
	window.onload = function() {
		// Query the chrome.tabs API for the tab that is currently in focus. Will return singular array.
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			// Send a message to the focused tab asking if there is a block active. Return false if n.a.
			chrome.tabs.sendMessage(tabs[0].id, {type: "getBlockInfo"}, function(data) {			
				if (data.url) { 
					document.getElementById('url').innerHTML = data.url;
					document.getElementById('status').innerHTML = "This website is known for spreading fake news";
					
					if (data.type) {
						document.getElementById('type').innerHTML = data.type;
					}
					
					if (data.proof) {
						document.getElementById('proof').innerHTML = data.proof;
					}
					
					if (data.notes) {
						document.getElementById('notes').innerHTML = data.notes;
					}
					
					if (data.kind) {
						document.getElementById('kind').innerHTML = data.kind;
						
						if (data.origin) {
							document.getElementById('origin').innerHTML = data.origin;
						}

						if (data.name) {
							document.getElementById('name').innerHTML = data.name;
						}

						if (data.version) {
							document.getElementById('version').innerHTML = data.version;
						}
					} else {
						document.getElementById('metaTable').style.display = 'none';
					}					
				} else {
					document.getElementById('status').innerHTML = "This website does not appear on any blocklist";
				}
			});
		});	
	}
})();