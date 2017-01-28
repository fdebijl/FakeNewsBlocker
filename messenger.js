(function() {
	"use strict";
	var btn1 = new Object();
	var btn2 = new Object(); 
	
	btn1.title = chrome.i18n.getMessage("notAccurate");
	btn2.title = chrome.i18n.getMessage("Accurate");
	var opt = {
		type: "basic",
		title: "Fake News",
		message: chrome.i18n.getMessage("Attent"),
		iconUrl: "logo128_fake.png",
		buttons: [btn1, btn2]
	};
	
	function btnClick(notid, btninx) {
		if (btninx === 0) {
			window.open("https://github.com/Fdebijl/FakeNewsBlocker/issues");
			chrome.notifications.clear(notid);
		} else {
			chrome.notifications.clear(notid);
		}
	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.type === "notu") {
			chrome.notifications.create('thisisfakenews', opt, null)
			chrome.notifications.onButtonClicked.addListener(btnClick);
			sendResponse();
		}
	});
	
})();