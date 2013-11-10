define(['jquery', 'handlebars', 'text!view/list.html', 'less!style/list.less'],
	function($, Handlebars, listTemplate) {

		var list = function() {
			this.notes = [];
			this.prerendered = [];
		};

		list.prototype.add = function(note) {
			this.notes.splice(0, 0, note);
		}

		list.prototype.getByIndex = function(index) {
			return this.notes[index];
		}

		list.prototype.render = function() {
			var template = Handlebars.compile(listTemplate);
			var data = {
				items : this.notes
			}
			return template(data);
		}

		return list;
	}
);