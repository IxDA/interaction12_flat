/* This is a JSON utility */
var JSON;if(!JSON){JSON={};}
(function(){"use strict";function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
/* ------ */

if(typeof window.ixda==='undefined') {
  window.ixda = {
    abbey: {
      formType: 'reg',
      step: 'step-1'
    }
  };
}
try { window.ixda.iframe = !(window.top===self);} catch(err) { }

// if(!!window.console && !!window.console.log) {
//   console.log(window.ixda.iframe);
// }
$(document).ready(function() {
  var ixd12 = {

    $body: $('body'),
    $step: $('.progress:first'),
    $lb: $('#ixda-screen'),
    regOpts: {
      group: (location.href.indexOf('_7SO103')>=0) ? 'P_7SO103T6D__GROUPONE' : 'P_1ZW0PJ163__GROUPONE'
    },
    

    toggleBody: function() {
      $('.progress:first').addClass('current');
      ixd12.$lb.fadeOut();
    }, // toggleBody

    clearStyles: function() {
      var elemTypes = ['body', 'div', 'p', 'table', 'td', 'tr', 'tbody', 'thead', 'th'];
      var $elem, et;
      $('body, div, p, table, thead, thead, tr, th, td').each(function(i, v) {
        $elem = $(this);
        et = this.tagName.toLowerCase();
        if(et == 'table') {
          $elem.attr('cellpadding', 0).attr('cellspacing', 0).attr('border', 0);
        }
        $elem.filter(':not(#ixda-screen):not(.screen)').removeAttr('bordercolor').removeAttr('bgcolor').removeAttr('bordercolor').removeAttr('valign').removeAttr('style');
        $elem.filter('[align="center"]').removeAttr('align');
        $elem.filter('[width]').addClass(('w' + this.getAttribute('width')).replace('%', 'pct')).removeAttr('width');
        
        // var $doXbody = $elem.filter('div.w-650[style]');
        // if($doXbody.length > 0) {
        //   $doXbody.addClass('doXbody');
        // }
        // if(this.className != 'screen' && ( !! this.style.background || !! this.style.backgroundColor)) {
        //   this.style.backgroundColor = 'transparent';
        //   if(this.parentNode.tagName.toLowerCase() == 'center' && this.tagName.toLowerCase() == 'div') {
        //     this.style.width = 'auto';
        //     $elem.addClass('doXbody');
        //   }
        // }
      });
      // $('body>div[align="LEFT"], body>div[class$="body"]>div[align=LEFT], .step-3>div:not(#ixda-screen)').addClass('wrapper');
      $('body>div:not(#ixda-screen):not(.ixda-header),body.step-4>table.w630').addClass('wrapper');
      $('input[type="text"]').addClass('frm-txt');
      $('.acXbody input').removeClass('frm-txt');
      $('body').prepend($('.ixda-header'));
    }, // clearStyles

    fixBadFormCells: function() {
      $('.linecolor:has(.doXdemohead)').removeClass('linecolor');
      $('input[name="WPHONE"]').after('<span class="instr-field">Please include <a href="http://www.countrycallingcodes.com/" target="_blank" title="Find out more about international dialing codes.">international dialing code</a>. (e.g. +1 888 888 8888 or +44 8888 888 888)</span>');
      $('input[name="USER2"]').after('<span class="instr-field">This will be how your name will appear on your badge.</span>');

      // $labels.filter(':contains(Phone)').each(function() {
      //   $(this).next().find('input[name="WPHONE"]').after('<span class="instr-field">Please include international dialing code. (Ex. +1 888 888 8888 or +44 8888 888 888)</span>');
      // });
      // $labels.filter(':contains(Badge)').each(function() {
      //   $(this).next().find('input[name="USER2"]').after('<span class="instr-field">This will be how your name will appear on your badge.</span>');
      // });
      // $labels.filter(':contains(Job Title)').each(function() {
      //   $(this).next().find('input[name="POSIT"]').after('<span class="instr-field">This will be how </span>');
      // });

      var $first = null;
      $('.maXtd:has(input[type="checkbox"])').each(function() {
        var $td = $(this);
        $td.addClass('doXtd').addClass('with-cb');
        $td.prev().addClass('doXfieldlabel').removeClass('maXtd');
        $td.find('input[type="checkbox"]').css({
          width: 'auto'
        });
        $td.append('<span class="label-cb">&nbsp;' + $td.next().html() + '</span>');
        $td.next().hide();
      });
      $('.maXtd:contains(Special Requirements)').addClass('doXfieldlabel').removeClass('maXtd');
      $('.coXtd').each(function(i, v) {
        var coxtd = this,
          $coxtd = $(this);
        coxtd.removeAttribute('width');
        if(coxtd.innerHTML.indexOf('Student Rate') >= 0) {
          var $tr = $coxtd.parents('tr:first');
          $tr.hover(function() {
            $tr.addClass('over');
          }, function() {
            $tr.removeClass('over');
          });
        }
        else if($coxtd.find('input[type!="text"]').length > 0) {
          $coxtd.addClass('with-cb');
        }
        else {
          this.innerHTML = this.innerHTML.replace(/ ([^A-Za-z0-9.\-])([0-9]+)/gim, " $1 $2");
        }
      });
      $('.coXbody table tr table tr:has(.coXtd)').click(function(e) {
        if(e.target.tagName.toLowerCase() !== 'input') {
          $(this).find('input[type="radio"]').click();
        }
      }); //.parents('.coXbody div').addClass('wrapper'); XXX
      var $promoCode = $('td.maXtd.w180:contains(Enter Promotion Code):first').addClass('doXfieldLabel').parents('table:first').addClass('promo-code');
      var $regOpts = $('input[name="' + ixd12.regOpts.group + '"]');
      // $promoCode.parents('.maXbody div').addClass('wrapper'); XXX
      $regOpts.click(function() {
        var $this = $(this);
        $this.parents('tr:first').addClass('selected').siblings().removeClass('selected');
        if(this.value === 'PC') {
          $promoCode.addClass('PC');
        }
        else {
          $promoCode.removeClass('PC');
        }
      }).parents('table:first').addClass('reg-opts').find('td.coXtd.w100:contains(.)').prepend('<span>&#8364; </span>');
      $('.maXbody table:has(.maXbody):not(:has(input))').hide();
    }, // fixBadFormCells

    fixBadSummaryCells: function() {
      var $heads = $('.doXhead');
      $heads.each(function() {
        this.innerHTML = this.innerHTML.replace(/^[1-5]\. /, '');
      });
      var $sectHeads = $('.SumSectHead');
      $sectHeads.parents('table.w630').addClass('linecolor').end().addClass('sectionHead');
      $sectHeads.filter(':contains(TOTAL)').html('TOTAL:').addClass('total-value').next().addClass('total-value').prepend('<span>&#8364; </span>');
      $sectHeads.each(function() {
        if(this.innerHTML == '') {
          $(this).parents('table.linecolor').hide();
        }
      });
      var $tds = $('.doXtdsum');
      $tds.filter('.w210').addClass('doXfieldlabel');
      // $tds.filter(':contains(Phone)').html('Phone:');
      // $tds.filter(':contains(First Name)').html('First Name:');
      $tds.filter(':contains(Please Select)').html(' ');
      var dietOpts = [];
      $('.maXtdsum.w350~td b').each(function() {
        dietOpts.push(this.innerHTML);
      }).parent().addClass('doXtd').html(dietOpts.join(', ')).prev().addClass('doXfieldlabel');
      $('.maXtdsum:contains(Special Requirements)').addClass('doXfieldlabel').removeClass('maXtd');

      $('table:has(tr:has(.doXtd.maXtdsum):contains(Dietary Requirements)):not(:last)').hide();
      var $maxtdsum = $('.maXtdsum');
      $maxtdsum.filter('.w350 b:contains(Special Requirements)').parent().addClass('doXfieldlabel').html('Special Requirements:').next().addClass('doXtd');
      $('.coXtdsum').each(function(i, v) {
        var coxtd = this,
          $coxtd = $(this);
        coxtd.removeAttribute('width');
        coxtd.removeAttribute('valign');
        if(coxtd.innerHTML.indexOf('Please email through your student') >= 0) {
          coxtd.innerHTML = '<span class="instr-student">' + coxtd.innerHTML + '</span>';
        }
        else if(coxtd.innerHTML.indexOf('Promotion Code') >= 0) {
          var $promoCode = $maxtdsum.filter(':contains(Enter Promotion Code)').next();
          $coxtd.addClass('doXfieldlabel').next().html($promoCode.html());
          $promoCode.parents('table:first').hide();
        }
        else if($coxtd.hasClass('w100')) {
          $coxtd.addClass('reg-total').prepend('<span>&#8364; </span>');
        }
        else {
          this.innerHTML = this.innerHTML.replace(/ ([^A-Za-z0-9.\-])([0-9]+)/gim, " $1 $2");
        }
      }).parent().prev().find('.SumColHead').html(' ');
      var $edits = $tds.find('a:contains(Edit)');
      var $edit = $edits.filter(':first');
      $edit.html('Go Back &amp; Edit Your Registration').addClass('edit-link');
      $('.SubmitBtn:last').after($edit.parent().html());
      $edits.hide();
      $('.policy-cancel').siblings('p').hide().parents('form table:first').addClass('terms');
      var $agree = $('input[name="iagree"]');
      $agree.parent().addClass('policy-agree').click(function(e) {
        if(e.target.tagName.toLowerCase() !== 'input') {
          $agree.click();
        }
      });
      $('h2~p~br').prev().andSelf().remove();
      $('form').submit(function(e) {
        $agree.parents('tr:first').removeClass('err');
        if(!$agree.is(':checked')) {
          e.preventDefault();
          alert('You must agree to the terms and conditions!');
          $agree.parents('tr:first').addClass('err');
          
        }
      });
    }, // fixBadPaymentCells

    fixBadPaymentCells: function() {
      $('.w60').hide();
      $('.w20').css({
        width: '30',
        verticalAlign: 'top'
      });
      var tr = document.createElement('tr');
      var $td = $('.doXtd.w200');
      $td.parent().before(tr);
      $(tr).append($td);
      $td.addClass('card-type').find('br').replaceWith('<span class="spacer">&nbsp;</span>');
      $('.doXtd:contains(Credit Card Payment)').wrapAll('<strong></strong>');
      var $ccStuff = $('.doXtd.w480');
      $ccStuff.filter(':has(select[name="cc_exp_mm"])').addClass('cc-exp');
      $ccStuff.filter(':contains(The Card ID or Card Validation Code)').addClass('cc-cvs');
      var $cvsMarkup = $ccStuff.filter(':contains(The Card ID or Card Validation Code)');
      $cvsMarkup
        .html($cvsMarkup.html().replace(/<br>\n/i, '<span class="instr-cvs">').replace('for more information.', "for more information.</span>"))
        .find('a[target="new"]').bind('click', function(e) {
          e.preventDefault();
          $('#cvn-info').removeClass('hide');
        });
      var $table = $('form table:contains(Option)');
      $('td:contains(Option 1)').html('<strong>Irish Euro Cheque</strong>').addClass('payment-option').parent().next().andSelf().appendTo($table);
      $('td:contains(Option 2)').html('<strong>Bank Transfer</strong>').addClass('payment-option').parent().next().andSelf().appendTo($table);
      // $('td:contains(Option 3)').html('<h5 class="sub-head">Payment Options</h5>').next().addClass('payment-option');
      $('td:contains(Option 3)').html('<h2>Payment Options</h2>').next().addClass('payment-option');
      $('td:contains(Total Amount Due)').addClass('total-due').find('b').prepend('<span>&#8364; </span>');
      $table.addClass('linecolor');
      $('table:has(.SubmitBtn)').addClass('linecolor');
      $('.SubmitBtn[onClick]').removeAttr('onClick').bind('click', function(e) {
        var cont = true;
        var val = $('[cc_type]:checked').val();
        if(val == 'AMEX' || val == 'MC' || val == 'VI') {
          cont = confirm('Your payment is about to be processed. Do NOT press Back on your browser. When the authorization is complete, you will be taken to the confirmation screen.');
        }
        window.scrollTo(0,0);
        if(cont) {
          $('#ixda-screen').show();
          return true;
        }
        else {
          return false;
        }
      });
      window.scrollTo(0,0);
      $('p:has(a:contains(Edit Your Registration))').remove();
      $('table:has(.SubmitBtn)').addClass('linecolor').before($('.policy-payment'));
      $('tr:has(td:contains(For security)):not(:has(table))').hide();
    }, // fixBadPaymentCells

    fixFormFields: function() {
      $('input[type="text"], select').each(function() {
        var $field = $(this);
        switch ($field[0].getAttribute('name')) {
        case 'TLE':
          try {
          $field.addClass('frm-dd').find('option[value="-- Select --"]').get(0).value = '';
          } catch(err) {}
        case 'PCODE':
          $field.addClass('f125');
          break;
        case 'SUR':
        case 'GIV':
        case 'USER2':
          $field.addClass('f220');
          break;
        case 'USER1':
          $field.addClass('f150');
          break;
        case 'P_3J40OMD3F__SPECIAL':
          $field.addClass('mw560');
          break;
        case 'P_1ZW0PJ1TZ__PROMO':
          $field.addClass('mw125');
          break;
        case 'COUNTRY':
          try {
            $field.find('option[value="-- Select --"]').get(0).value = '';
          } catch(err) {}
          $field.addClass('frm-dd').find('option').each(function() {
            this.innerHTML = $.trim(this.innerHTML.toLowerCase());
          });
          break;
        default:
          break;
        }
      }).focus(function(e) {
        $(this).parents('tr:first').removeClass('err');
      });
      // $('input[type="radio"], input[type="checkbox"]').css({
      //   border: '0 none'
      // });
      // $('.coXintro:contains(All prices are listed in Euros.)').html('All prices are listed in Euros. <a href="#" class="open-popup" onclick="alert(\'Bet you didn\\\'t expect this to be here!\');return false;">Currency Converter</a>');
    }, // fixFormFields
    
    fixBadThankYouPage: function() {
      $('form').addClass('wrapper').find('input').remove();
      
    }, // fixBadThankYouPage

    fixAsterisks: function(remove) {
      $('td:contains(Required field)').hide();
      if(remove) {
        $('td img[src$=".gif"]').hide();
      }
      else {
        var $imgs = $('td img[src$=".gif"]');
        $imgs.filter('[src$="req3.gif"]').replaceWith('<span class="req">*</span>');
        $imgs.filter('[src$="req2.gif"]').hide();
      }
    }, // fixAsterisks
    
    handleButtons: function() {
      var $form = $('form');
      $form.submit(function(e) {
        var rtn = true;
        var fields = [];
        var regErr = '';
        $form.find('[name="GIV"],[name="SUR"],[name="POSIT"],[name="COUNTRY"],[name="WPHONE"],[name="E_MAIL"]').each(function() {
          var $this = $(this);
          if($this.val().replace(/\s*([^\s]+)\s*/, '$1') == '') {
            rtn = false;
            fields.push('<span class="req-field ' + this.getAttribute('name') + '">' + $this.parents('td:first').prev().text().replace(/[:*]\s?/gim, '') + '</span>');
            $this.parents('tr:first').addClass('err').one('click', function(e) {
              $(this).removeClass('err');
            });
          }
        });
        
        var $regOpts = $('input[name="' + ixd12.regOpts.group + '"]:checked');
        var $promoOpt = $('input[name="P_1ZW0PJ1TZ__PROMO"]');
        if($regOpts.length == 0 || ($regOpts.val() == 'PC' && $promoOpt.val().replace(/\s*([^\s]+)\s*/, '$1') == '')) {
          rtn = false;
          if($regOpts.length == 0) {
            regErr = '<br/>You must pick a <span class="req-field ' + ixd12.regOpts.group + '">registration option</span>!';
          }
          else {
            regErr = '<br/>Please enter your <span class="req-field P_1ZW0PJ1TZ__PROMO">promotion code</span>.';
            $promoOpt.parents('tr:first').addClass('err').one('click', function(e) {
              $(this).removeClass('err');
            });
          }
        }
        if(!rtn) {
          e.preventDefault();
          $('#err-msg').remove();
          regErr = fields.length > 0 ? '<br/>Please check the following fields, highlighted in red below: ' + fields.join(', ') + '.' + regErr : regErr;
          ixd12.$body.find('.ixda-header').after('<div id="err-msg"><p>There is a problem with your submission.' + regErr + '</p></div>');
          window.scrollTo(0,0);
          ixd12.informSite();

        }
      });
      $('.req-field').live('click', function(e) {
        e.preventDefault();
        var $field = $('[name="' + this.className.replace(/req-field /gim, '') + '"]');
        if($field.length>0) {
          $field.focus();
          window.ixda.abbey.offsetTop = $field.parent().offset().top;
          self.scrollTo(0, window.ixda.abbey.offsetTop-5);
          ixd12.informSite();
        }
      });
    }, // handleButtons

    handleErrors: function() {
      var $doxintro = $('.doXintro:visible');
      if($doxintro.filter(':contains(Please complete this information and continue)')) {
        var fields = [];
        $doxintro.each(function() {
          if(this.getElementsByTagName('img').length == 0) {
            fields.push($(this).text());
          }
        }).parents('p:first').hide();
        $('#err-msg').remove();
        if(fields.length > 0) {
          ixd12.$body.find('.ixda-header').after('<div id="err-msg"><p>' + fields.join('<br/>') + '</p></div>');
        }
      }
      window.scrollTo(0,0);
      ixd12.informSite();

    }, // handleErrors
    
    fixBookingPage: function() {
      $('.acXsecthead:contains(Booking)').html('<h2>Booking Details</h2>');
      
      var $checkInOut = $('.acXtd:contains(Check-In)');
      $checkInOut.addClass('check-in-out').find('select').after('<span class="clearing"></span>');
      $checkInOut.after('<td class="spacer">&nbsp;</td>');
      $('table:has(.SubmitBtn):last').addClass('button-table');
      
    }, // fixBookingPage
    
    informSite: function() {
      try {
        if(window.ixda.iframe) {
          if(document.body && document.body.offsetHeight) {
           window.ixda.abbey.iframeHeight = document.body.offsetHeight;
          }
          if(document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetHeight) {
           window.ixda.abbey.iframeHeight = document.documentElement.offsetHeight;
          }
          if(window.innerHeight) {
           window.ixda.abbey.iframeHeight = window.innerHeight;
          }
          window.ixda.abbey.iframeHeight = ixd12.$body.height();
          window.top.postMessage(JSON.stringify(window.ixda.abbey), '*');
        }
      }
      catch(err) {
      }
    }, // informSite

    _init: function() {
      // if( !! ixd12.$lb.length) {
      ixd12.$lb.css({display:'block'});
      // }
      if( !! ixd12.$step.length) {
        var step = ixd12.$step.get(0).innerHTML.toLowerCase().replace(' ', '-');
        ixd12.$body.addClass(step);
        window.ixda.abbey.step = step;

        ixd12.clearStyles();

        switch (step) {
        case 'step-1':
          ixd12.fixAsterisks();
          ixd12.fixBadFormCells();
          ixd12.fixFormFields();
          ixd12.handleButtons();
          break;
        case 'step-2':
          // $body.addClass('step-2');
          ixd12.fixAsterisks(true);
          ixd12.fixBadSummaryCells();
          break;
        case 'step-3':
          // $body.addClass('step-3');
          ixd12.fixAsterisks(true);
          ixd12.fixBadPaymentCells();
          ixd12.handleErrors();
          break;
        case 'step-4':
          // $body.addClass('step-4');
          ixd12.fixAsterisks(true);
          ixd12.fixBadThankYouPage();
          // $('form[action="http://www.interaction12.ixda.org/"]').hide();
          break;
        default:
          break;
        }
        if(window.location.href.indexOf('http')==0) {
          $('.progress:first').addClass('current');
        }
        
      }
      else {
        ixd12.fixAsterisks(true);
        if($('form[action="http://www.interaction12.ixda.org/"]').length > 0) {
          $('form[action="http://www.interaction12.ixda.org/"]').hide();
        }
      }
      var tt = setTimeout(function() {
        clearTimeout(tt);
        tt = null;
        ixd12.toggleBody();
      }, 1000);
      
      if(!!ixda) {
        switch(ixda.abbey.formType) {
        case 'reg':
          document.title = 'Registration :: Interaction12 :: Dublin, Ireland :: February 1-4, 2012';
          break;
        case 'acc':
          document.title = 'Accommodations :: Interaction12 :: Dublin, Ireland :: February 1-4, 2012';
          ixd12.fixBookingPage();
          break;
        default:
          break;
        }
      }
      
      self.scrollTo(0,0);
      ixd12.informSite();
    } // _init

  };
  ixd12._init();
  ixda.ixd12 = ixd12;

}); // document ready