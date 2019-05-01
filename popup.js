//var userScore 100;
//console.log(userScore);

//var myObj = {'score': 100};


var scoreVal = 100; //initialize score to 100



chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var tabScore = 0;
    var url = tabs[0].url;
    console.log(url)

   	//split string 
	var split1 = url.split("://");
	console.log(split1); 

	var split2 = split1[1].split("/");
	console.log(split2);

	var parsed_url = split2[0].split(".");
	console.log(parsed_url);

	//good or bad check
	var gooddomains = ["stackoverflow", "mail", "slack", "columbia", "edu", "org", "gov", "amazon", "espn", "columbiaspace", "npr", "pbs", "linkedin", "github", "wolframalpha", "docs", "yahoo", "chase", "walmart", "indeed", "accuweather", "yelp"]
	var baddomains = ["facebook", "twitter", "reddit", "messenger", "netflix", "youtube", "nytimes", "wsj", "washingtonpost", "wikipedia", "medium", "ebay", "instagram", "craigslist", "bing", "pinterest", "foxnews", "cnn", "imdb", "twitch", "blogspot", "whatsapp", "quora"]
	//google intentionally neutral 

	var siteTag = document.createElement('p');
	var currSite = "You are on: ";
	var siteText = document.createTextNode(currSite + split2[0]);
	siteTag.appendChild(siteText);

	var good;
	var found = false;
	for (var i = 0; i < parsed_url.length-1; i++) {
		for (var k=0; k < gooddomains.length-1; k++) {
			if (parsed_url[i] == gooddomains[k]) {
				good = true;
				found = true;
				siteTag.style.cssText = "color: green; font-size:22px;";
				document.body.appendChild(siteTag);
				tabScore = 1;
				break;
			}
		}
		for (var a=0; a < baddomains.length-1; a++) {
			if (parsed_url[i] == baddomains[a]) {
				good = false;
				found = true;
				siteTag.style.cssText = "color: red; font-size:22px;";
				document.body.appendChild(siteTag);
				tabScore = -1;
				break;
			}
		}
	}
	
	if (found == false) {
		siteTag.style.cssText = "font-size:22px;";
		document.body.appendChild(siteTag);
	}
	
	/*scoreVal = scoreVal + tabScore;
    
    var key = "myKey",
    score = JSON.stringify({
        'val': scoreVal
    });
	var jsonfile = {};
    jsonfile[key] = score;

    chrome.storage.sync.set(jsonfile, function () {
        console.log('Saved', key, score);
    });

    chrome.storage.sync.get(jsonfile[key], function(result) {
		console.log('Value currently is ' + result);
		console.log(jsonfile[key]);
	});*/


	/*chrome.storage.sync.set({key: value}, function() {
		console.log(value);
	});
      
	chrome.storage.sync.get(['key'], function(result) {
		console.log('Value currently is ' + result.key);
	});*/
});



