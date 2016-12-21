(function() {
  
var ixd = {
  
  $screen: $('.screen'),
  $modal: $('.modal'),
  templates: ['modal_tout'],

  touts: {
    dublin: {
      title: 'Dublin',
      content: [
        {
          tag: 'p',
          content: 'Dublin, Ireland’s capital is a city that truly captures your imagination. Cobbled alleys, Viking remains, Georgian squares. Dublin’s history goes back over a thousand years. Step back in time in this city full of literary landmarks, from the James Joyce Tower to Trinity College, alma mater of many of Ireland’s greatest writers.'
        },
        {
          tag: 'p',
          content: 'Steeped in history and youthful energy, Dublin is a medieval city where the charming and cosmopolitan converge in delightful diversity.'
        },
        {
          tag: 'p',
          content: 'Fine museums and art galleries chronicle Dublin’s long and colourful past, while the pubs and cafes buzz with traditional and contemporary entertainment.'
        },
        {
          tag: 'p',
          content: 'Throughout Dublin city and county you will find an abundance of visitor attractions to discover and explore, from the most majestic museums to more modern centres of entertainment.'
        },
        {
          tag: 'a',
          content: 'http://www.visitdublin.com/',
          attr: {
            href: 'http://www.visitdublin.com/',
            target: '_blank',
            title: 'Visit Dublin'
          }
        }
      ]
    },
    iadt: {
      title: 'IADT',
      content: [
        {
          tag: 'p',
          content: 'IADT, a Higher Education Institute in Ireland, attracts students from across Ireland and the world. It is an Institute of Technology that is positively vibrating with new ideas and creativity. Our pioneering approach to education programmes makes us unique in Irish third level education, and we have the reputation to prove it.'
        },
        {
          tag: 'p',
          content: 'IADT’s vision is to be at the forefront of teaching, research and innovation at the convergence of the arts, technology and enterprise, and to contribute to Ireland’s development as a creative knowledge economy.'
        },
        {
          tag: 'p',
          content: 'Please visit our website: www.iadt.ie.'
          // content: 'Please visit our website <a href="http://www.iadt.ie/" target="_blank" title="IADT">www.iadt.ie</a>.'
        }
      ]
    }
  }, // touts

  // HELPERS
  helpers: {
    loadTemplate: function(template) {
      $.ajax({
        url:'cmn/tmpl/' + template + '.tmpl',
        success: function(tmpl) {
          $.template(template, tmpl);
        },
        error: function(x, y) {
          // console.log(x, y);
        }
      });
      
    }, // loadTemplate
    fadeToggle: null
  },

  // HANDLERS
  handlers: {
    
    moveTo: function(e, args) {
      args.$target.get(0).scrollIntoView();
    }, // moveTo
    
    slideTo: function(e, args) {
      if(Modernizr.csstransitions) {
        args.$target.toggleClass('open');
        
      }
      else {
        if(args.$target[0].offsetHeight>=args.node.getAttribute('data-open')) {
          args.$target.animate({height:args.node.getAttribute('data-closed')}, function() { args.$target.toggleClass('open'); }); 
        }
        else {
          args.$target.animate({height:args.node.getAttribute('data-open')}, function() { args.$target.toggleClass('open'); } ); 
        }
      }
    }, // slideTo
    
    closeModal: function(e, args) {
      if(e.type==='click' || (e.type==='keydown' && e.keyCode===27)) {
        ixd.$screen.animate({opacity:0}, function() { ixd.$screen.removeClass('open'); } );
        $(window).unbind('keydown', ixd.handlers.closeModal);
      }
    },
    
    openModal: function(e, args) {
      ixd.$modal.html(
        $.tmpl('modal_tout', ixd.touts[args.node.getAttribute('data-content')])
      );
      ixd.$screen.addClass('open').animate({opacity:1}, 50);
      $(window).bind('keydown', ixd.handlers.closeModal);
      if(!!$.browser.msie && $.browser.version.indexOf('6')===0) {
        window.scrollTo(0,0);
      }
    }
    
  }, // handlers
  
  // methods 
  doClickActions: function(e) {
    var node = this;
    var actions = [],
        data = {},
        toggles = [],
        target = null,
        targetParent = null;
    if(node.tagName.toLowerCase()=='a' && !node.getAttribute('data-return')) {
      e.preventDefault();
    }
    if(node.getAttribute('data-c-actions')) {
      actions = node.getAttribute('data-c-actions').split(' ');  
    }
    
    if(node.getAttribute('data-c-args')) {
      data = $.parseJSON(node.getAttribute('data-c-args'));
    }
    try {
      if(node.tagName.toLowerCase()=='a') {
        var hash = node.hash;
        if(!!hash) {
          target = $(hash);
          targetParent = $(target).parent();
        }
        else {
          target = node.href;
        }
      }
    }
    catch(e) {
      //
    }
    for(var i=0, aLen=actions.length, action; i<aLen; i++) {
      action = actions[i];
      if(typeof ixd.handlers[action]!=='undefined') {
        ixd.handlers[action]( e, {
          node: node,
          title: node.getAttribute('data-title') ? node.getAttribute('data-title') : null,
          href: node.getAttribute('href') ? node.getAttribute('href').split('#')[0] : null,
          $target: target,
          $targetParent: targetParent,
          $data: typeof data[action]!=='undefined' ? data[action] : data
        });
      }
    }
  }, // doClickActions

  activateNav: function() {
    $('#main-nav li a').each(function() {
      var h = this.href.indexOf('http')>=0 ? this.href.split('.org/')[1] : this.href;
      var l = location.pathname.substr(1);
      if(h===l || h+'/'===l || h===l+'/') {
        $(this).addClass('current');
      }
    });
  }, // activateNav

  _init: function() {
    ixd.page = document.getElementsByTagName('body')[0].id;
    if(ixd.page!=='submit') {
      for(var t in ixd.templates) {
        ixd.helpers.loadTemplate( ixd.templates[t]);
      }
    }
    ixd.activateNav();
    $('[data-c-actions]').live('click', ixd.doClickActions);
    // $('.tout:has(.tout-link[data-c-actions])').bind('click', function(e) {
    //   if(e.target.tagName.toLowerCase()!=='a') {
    //     $(this).find('.tout-link[data-c-actions]').click();
    //   }
    // });
  } // _init

}; // ixd

if(typeof window.ixda==='undefined') {
  window.ixda = {};
}
ixda.ixd = ixd;

ixd._init();

})();