Roadmap - no version  
	- Add i18n for options menu  
	- Add i18n to alerts in blocker.js  
	- Add i18n for the popup  
  
2.3.4  
    - Romanian translation  
  
2.3.3  
	- Adds a second type of blocklist and expands the syntax of the basic blocklist  
	- The reason why a site is marked as fake is now shown in a popup  

2.2.3  
	Major changes to the way blocklists are read and imported  
	- Internal links on a fake news site are no longer marked - For example: if you visit CreamBMP.com, no links on that site pointing to CreamBMP.com will be flagged as fake. You will still receive a notification.  
	- Websites are now divided into four groups, ranging from plain fake news to satire. Users may opt to disable or enable blocking of any of these categories.  
	- In the same vein of allowing more customizability, the user can now opt to use their own blacklist instead of the default one, or in addition to the master blocklist.  
	- Instead of receiving a warning users can now set an option to block the website outright, and display a full-page warning instead.  
	- Fake News Blocker no longer abuses the localStorage API for caching the blocklist. Every site used to have it's own instance of the blocklist, this is now centralized using the chrome.storage API.  
	- Users can specify individual sites they want blocked or be warned about in the settings.  
  
1.2.3   
	- MatchURL function will now call when blocklist is loaded from cache  
  
1.2.2  
	- Cache blocklist for a week to reduce overall bandwidth usage  
	- Mark anchor tags that hyperlink to a known fake news website  
