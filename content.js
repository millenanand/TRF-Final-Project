//import {Qty} from './node_modules/js-quantities/src/quantities.js' 

function highlightHandler(e) {
    // get the highlighted text
    var text = document.getSelection();
    // check if anything is actually highlighted
    if(text !== '') {
        // we've got a highlight, now do your stuff here
        doStuff(text.toString());
    }
}


document.onmouseup = highlightHandler;


function doStuff(text) {
    //git push -u origin millen
    // do something cool
    //console.log(text)
    chrome.storage.sync.set({'value': text}, function() {
    	console.log('value sent')
    });

     //split array
     var splitArray = text.split(" ");
     console.log(splitArray);

  
    // var Qty = require('js-quantities'); //error here: require is not defined
    // qty = new Qty(124, 'cm');
    // console.log(qty);
    // console.log("yuh");
}