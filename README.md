# [FakeNewsBlocker](https://chrome.google.com/webstore/detail/fake-news-blocker/gpaklhiejaggcipgepjjcckmehbefdok/)
  
<center>
[![Twitter](https://img.shields.io/badge/Twitter-@fdebijl-blue.svg?style=flat)](https://twitter.com/fdebijl)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Fdebijl/FakeNewsBlocker/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Fdebijl/FakeNewsBlocker.svg)](https://github.com/Fdebijl/FakeNewsBlocker/issues)
</center>

Fake News Blocker uses a crowdsourced list of so called 'fake news' websites that publish falsified news with either monetary intent or the intent to spread misinformation. If you happen upon one of these sites with this plugin installed you'll get a notification alerting you that the current page has been known to publish fake news.

If you have any contributions to the blacklist feel free to shoot me an email at apps@debijl.xyz or make a pull request here.

__Format for blocklist.txt:__  
`string website-url,proof-url`  
Supply the URL to the fake news site in the following format, so no leading subdomains or HTTP and no trailing directories:
`domain.tld`  
A few examples:
```
lincolnreport.com,http://fakenewswatch.com/
AmericanNews.com,http://fakenewswatch.com/
BigAmericanNews.com,http://fakenewswatch.com/
ChristWire.org,http://fakenewswatch.com/
```
__Definition of Fake News__  
Before adding a website to the blocklist, consider the following quote from [the New York Times on the definition of Fake News](https://www.nytimes.com/2016/12/06/us/fake-news-partisan-republican-democrat.html?_r=0):

> News that is fake or only marginally real has lurked online — and in supermarket tabloids — for years, but never before has it played such a prominent role in an American election and its aftermath. Narrowly defined, “fake news” means a made-up story with an intention to deceive, often geared toward getting clicks. But the issue has become a political battering ram, with the left accusing the right of trafficking in disinformation, and the right accusing the left of tarring conservatives as a way to try to censor websites. In the process, the definition of fake news has blurred.
> “Fake news is subjective. It depends on who’s defining it. One man’s trash is another man’s treasure.”

Sites on the blocklist (i.e. proof urls) need to publish demonstrably falsified articles or statements before a website can be considered a potential source of Fake News. Note that websites from any language are welcome in the blocklist, as long as you can point to a source verifying it's indeed Fake News.
