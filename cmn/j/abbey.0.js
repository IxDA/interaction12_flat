$(document).ready(function() {
  // var $body = $('body');
  // var w = 700;
  // try {
  //   w = (!!window.innerHeight) ? window.innerHeight : ((!!document.body.offsetHeight) ? document.body.offsetHeight : document.documentElement.offsetHeight); 
  // }
  // catch(err) {
  //   w = 700;
  // }
  // $body.css({opacity:0}).append('<div id="ixda-screen"><div class="screen" style="position:fixed;width:100%;min-height:'+w+';top:0;left:0;background:#fff;background:rgba(255,255,255,.8) url(http://interaction12.ixda.org/cmn/i/layout/page-loader.gif) no-repeat 50% 150px !important;z-index:9992;"></div></div>').removeAttr('bgColor').css({opacity:1});
  // $('head style').replaceWith('<link href="http://interaction12.ixda.org/cmn/c/abbey.css" rel="stylesheet" type="text/css">');

var ixd12 = {
  
  $step: $('.progress:first'),
  
  toggleBody: function() {
    $('.progress:first').addClass('current');
    $('#ixda-screen').fadeOut();
  }, // toggleBody

  clearStyles: function() {
    var elemTypes = ['body', 'div', 'p', 'table', 'td', 'tr', 'tbody', 'thead', 'th'];
    var $elem, et;
    $('body, div, p, table, thead, thead, tr, th, td').each(function(i, v) {
      $elem = $(this);
      et = this.tagName.toLowerCase();
      if(et=='table') {
        $elem.attr('cellpadding', 0).attr('cellspacing', 0).attr('border', 0);
      }
      $elem.filter(':not(#ixda-screen):not(.screen)').removeAttr('bordercolor').removeAttr('bgcolor').removeAttr('bordercolor').removeAttr('valign');// .removeAttr('style')
      $elem.filter('[align="center"]').removeAttr('align');
      $elem.filter('[width]').addClass(('w' + this.getAttribute('width')).replace('%','pct')).removeAttr('width');
      var $doXbody = $elem.filter('div.w-650[style]');
      if($doXbody.length>0) {
        $doXbody.addClass('doXbody');
      }
      if(this.className!='screen' && (!!this.style.background || !!this.style.backgroundColor)) {
        this.style.backgroundColor = 'transparent';
        if(this.parentNode.tagName.toLowerCase()=='center' && this.tagName.toLowerCase()=='div') {
          this.style.width = 'auto';
          $elem.addClass('doXbody');
        }
      }
      // console.log('clearStyles');
    });
    
    $('input[type="text"]').addClass('frm-txt');
  }, // clearStyles
  
  fixBadFormCells: function() {

    // Header
      $('.linecolor:has(.doXdemohead)').removeClass('linecolor');
      // $('.coXhead,.doXdemohead').parents('table:not(table)').each(function() {
      //   var $this = $(this);
      //   $(this).replaceWith('<h2 class="sectionHead">' + $this.text() + '</h2>');
      // });
    
    // Phone
    var $labels = $('.doXfieldlabel');
    $labels.filter(':contains(Phone)').each(function() {
      $(this).next().find('input[name="WPHONE"]').after('<span class="instr-field">Please include international dialing code. (Ex. +1 888 888 8888 or +44 8888 888 888)</span>');
    });
    // $labels.filter(':contains(First Name)').html('First Name: <span class="req">*</span>');


    // Dietary
    var $first = null;
    $('.maXtd:has(input[type="checkbox"])').each(function() {
      var $td = $(this);
      $td.addClass('doXtd').addClass('with-cb');
      $td.prev().addClass('doXfieldlabel').removeClass('maXtd');
      $td.find('input[type="checkbox"]').css({width:'auto'});
      $td.append('<span class="label-cb">&nbsp;' +  $td.next().html() + '</span>');
      // $td.next().remove();
      $td.next().hide();
    });
    
    // Special Requirements
    $('.maXtd:contains(Special Requirements)').addClass('doXfieldlabel').removeClass('maXtd');
    
    // Registration
    $('.coXtd').each(function(i, v) {
      var coxtd = this, $coxtd = $(this);
      coxtd.removeAttribute('width');
      if(coxtd.innerHTML.indexOf('Student Rate')>=0) {
        var $tr = $coxtd.parents('tr:first');
        $tr.hover(function() {
          $tr.addClass('over');
        }, function() {
          $tr.removeClass('over');
        });
      }
      else if($coxtd.find('input[type!="text"]').length>0) {
        $coxtd.addClass('with-cb');
      }
      else {
        this.innerHTML = this.innerHTML.replace(/ ([^A-Za-z0-9.\-])([0-9]+)/gim, " $1 $2");
      }
    });
    $('.coXbody table tr table tr:has(.coXtd)').click(function(e) {
      if(e.target.tagName.toLowerCase()!=='input') {
        $(this).find('input[type="radio"]').click();
      }
    }).parents('.coXbody div').addClass('wrapper');
    var $promoCode = $('td.maXtd.w180:contains(Enter Promotion Code):first').addClass('doXfieldLabel').parents('table:first').addClass('promo-code');
    var $regOpts = $('input[name="P_1ZW0PJ163__GROUPONE"]');
    $promoCode.parents('.maXbody div').addClass('wrapper');
    
    $regOpts.click(function() {
      var $this = $(this);
      $this.parents('tr:first').addClass('selected').siblings().removeClass('selected');
      if(this.value==='PC') {
        $promoCode.addClass('PC');
      }
      else {
        $promoCode.removeClass('PC');
      }
    }).parents('table:first').addClass('reg-opts');
    // $regOpts

    // $('td.coXtd.w190:contains(Promotion Code)').next().append($('input[value="P_1ZW0PJ1TZ"],input[name="P_1ZW0PJ1TZ__PROMO"]'));
    // $('.maXbody table:contains(Enter Promotion Code)').hide();
    $('.maXbody table:has(.maXbody):not(:has(input))').hide();
          // console.log('fixBadFormCells');
    
  }, // fixBadFormCells
  
  fixBadSummaryCells: function() {
    var $heads = $('.doXhead');
    $heads.each(function() {
      this.innerHTML = this.innerHTML.replace(/^[1-5]\. /, '');
    });
    var $sectHeads = $('.SumSectHead');
    $sectHeads.parents('table.w630').addClass('linecolor').end().addClass('sectionHead');
    $sectHeads.filter(':contains(TOTAL)').next().addClass('total-value').prepend('<span>&#8364; </span>');
    
    $sectHeads.each(function() {
      if(this.innerHTML=='') {
       // $(this).parents('table.linecolor').remove();
       $(this).parents('table.linecolor').hide();
      }
    });
    
    var $tds = $('.doXtdsum');
    $tds.filter('.w210').addClass('doXfieldlabel');
    $tds.filter(':contains(Phone)').html('Phone:');
    $tds.filter(':contains(First Name)').html('First Name:');
    $tds.filter(':contains(Please Select)').html(' ');

    // Dietary
    var dietOpts = [];
    $('.maXtdsum.w350~td b').each(function() {
      dietOpts.push(this.innerHTML);
    }).parent().addClass('doXtd').html(dietOpts.join(', ')).prev().addClass('doXfieldlabel');
    // $('table:has(tr:has(.doXtd.maXtdsum):contains(Dietary Requirements)):not(:last)').remove();
    $('table:has(tr:has(.doXtd.maXtdsum):contains(Dietary Requirements)):not(:last)').hide();
    
    var $maxtdsum = $('.maXtdsum');
    $maxtdsum.filter('.w350 b:contains(Special Requirements)').parent().addClass('doXfieldlabel').html('Special Requirements:').next().addClass('doXtd');

    // Registration
    $('.coXtdsum').each(function(i, v) {
      var coxtd = this, $coxtd = $(this);
      coxtd.removeAttribute('width');
      coxtd.removeAttribute('valign');
      if(coxtd.innerHTML.indexOf('Please email through your student')>=0) {
        coxtd.innerHTML = '<span class="instr-student">' + coxtd.innerHTML + '</span>';
      }
      else if(coxtd.innerHTML.indexOf('Promotion Code')>=0) {
        var $promoCode = $maxtdsum.filter(':contains(Enter Promotion Code)').next();
        $coxtd.addClass('doXfieldlabel').next().html($promoCode.html());
        // $promoCode.parents('table:first').remove();
        $promoCode.parents('table:first').hide();
      }
      else if($coxtd.hasClass('w100')) {
        $coxtd.addClass('reg-total');
      }
      else {
        this.innerHTML = this.innerHTML.replace(/ ([^A-Za-z0-9.\-])([0-9]+)/gim, " $1 $2");
      }
    }).parent().prev().find('.SumColHead').html(' ');
    

    
    // Edit Link
    var $edits = $tds.find('a:contains(Edit)');
    var $edit = $edits.filter(':first');
    $edit.html('Go Back &amp; Edit Your Registration').addClass('edit-link');
    $('.SubmitBtn:last').after($edit.parent().html());
    // $edits.remove();
    $edits.hide();
    
    // $('.policy-cancel').siblings('p').remove();
    $('.policy-cancel').siblings('p').hide().parents('form table:first').addClass('terms');
    var $agree = $('input[name="iagree"]');
    $agree.parent().addClass('policy-agree').click(function(e) {
      if(e.target.tagName.toLowerCase()!=='input') {
        $agree.click();
      }
    });

  }, // fixBadSummaryCells
  
  fixBadPaymentCells: function() {
    // $('.w60').remove();
    $('.w60').hide();
    $('.w20').css({width:'30', verticalAlign:'top'});
    
    var tr = document.createElement('tr');
    var $td = $('.doXtd.w200');
    $td.parent().before(tr);
    $(tr).append($td);
    // $td.addClass('card-type').find('br').remove();
    $td.addClass('card-type').find('br').replaceWith('<span class="spacer">&nbsp;</span>');
    $('.doXtd:contains(Credit Card Payment)').wrapAll('<strong></strong>');
    var $ccStuff = $('.doXtd.w480');
    $ccStuff.filter(':has(select[name="cc_exp_mm"])').addClass('cc-exp');
    $ccStuff.filter(':contains(The Card ID or Card Validation Code)').addClass('cc-cvs');
    var $cvsMarkup = $ccStuff.filter(':contains(The Card ID or Card Validation Code)');
    $cvsMarkup.html($cvsMarkup.html().replace(/<br>\n/i, '<span class="instr-cvs">').replace('for more information.', "for more information.</span>"));

    var $table = $('form table:contains(Option)');

    $('td:contains(Option 1)').html('<strong>Irish Euro Cheque</strong>').addClass('payment-option').parent().next().andSelf().appendTo($table);
    $('td:contains(Option 2)').html('<strong>Bank Transfer</strong>').addClass('payment-option').parent().next().andSelf().appendTo($table);
    $('td:contains(Option 3)').html('<h5 class="sub-head">Payment Options</h5>').next().addClass('payment-option');
    $('td:contains(Total Amount Due)').addClass('total-due').find('b').prepend('<span>&#8364; </span>');
    $table.addClass('linecolor');
    
    $('table:has(.SubmitBtn)').addClass('linecolor');

    $('.SubmitBtn[onClick]').removeAttr('onClick').bind('click', function(e) {
      var cont = true;
      var val = $('[cc_type]:checked').val();
      if(val=='AMEX' || val=='MC' || val=='VI') {
        cont = confirm('Your payment is about to be processed. Do NOT press Back on your browser. When the authorization is complete, you will be taken to the confirmation screen.');
      }
      $('.doXbody').get(0).scrollIntoView();
      if(cont) {
        $('#ixda-screen').show();
        return true;
      }
      else {
        return false;
      }
      
    });
    
    // var paymentText = '<div class="payment-notes"><h5>Just one more step and you&rsquo;re done!</h5><p>But before you complete your registration, we&rsquo;d like to remind you to check back in September, so you can take advantage of our awesome workshops and activities in Dublin. If you haven&rsquo;t already, be sure to sign up for our mailing list after you&rsquo;ve completed your registration.</p><p>All prices listed in Euros.</p></div><div class="policy-payment"><h5>Payment Policies &amp; Procedures</h5><div class="instr-payment"><h6>Bank Transfers</h6><p>Bank transfers should be made using the following details:</p><dl><dt>Account Name:</dt><dd>Abbey Tours &#8211; Interaction 2012</dd><dt>Bank:</dt><dd>AIB 100/101 Grafton St, Dublin 2</dd><dt>Sort Code:</dt><dd>93-10-47</dd><dt>Account Number:</dt><dd>09401-929</dd><dt>IBAN:</dt><dd>IE70 AIBK 9310 4709 4019 29</dd><dt>BIC:</dt><dd>AIBKIE2D</dd></dl></div><div class="instr-payment"><h6>Irish Euro Cheque</h6><p>Postal payment by Euro Bank Draft or Euro cheque drawn on an Irish Bank should be made out to <em>Abbey Conference &amp; Corporate</em> and posted to:</p><address>Interaction 2012<br/>Abbey Conference &amp; Corporate<br/>City Gate<br/>22 Bridge Street Lower<br/>Dublin 8<br/>Ireland</address></div><h6 class="warning">For registrations received without payment, a provisional booking will be held for <strong>14 days</strong>.<br/>All registrations will be acknowledged within 7 days of receipt.</h6></div>';
    // $('table .doXtd:first').html(paymentText);
    $('.doXbody').get(0).scrollIntoView();
    $('p:has(a:contains(Edit Your Registration))').remove();
    $('table:has(.SubmitBtn)').addClass('linecolor').before($('.policy-payment'));
    
    $('tr:has(td:contains(For security)):not(:has(table))').hide();
    
  }, // fixBadPaymentCells

  fixFormFields: function() {
    $('input.frm-txt, select').each(function() {
      var $field = $(this);
      switch($field[0].getAttribute('name')) {
        case 'TLE': // title
          $field.find('option[value="Please select"]').get(0).value = '';
        case 'PCODE': // zip
          // this.style.width = '125px';
          $field.addClass('f125');
          break;
        case 'SUR': // first
        case 'GIV': // last
          // this.style.width = '220px';
          $field.addClass('f220');
          break;
        case 'USER1': // twitter
          // this.style.width = '150px';
          $field.addClass('f150');
          break;
        case 'P_3J40OMD3F__SPECIAL': // special
          // this.style.maxWidth = '560px';
          $field.addClass('mw560');
          break;
        case 'P_1ZW0PJ1TZ__PROMO': // promo
          // this.style.maxWidth = '125px';
          $field.addClass('mw125');
          // $(this).parent().prev().css({visibility:'hidden', width:'30'});
          break;        
        case 'COUNTRY':
          $field.find('option[value="Please select"]').get(0).value = '';
          $field.find('option').each(function() {
            this.innerHTML = $.trim(this.innerHTML.toLowerCase());
          });
          break;
        default:
          break;
      }
    }).focus(function(e) {
      $(this).parents('tr:first').removeClass('err');
    });

    $('input[type="radio"], input[type="checkbox"]').css({border:'0 none'});
    $('.coXintro:contains(All prices are listed in Euros.)').html('All prices are listed in Euros. <a href="#" class="open-popup" onclick="alert(\'Bet you didn\\\'t expect this to be here!\');return false;">Currency Converter</a>');
  }, // fixFormFields
  
  fixAsterisks: function(remove) {
    $('td:contains(Required field)').hide();
    if(remove) {
      // $('td img[src$=".gif"]').remove();
      $('td img[src$=".gif"]').hide();
    }
    else {
      var $imgs = $('td img[src$=".gif"]');
      $imgs.filter('[src$="req3.gif"]').replaceWith('<span class="req">*</span>');
      // $imgs.filter('[src$="req2.gif"]').remove();
      $imgs.filter('[src$="req2.gif"]').hide();
    }
    

    // $('.doXintro:contains(Required field)').parents('center').hide();
  }, // fixAsterisks
  
  handleButtons: function() {
    var $form = $('form');
    $form.submit(function(e) {
      var rtn = true;
      var fields = [];
      var regErr = '';
      $form.find('[name="GIV"],[name="SUR"],[name="POSIT"],[name="COUNTRY"],[name="WPHONE"],[name="E_MAIL"]').each(function() {
        var $this = $(this);
        if($this.val().trim()=='') {
          rtn = false;
          fields.push('<span class="req-field ' + this.getAttribute('name') + '">' + $this.parents('td:first').prev().text().replace(/[:*]\s?/gim, '') + '</span>');
          $this.parents('tr:first').addClass('err').one('click', function(e) {
            $(this).removeClass('err');
          });
        }
      });
      var $regOpts = $('input[name="P_1ZW0PJ163__GROUPONE"]:checked');
      var $promoOpt = $('input[name="P_1ZW0PJ1TZ__PROMO"]');
      if( $regOpts.length==0 || ($regOpts.val()=='PC' && $promoOpt.val().trim()=='') ) {
        rtn = false;
        // console.log($regOpts, $regOpts.length);
        if($regOpts.length==0) {
          regErr = '<br/>You must pick a <span class="req-field P_1ZW0PJ163__GROUPONE">registration option</span>!';
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
        window.scrollTo(0,0);
        $('#err-msg').remove();
        regErr = fields.length>0 ? '<br/>Please check the following fields, highlighted in red below: ' + fields.join(', ') + '.' + regErr : regErr;
        $('body').prepend('<div id="err-msg"><p>There is a problem with your submission.' + regErr + '</p></div>');
        document.getElementById('err-msg').scrollIntoView();
      }
    });    
    $('.req-field').live('click', function(e) {
      e.preventDefault();
      $('[name="' + this.className.replace(/req-field /gim, '') + '"]').get(0).scrollIntoView();
    });
  }, // handleButtons
  
  handleErrors: function() {
    var $doxintro = $('.doXintro:visible');
    if($doxintro.filter(':contains(Please complete this information and continue)')) {
      var fields = [];
      $doxintro.each(function() {
          if(this.getElementsByTagName('img').length==0) {
            fields.push($(this).text());
          }
      }).parents('p:first').hide();

      $('#err-msg').remove();
      if(fields.length>0) {
        $('body').prepend('<div id="err-msg"><p>' + fields.join('<br/>') + '</p></div>');
      }
    }
  }, // handleErrors
  
  _init: function() {
    var $body = $('body');
    ixd12.clearStyles();
    // ixd12.$step = $('.progress:first');
    if(!!ixd12.$step.length) {
      switch(ixd12.$step.text().trim()) {
        case 'Step 1': // Info
          $body.addClass('step-1');
          ixd12.fixAsterisks();
          ixd12.fixBadFormCells();
          ixd12.fixFormFields();
          ixd12.handleButtons();
          break;
        case 'Step 2': // Summary
          $body.addClass('step-2');
          ixd12.fixAsterisks(true);
          ixd12.fixBadSummaryCells();
          break;
        case 'Step 3': // Payment
          $body.addClass('step-3');
          ixd12.fixAsterisks(true);
          ixd12.fixBadPaymentCells();
          ixd12.handleErrors();
          break;
        case 'Step 4': // Thank you
          $body.addClass('step-4');
          ixd12.fixAsterisks(true);
          $('form[action="http://www.interaction12.ixda.org/"]').hide();
          break;
        default:
          break;
      }
      $('.progress:first').addClass('current');
    }
    else {
      ixd12.fixAsterisks(true);
      if($('form[action="http://www.interaction12.ixda.org/"]').length>0) {  // Thank you page (4)
        $('form[action="http://www.interaction12.ixda.org/"]').hide();
      }
    }
    var tt = setTimeout(function() {
      clearTimeout(tt);
      tt = null;
      ixd12.toggleBody();  
    }, 1000);
    
    document.title = 'Registration :: Interaction|12 :: Dublin, Ireland :: February 1-4, 2012';
  }
}; // ixd12  

ixd12._init();
window.ixd12 = ixd12;
});