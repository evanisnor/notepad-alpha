define(['handlebars'],
	function(Handlebars) {

		Handlebars.registerHelper('compose', function(object) {
		  return new Handlebars.SafeString(object.render());
		});

		console.log('Registered compose helper')
	}
);