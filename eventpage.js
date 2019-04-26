var contextMenuItem = {
	"id": "unit",
	"title": "Converter",
	"contexts": ["selection"],
};

chrome.contextMenus.create(contextMenuItem);


chrome.contextMenus.onClicked.addListener(function(clickData) {
	if (clickData.menuItemId == "unit" && clickData.selectionText) {

		console.log('we in')

	}
})