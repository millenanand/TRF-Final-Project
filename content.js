
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        var score = 100;
        chrome.storage.sync.set({'myScore': score}, function() {
            alert('Init score');
        });
    }
    else if(details.reason == "update"){
        //call a function to handle an update
    }
});



//need to use chrome.runtime to get tab in content script?
//would have to use messaging to send to background, get the tab, send it back



//document.onload = setScore;
/*
var score = 100;
chrome.storage.sync.set({'myScore': score}, function() {
    alert('Success');
});

chrome.storage.sync.get('myScore', function(data) {
    alert(data.myScore);
});
*/

function setScore() {

    var score = 100;
    chrome.storage.sync.set({'myScore': score}, function() {
        alert('Success');
    });

    chrome.storage.sync.get('myScore', function(data) {
        alert(data.myScore);
    });
    
}