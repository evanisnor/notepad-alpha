define(['moment'],
	function(moment) {
		var guid = function() {
		};

		guid.prototype.generate = function() {
		    var d = moment().millisecond();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        var r = (d + Math.random()*16)%16 | 0;
		        d = Math.floor(d/16);
		        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
		    });
		    return uuid;
		}

		return new guid();
	}
);