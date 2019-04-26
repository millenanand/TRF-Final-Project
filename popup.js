
console.log("yooooo");

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url)

   	//split string 
	var split1 = url.split("://");
	console.log(split1); 

	var parsed_url = split1[1].split("/");
	console.log(parsed_url);
});


	/*
	//split string 
	var split = unitValue.value.split(" ");
	console.log(split);
	
	var numValue = 0;
	for (var i = 0; i < split.length-1; i++) {
		if (isNaN(split[i]) == false){
			console.log(eval(split[i]));
			numValue += eval(split[i]);
		}		
	}
	console.log(numValue);
	var evalVal = numValue + "";
	console.log(evalVal);
	var qty = Qty.parse(evalVal + split[split.length-1]);

	var unitTag; 
	var unitText;
	var unitType = qty.kind();
	var lengthList = ["meter", "foot", "mile", "inch", "yard", "millimeter", "centimeter", "kilometer"];
	if (unitType == "length") {
		var numerator = qty.numerator[0];
		for (var i=0; i < lengthList.length; i++) {
			if (numerator != lengthList[i]) {
				unitTag = document.createElement('p');
				unitText = document.createTextNode(qty.to(lengthList[i]));
				unitTag.appendChild(unitText);
				unitTag.style.cssText = "font-size:22px";
				document.body.appendChild(unitTag);
			}
		}
	}
	else if (unitType == "volume") {
		var numerator = qty.numerator[0];
		var volumeList = ["cup", "fluid-ounce", "gallon", "liter", "pint", "quart", "tablespoon", "teaspoon", "meter^3", "foot^3", "mile^3", "inch^3", "yard^3", "millimeter^3", "centimeter^3", "kilometer^3"]; 
		for (var i=0; i < volumeList.length; i++) {
			if (numerator != volumeList[i]) {
				unitTag = document.createElement('p');
				unitText = document.createTextNode(qty.to(volumeList[i]));
				unitTag.appendChild(unitText);
				unitTag.style.cssText = "font-size:22px";
				document.body.appendChild(unitTag);
			}
		}
		for (var i=0; i < lengthList.length; i++) {
			if (numerator != lengthList[i]) {
				unitTag = document.createElement('p');
				unitText = document.createTextNode(qty.to(lengthList[i] + "^3"));
				unitTag.appendChild(unitText);
				unitTag.style.cssText = "font-size:22px";
				document.body.appendChild(unitTag);
			}
		}
	}
	else if (unitType == "area") {
		var numerator = qty.numerator[0];
		var areaList = ["acre", "meter^2", "foot^2", "mile^2", "inch^2", "yard^2", "millimeter^2", "centimeter^2", "kilometer^2"]; 
		for (var i=0; i < areaList.length; i++) {
			if (numerator != areaList[i]) {
				unitTag = document.createElement('p');
				unitText = document.createTextNode(qty.to(areaList[i]));
				unitTag.appendChild(unitText);
				unitTag.style.cssText = "font-size:22px";
				document.body.appendChild(unitTag);
			}
		}
		for (var i=0; i < lengthList.length; i++) {
			if (numerator != lengthList[i]) {
				unitTag = document.createElement('p');
				unitText = document.createTextNode(qty.to(lengthList[i] + "^2"));
				unitTag.appendChild(unitText);
				unitTag.style.cssText = "font-size:22px";
				document.body.appendChild(unitTag);
			}
		}
	}
	*/
});



