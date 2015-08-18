/* 
 *  codeadapted (patrts taken wholesale, actually) from https://github.com/appcelerator-developer-relations/Sample.RSS
 */

var XMLTools = require("XMLTools");
//var theXml;

var getFeed = function getFeed(url) {

	loadUrl(url, function onLoad(err, xml) {
//	Ti.API.info('xml in loadUrl function onLoad is: '+xml);
/*		if (err) {
			return opts.error && opts.error(err);
		}

		try {
*/
			// parse the Ti.XML.Document to json

			var opdsJson = new XMLTools(xml);
			Ti.API.info('jsonResult parsed: '+opdsJson.toJSON());

//			opts.success && opts.success(data.length === 1 ? data[0] : data);
//			theXml = opdsJson.toJSON();
			return opdsJson.toJSON();
		
			// catch any exceptions thrown
/*		} catch (e) {
			return opts.error && opts.error(e);
		}
*/
	});
//	return theXml;
};

/**
 * Loads an OPDS string or URL
 * @param  {string}   url      URL or local path to load
 * @param  {Function} callback Callback (error, data) to call when the URL has been loaded and parsed
 */
function loadUrl(url, callback) {
	var xml;

	// assume it to be a local path
	if (url.indexOf('htt') !== 0) {

		// asyncify this sync code block for consistent behavior
		return setTimeout(function () {

			var file = Ti.Filesystem.getFile(url);

			if (!file.exists() || !file.isFile()) {
				return callback('URL is not a file.');
			}

			var text = file.read().text;

			try {

				// parse the string to a Ti.XML.Document
				xml = Ti.XML.parseString(text);

				return callback(null, xml);

				// catch any exceptions thrown
			} catch (e) {
				return callback(e);
			}

		}, 0);
	}

	// fetch the URL
	var xhr = Ti.Network.createHTTPClient({

		/**
		 * Handle response
		 * @param  {Object} e Event
		 */
		onload: function onload(e) {
			var xml = this.responseXML;
			Ti.API.info('xml in loadUrl xhr section is: '+xml);	

			// response was not XML
			if (xml === null || xml.documentElement === null) {
				return callback(String.format('Response did not contain XML: %s', url));
			}

			callback(null, xml);
		},

		/**
		 * Handle error
		 * @param  {Object} e Error
		 */
		onerror: function onerror(e) {
			callback(String.format('Request failed: ' + e.error));
		}
	});

	xhr.open('GET', url);
	xhr.send();
}
module.exports = getFeed;