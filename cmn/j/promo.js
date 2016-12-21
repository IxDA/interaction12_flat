(function() {
	var GLOBAL = {
		regExes: {
			email: /^([a-zA-Z0-9-_.+]+@[a-zA-Z0-9-\.]+\.[a-zA-Z]{1,7})$/
		},
		validateEmail: function(val) {
			return GLOBAL.regExes.email.test(val);
		},
		parseQS: function() {
			if (typeof GLOBAL.QS === 'undefined') {
				GLOBAL.QS = {};
				GLOBAL.QS._get = function(k) {
					return GLOBAL.QS[k];
				};
			}
			var pairs = location.search.substr(1).split('&');
			for (var i = 0, pLen = pairs.length, pair; i < pLen; i++) {
				pair = pairs[i].split('=');
				GLOBAL.QS[pair[0]] = pair[1];
			}
			return GLOBAL.QS;
		},
		_init: function() {}
	};

	var ixd12 = {

    addVideo: function() {
      if($('.touch').length>0) {
        $('.widget.video-touch').html('<iframe title="Interaction|12" width="680" height="415" src="http://www.youtube.com/embed/AI8iJ-cvMxQ"></iframe>');
      }
      else {
        $('.widget.video').html('<iframe title="Interaction|12" width="335" height="210" src="http://www.youtube.com/embed/AI8iJ-cvMxQ"></iframe>');
      }
    }, // 
		_init: function() {
      ixd12.addVideo();
		}
	};
	window.ixd12 = ixd12;
	ixd12._init();
})();
