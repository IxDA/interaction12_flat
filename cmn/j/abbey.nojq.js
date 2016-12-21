// This would be my code!
(function() {
  
var ixd12 = {

  loadCSS: function() {
    var cssLink = document.createElement('link');
    cssLink.href = 'http://interaction12.ixda.org/cmn/c/abbey.css';
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    var head = document.getElementsByTagName('head')[0];
    head.replaceChild(cssLink, head.getElementsByTagName('style')[0]);
  },

  clearStyles: function() {
    var elemTypes = ['body', 'div', 'p', 'table', 'td', 'tr', 'tbody', 'thead', 'th'];
    for(var i=0, etLen=elemTypes.length,et, elems; i<etLen; i++) {
      et = elemTypes[i];
      elems = document.getElementsByTagName(et); 
      for(var j=0, eLen=elems.length, elem; j<eLen; j++) {
        elem = elems[j];
        if(elem.style.width=='650px') {
          if(et=='div' && elem.parentNode.tagName.toLowerCase()=='center') {
            elem.className = 'doXbody';
          }
          elem.style.width = 'auto';
        }
        if(!!elem.style.background || !!elem.style.background) {
          elem.style.backgroundColor = 'transparent';
        }
        // elem.style.backgroundColor = 'transparent';
      }
    }
  }, // clearStyles

  addLabels: function() {
    var termscbs = document.getElementsByName('iagree');
    if(!!termscbs.length) {
      var termscb = termscbs[0];
      termscb.id = 'ixda-iagree';
      var nextNode = termscb.nextSibling;
      var label = document.createElement('label');
      label.innerHTML = nextNode.data;
      label.setAttribute('for', 'ixda-iagree');
      termscb.parentNode.replaceChild(label, nextNode);
    }    
  }, // addLabels
  
  fixAsterisks: function() {
    var images = document.getElementsByTagName('img');
    var req = document.createElement('span');
    req.innerHTML = '*';
    req.className = 'req';
    for(var i=0,iLen=images.length,img, src; i<iLen; i++) {
      img = images[i];
      src = !!img ? null : !!img.getAttribute('src') ? img.getAttribute('src').toLowerCase : '';

      if(src && (/req[0-9]?\.gif/).test(src) && img.parentNode.className.indexOf('doXtd')<0) {
        img.parentNode.replaceChild(req.cloneNode(true), img);
      }
    }
  }, // fixAsterisks
  
  _init: function() {
    ixd12.loadCSS();
    ixd12.clearStyles();
    ixd12.addLabels();
    ixd12.fixAsterisks();
  }
}; // ixd12  

ixd12._init();
})();
