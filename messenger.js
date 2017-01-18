(function() {
	"use strict";
	var btn1 = new Object();
	var btn2 = new Object(); 
	
	btn1.title = "Dit klopt niet";
	btn2.title = "Ja, hartstikke nep";
	var opt = {
		type: "basic",
		title: "Fake News",
		message: "Volgens onze gegevens brengt deze website mogelijk fake news. ",
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