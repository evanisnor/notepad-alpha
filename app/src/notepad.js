define(['jquery', 'handlebars', 'text!version.txt', 'src/list', 'src/note', 'text!view/notepad.html', 'src/helper/compose', 'less!style/notepad.less'],
	function($, Handlebars, version, list, note, notepadTemplate) {

		var notepad = function (element) {
			this.element = element;
			this.version = version;

			this.list = new list();
			this.selectedNote = null;
			this.sidebarState = 'hidden';

			this.newNote();

			// this.render();
		}

		notepad.prototype.newNote = function() {
			this.list.add(new note());
			this.selectNote(0);
		}

		notepad.prototype.selectNote = function(index) {
			this.selectedNote = this.list.getByIndex(index);
			this.render();
		}

		notepad.prototype.render = function() {
			var template = Handlebars.compile(notepadTemplate);
			var data = {
				version : version,
				list : this.list,
				selectedNote : this.selectedNote,
				sidebarState : this.sidebarState
			};
			$(this.element).html(template(data));

			var self = this;
			$('#newNote').on('click', function() {
				self.newNote();
			});

			$('#titleEditor').keyup(function() {
				if (self.selectedNote) {
					self.selectedNote.setTitle($('#titleEditor').text());
				}
			});

			$('#editor').keyup(function() {
				if (self.selectedNote) {
					var content = $('#editor').html();
					self.selectedNote.setContent(new Handlebars.SafeString(content));
				}
			});

			var menuHandler = function() {
				self.render();
				
				if (self.sidebarState === 'hidden') {
					self.sidebarState = '';
				}
				else {
					self.sidebarState = 'hidden';
				}

				$('#sidebar').toggleClass('hidden');
			};

			$('#notes').on('click', 'li', function() {
				self.selectNote($(this).index());
				menuHandler();
			});

			$('#menu').on('click', menuHandler);

		}

		return notepad;
	}
);