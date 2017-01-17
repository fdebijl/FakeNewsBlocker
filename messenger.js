(function() {
	"use strict";
	var btn1 = new Object();
	var btn2 = new Object(); 
	
	btn1.title = "Dit klopt niet";
	btn2.title = "Ja, hartstikke nep";
	var opt = {
		type: "basic",
		title: "Deze website brengt mogelijk fake news!",
		message: "Volgens onze gegevens brengt deze website mogelijk fake news.",
		iconUrl: "logo128_fake.png",
		buttons: [btn1, btn2]
	};
	
	function btnClick(notid, btninx) {
		if (btninx === 0) {
			window.open("https://twitter.com/intent/tweet?text=%40fdebijl%20Hey,%20de%20pagina%20op%20LINKHIER%20is%20geen%20fake%20news%20:D","_blank");
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