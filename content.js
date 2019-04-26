
/*function highlightHandler(e) {
    // get the highlighted text
    var text = document.getSelection();
    // check if anything is actually highlighted
    if(text !== '') {
        // we've got a highlight, now do your stuff here
        doStuff(text.toString());
    }
}*/


//document.onmouseup = highlightHandler;


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