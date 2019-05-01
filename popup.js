



chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

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
				//tabScore = 1;
				break;
			}
		}
		for (var a=0; a < baddomains.length-1; a++) {
			if (parsed_url[i] == baddomains[a]) {
				good = false;
				found = true;
				siteTag.style.cssText = "color: red; font-size:22px;";
				document.body.appendChild(siteTag);
				//tabScore = -1;
				break;
			}
		}
	}
	
	if (found == false) {
		siteTag.style.cssText = "font-size:22px;";
		document.body.appendChild(siteTag);
	}
	

	//Now process history and generate score

	var past_urls = [];
	chrome.history.search({text: '', maxResults: 50}, function(data) {
    	//past_urls = data;
    	console.log(data);
    	for (var z=0; z < data.length; z++) {
    		past_urls[z] = data[z].url;
    		//data.forEach(function(page) {
        		//console.log(page.url);
    		//});
		}

		console.log(past_urls);

		var parsed_history = [];
		console.log("pre for");
		for (var x=0; x < past_urls.length; x++) {			
			var split1h = past_urls[x].split("://");
			//console.log(split1h); 

			var split2h = split1h[1].split("/");
			//console.log(split2h);

			var parsed_url_h = split2h[0].split(".");
			//console.log(parsed_url_h);

			parsed_history[x] = parsed_url_h;
		}

		console.log(parsed_history);

		var score = 100;
		for(var q = 0; q < parsed_history.length; q++) {
			for (var i = 0; i < parsed_history[q].length; i++) {
				for (var k=0; k < gooddomains.length; k++) {
					if (parsed_history[q][i] == gooddomains[k]) {
						score = score + 1;
						break;
					}
				}
				for (var a=0; a < baddomains.length; a++) {
					if (parsed_history[q][i] == baddomains[a]) {
						score = score - 1;
						break;
					}
				}
			}
		}

		console.log(score);
		var scoreTag = document.createElement('p');
		var currScore = "Score: ";
		var scoreText = document.createTextNode(currScore + score);
		scoreTag.appendChild(scoreText);
		if (score > 100)
			scoreTag.style.cssText = "color: green; font-size:22px;";
		else if (score < 100)
			scoreTag.style.cssText = "color: red; font-size:22px;";
		document.body.appendChild(scoreTag);
	});


	/*var score;
	chrome.storage.sync.get('myScore', function(data) {
    	alert(data.myScore);
    	score = data.myScore;
	});

	score = score + tabScore;
	alert(tabScore); //1, then 101, then new score, then 101
	chrome.storage.sync.set({'myScore': score}, function() {
    	alert('New Score');
	});

	chrome.storage.sync.get('myScore', function(data) {
    	alert(data.myScore);
	});*/

});



