
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log('Get index');
	var template = 'mustache';
	
	try {
		if (req.params.page === 'jade') { template = 'jade'; }
		res.render('index.'+template, {title: 'Express Template', page: req.params.page, layout: 'layout'});
	}
	catch (e) {
		console.log('ERROR: ' + e);
	}
};