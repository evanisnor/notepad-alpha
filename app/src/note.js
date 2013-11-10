define(['handlebars', 'src/util/guid', 'moment', 'text!view/note.html', 'less!style/note.less'],
	function(Handlebars, guid, moment, noteTemplate) {

		var note = function() {
			this.id = guid.generate();
			this.title = 'Untitled';
			this.createdOn = moment().utc();
			this.lastModifiedOn = moment().utc();

			this.content = '';

			console.log('Generated new Note: ' + JSON.stringify(this));
		}

		note.prototype.setTitle = function(title) {
			this.title = title;
			this.lastModifiedOn = moment().utc();
		}

		note.prototype.setContent = function(text) {
			this.content = text;
			this.lastModifiedOn = moment().utc();
		}

		note.prototype.render = function() {
			var template = Handlebars.compile(noteTemplate);
			var data = {
				id: this.id,
				title: this.title,
				lastModifiedOn: this.lastModifiedOn.local().format('h:mm:ss A[,] D MMMM YYYY')
			};
			return template(data);
		}

		return note;
	}
);