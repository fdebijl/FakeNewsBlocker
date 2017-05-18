// Saves options to chrome.storage.sync.
function save_options() {
	var l_lists = document.getElementById('blocklists').value;
	var l_blacklist = document.getElementById('blacklist').value;
	var l_types = [];
	var l_fullbock = document.getElementById('fullblock').checked;
	
	l_types.push(document.getElementById('type1').checked ? 1 : null);
	l_types.push(document.getElementById('type2').checked ? 2 : null);
	l_types.push(document.getElementById('type3').checked ? 3 : null);
	l_types.push(document.getElementById('type4').checked ? 4 : null);

	chrome.storage.sync.set({
		lists: l_lists,
		blacklist: l_blacklist,
		types: l_types,
		fullblock: l_fullbock
	}, function() {
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 2000);
	});
}

function restore_options() {
	chrome.storage.sync.get({
			lists: "https://raw.githubusercontent.com/Fdebijl/FakeNewsBlocker/master/blocklist.txt",
			blacklist: "",
			types: [1,2],
			fullblock: false
	}, function(items) {
		document.getElementById('blocklists').value = items.lists;
		document.getElementById('blacklist').value = items.blacklist;
		document.getElementById('fullblock').checked = items.fullblock;
		document.getElementById('type1').checked = typeof items.types[0] == "number";
		document.getElementById('type2').checked = typeof items.types[1] == "number";
		document.getElementById('type3').checked = typeof items.types[2] == "number";
		document.getElementById('type4').checked = typeof items.types[3] == "number";
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('save').addEventListener('click', function() {
	window.close();	
});