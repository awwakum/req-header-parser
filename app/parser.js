module.exports = function(req) {
	var output = {
		ip: req.ip,
		lng: req.headers['accept-language'].split(',')[0],
		os : req.headers['user-agent'].split(') ')[0].split(' (')[1]
	};

	return output;
};