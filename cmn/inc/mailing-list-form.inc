<!-- Begin MailChimp Signup Form -->
<!--[if IE]>
<style type="text/css" media="screen">
	#mc_embed_signup fieldset {position: relative;}
	#mc_embed_signup legend {position: absolute; top: -1em; left: .2em;}
</style>
<![endif]--> 
<!--[if IE 7]>
<style type="text/css" media="screen">
	.mc-field-group {overflow:visible;}
</style>
<![endif]-->

<div id="mc_embed_signup">
<form action="http://ixda.us2.list-manage.com/subscribe/post?u=807a0ff0086fc87b776c22333&amp;id=e0cbe0ecb3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
	<fieldset>
    <p>Be first to find out how to register, who’s speaking and what’s on the program.</p>
    <div class="mc-field-group">
      <?php // <label for="mce-EMAIL">Sign up for email updates:</label> ?>
      <input type="text" value="" name="EMAIL" class="required email frm-txt" id="mce-EMAIL">
      <input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" class="btn button" />
    </div>
    <div id="mce-responses">
      <div class="response response-error" id="mce-error-response"></div>
      <div class="response response-success" id="mce-success-response"></div>
    </div>
	</fieldset>	
	<a href="#" id="mc_embed_close" class="mc_embed_close" style="display: none;">Close</a>
</form>
</div>
<script>var jqueryLoaded=true;</script>
<script src="http://downloads.mailchimp.com/js/jquery.form-n-validate.js"></script>
<script>
var fnames = new Array();var ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';var err_style = '';
try{
    err_style = mc_custom_error_style;
} catch(e){
    err_style = 'margin:0; padding:.25em; color:#de0000; font-weight:bold; float:left; z-index: 1; width: 80%; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; ';
}
var head= document.getElementsByTagName('head')[0];
var style= document.createElement('style');
style.type= 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = 'div.mce_inline_error {' + err_style + '}';
} else {
  style.appendChild(document.createTextNode('div.mce_inline_error {' + err_style + '}'));
}
head.appendChild(style);
$(document).ready( function($) {
  var options = { errorClass: 'mce_inline_error', errorElement: 'div', onkeyup: function(){}, onfocusout:function(){}, onblur:function(){}  };
  var mce_validator = $("#mc-embedded-subscribe-form").validate(options);
  options = { url: 'http://ixda.us2.list-manage.com/subscribe/post-json?u=807a0ff0086fc87b776c22333&id=e0cbe0ecb3&c=?', type: 'GET', dataType: 'json', contentType: "application/json; charset=utf-8",
                beforeSubmit: function(){
                    $('#mce_tmp_error_msg').remove();
                    $('.datefield','#mc_embed_signup').each(
                        function(){
                            var txt = 'filled';
                            var fields = new Array();
                            var i = 0;
                            $(':text', this).each(
                                function(){
                                    fields[i] = this;
                                    i++;
                                });
                            $(':hidden', this).each(
                                function(){
                                	if ( fields[0].value=='MM' && fields[1].value=='DD' && fields[2].value=='YYYY' ){
                                		this.value = '';
									} else if ( fields[0].value=='' && fields[1].value=='' && fields[2].value=='' ){
                                		this.value = '';
									} else {
	                                    this.value = fields[0].value+'/'+fields[1].value+'/'+fields[2].value;
	                                }
                                });
                        });
                    return mce_validator.form();
                }, 
                success: mce_success_cb
            };
  $('#mc-embedded-subscribe-form').ajaxForm(options);

});
function mce_success_cb(resp){
    $('#mce-success-response').hide();
    $('#mce-error-response').hide();
    if (resp.result=="success"){
        $('#mce-'+resp.result+'-response').show();
        $('#mce-'+resp.result+'-response').html(resp.msg);
        $('#mc-embedded-subscribe-form').each(function(){
            this.reset();
    	});
    } else {
        var index = -1;
        var msg;
        try {
            var parts = resp.msg.split(' - ',2);
            if (parts[1]==undefined){
                msg = resp.msg;
            } else {
                i = parseInt(parts[0]);
                if (i.toString() == parts[0]){
                    index = parts[0];
                    msg = parts[1];
                } else {
                    index = -1;
                    msg = resp.msg;
                }
            }
        } catch(e){
            index = -1;
            msg = resp.msg;
        }
        try{
            if (index== -1){
                $('#mce-'+resp.result+'-response').show();
                $('#mce-'+resp.result+'-response').html(msg);            
            } else {
                err_id = 'mce_tmp_error_msg';
                html = '<div id="'+err_id+'" style="'+err_style+'"> '+msg+'</div>';
                
                var input_id = '#mc_embed_signup';
                var f = $(input_id);
                if (ftypes[index]=='address'){
                    input_id = '#mce-'+fnames[index]+'-addr1';
                    f = $(input_id).parent().parent().get(0);
                } else if (ftypes[index]=='date'){
                    input_id = '#mce-'+fnames[index]+'-month';
                    f = $(input_id).parent().parent().get(0);
                } else {
                    input_id = '#mce-'+fnames[index];
                    f = $().parent(input_id).get(0);
                }
                if (f){
                    $(f).append(html);
                    $(input_id).focus();
                } else {
                    $('#mce-'+resp.result+'-response').show();
                    $('#mce-'+resp.result+'-response').html(msg);
                }
            }
        } catch(e){
            $('#mce-'+resp.result+'-response').show();
            $('#mce-'+resp.result+'-response').html(msg);
        }
    }
}
</script>
<!--End mc_embed_signup-->