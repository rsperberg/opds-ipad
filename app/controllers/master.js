  var args = arguments[0] || {};
  
  $.titleText.text = args.titleText;
  $.infoLine.text = args.infoLine;


/*
var itemsy = _.map(opdsfeeds, function(feed) {
	return {
		 "feedName": {text: feed.titleText} 
	};
});
	Ti.API.info('itemsy is: '+itemsy);
*/
/*
var items = [
	{properties : {title:'FeedBooks All', url:'http://www.feedbooks.com/catalog.atom'} },
	{properties : {title:'FeedBooks Fiction', url:'http://www.feedbooks.com/store/categories/FBFIC000000.atom'} },
	{properties : {title:'FeedBooks Nonfiction', url:'http://www.feedbooks.com/store/categories/FBNFC000000.atom'} },
	{properties : {title:'FeedBooks Free', url:'http://www.feedbooks.com/site/free_books.atom'} },
	{properties : {title:'FeedBooks Bestsellers', url:'http://www.feedbooks.com/store/top.atom'}	},
	{properties : {title:'FeedBooks New', url:'http://www.feedbooks.com/store/recent.atom'} },
	{properties : {title:'Internet Archive',url:'http://bookserver.archive.org/catalog/catalog.atom'}},
	{properties : {title:'O\'Reilly',url:'http://opds.oreilly.com/opds/'} },
	{properties : {title:'The Pragmatic Bookshelf',url:'https://pragprog.com/catalog.opds'} },
	{properties : {title:'AJ Hall, Shoes for Industry', url:'http://ajhall.shoesforindustry.net/feeds/ajhall_ebook_opds_catalogue.atom'} },
	{properties : {title:'Project Gutenberg',url:'http://m.gutenberg.org/ebooks/?format=opds'} }
];
$.feedsList.sections[0].setItems(items);
*/

/*
$.feedsList.addEventListener('itemclick', function(e) {
//	var section = $.feedsList.sections[e.sectionIndex];
    Ti.API.info('[mst] Item ' + e.itemIndex + ' was clicked');
    var item = e.section.getItemAt(e.itemIndex);
    var urly = opdsfeeds[e.itemIndex].url;
    Ti.API.info('[mst] url is: '+urly);
});

Ti.API.info('[mst] opdsfeed[0] is: '+opdsfeeds[0].titleText);
*/