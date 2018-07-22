
const __dirname = '../img/';
const Pageres = require(['pageres'], function (value) {
	const pageres = new Pageres({delay: 4})
		.src('cryptomarketchains.com', ['1024x768'])
		.dest(__dirname)
		.run()
		.then(() => console.log('done'));
});


$(document).ready(function() {
	
});
