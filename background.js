// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  console.log(message)
  console.log('did we make it this far')

  var score = 100;
  chrome.storage.sync.set({'myScore': score}, function() {
  	alert('Success');
  });


}

//window.onload = onWindowLoad;
/*window.onload = function () {
	var score = 100;
  	chrome.storage.sync.set({'myScore': score}, function() {
  		alert('Success');
  	});
}*/



chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log("in fn");
  if (changeInfo.status == 'complete' && tab.active) {

    var score = 100;
  	chrome.storage.sync.set({'myScore': score}, function() {
  		alert('Success');
  	});

  }
});

// chrome.runtime.getBackgroundPage(function(backgroundPage) {
// 	console.log(window);
// 	console.log(document.selection);
// });
//  /*chrome.runtime.onStartup.addListener(function() {
//       console.log("The color is green.");
//   });
// */

// function highlightHandler(e) {
//     // get the highlighted text
//     var text = document.getSelection();
//     // check if anything is actually highlighted
//     if(text !== '') {
//         // we've got a highlight, now do your stuff here
//         //doStuff(text);
//         console.log(text);
//     }
// }


// //document.onmouseup = highlightHandler;


// function doStuff(text) {
//     // do something cool
// }