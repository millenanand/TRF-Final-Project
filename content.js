
/*function highlightHandler(e) {
    // get the highlighted text
    var text = document.getSelection();
    // check if anything is actually highlighted
    if(text !== '') {
        // we've got a highlight, now do your stuff here
        doStuff(text.toString());
    }
}*/

//document.onload = setScore;

//document.onmouseup = highlightHandler;
var score = 100;
chrome.storage.sync.set({'myScore': score}, function() {
    alert('Success');
});

chrome.storage.sync.get('myScore', function(data) {
        alert(data.myScore);
});

function setScore() {
    /*var score = 'test';
    
    var key='myKey', testPrefs = {'val': 10};
    chrome.storage.sync.set({key: testPrefs}, function() {
    
    //chrome.storage.sync.set({'value1': score}, function() {
        console.log('value1 sent');
        console.log(['value1']);
    });    

    chrome.storage.sync.get("key", function (result) {
    //chrome.storage.local.get('value1', function(result) {
        console.log(result);
        //console.log();
    });*/

    var score = 100;
    chrome.storage.sync.set({'myScore': score}, function() {
        alert('Success');
    });

    chrome.storage.sync.get('myScore', function(data) {
        alert(data.myScore);
    });
    
}

function doStuff(text) {
    var site = location.hostname,
    title = document.title;

    console.log(site);

    chrome.storage.sync.set({'value': site}, function() {
    	console.log('value sent')
    });

    

     //split array
     //var splitArray = text.split(" ");
     //console.log(splitArray);

}