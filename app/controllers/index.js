var getFeed = require("getFeed");
var feedData;

var opdsfeeds = [
	{title:'FeedBooks All', url:'http://www.feedbooks.com/catalog.atom', infoLine:"Entrypoint to all FeedBooks feeds", hasChild:true},
	{title:'FeedBooks Fiction', url:'http://www.feedbooks.com/store/categories/FBFIC000000.atom', infoLine:"All kinds of fiction feeds", hasChild:true},
	{title:'FeedBooks Nonfiction', url:'http://www.feedbooks.com/store/categories/FBNFC000000.atom', infoLine:"All kinds of nonfiction feeds", hasChild:true},
	{title:'FeedBooks Free', url:'http://www.feedbooks.com/site/free_books.atom', infoLine:"Access to free ebooks", hasChild:true},
	{title:'FeedBooks Bestsellers', url:'http://www.feedbooks.com/store/top.atom', infoLine:"Top-selling books at FeedBooks", hasChild:true},
	{title:'FeedBooks New', url:'http://www.feedbooks.com/store/recent.atom', infoLine:"Books newly accessible at FeedBooks", hasChild:true},
	{title:'Internet Archive',url:'http://bookserver.archive.org/catalog/catalog.atom', infoLine:"Free ebooks", hasChild:true},
	{title:'O\'Reilly',url:'http://opds.oreilly.com/opds/', infoLine:"Commercial technical books", hasChild:true},
	{title:'The Pragmatic Bookshelf',url:'https://pragprog.com/catalog.opds', infoLine:"Commercial computer programming books", hasChild:true},
	{title:'AJ Hall, Shoes for Industry', url:'http://ajhall.shoesforindustry.net/feeds/ajhall_ebook_opds_catalogue.atom', infoLine:"Fan fiction, free", hasChild:true},
	{title:'Project Gutenberg',url:'http://m.gutenberg.org/ebooks/?format=opds', infoLine:"Public domain ebooks", hasChild:true}
];

$.allFeeds.data = opdsfeeds;

function clickedTableView(_event) {
	Ti.API.info('Clicked on '+_event.index);
	Ti.API.info('Clicked on url: '+opdsfeeds[_event.index].url);
	var feedUrl = opdsfeeds[_event.index].url;
	function f() {
  		Ti.API.info('feedData info is '+getFeed(feedUrl));
	}
	setTimeout(f, 2000);
	feedData = getFeed(feedUrl);
	Ti.API.info('feedData var is '+feedData);

	
}

$.splitWin.open();
Ti.API.info('splitWin opened');
