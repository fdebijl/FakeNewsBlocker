// Saves options to chrome.storage.sync.
function save_options() {
	var l_doReplace = document.getElementById('replace').checked;
	// To-do process field data here
	
	chrome.storage.sync.set({
		lists: "https://raw.githubusercontent.com/Fdebijl/FakeNewsBlocker/master/blocklist.txt",
		types: [1,2],
		fullblock: false
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
			types: [1,2],
			fullblock: false
	}, function(items) {
		document.getElementById('replace').checked = items.doReplace;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('save').addEventListener('click', function() {
	window.close();	
});