<?php
function CacheFor($n) {
  header('Expires: ' . date('D, d M Y H:i:s',time()+$n) . ' GMT');
  header('Cache-Control: max-age='.$n);
  header('Pragma: no-cache');
}
CacheFor(100);
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title><?php echo $pageTitle; ?> :: Interaction|12 :: Dublin, Ireland :: February 1-4, 2012</title>
<link rel="shortcut icon" href="http://interaction12.ixda.org/favicon.png" />
<meta name="Description" content="Interaction|12 :: Dublin, Ireland" />
<meta name="Keywords" content="Interaction|12, Interaction|12, Interaction 12, IxDA, IxD12, Ix12, Interaction Design, Interaction Design Association, Interaction Design Conference, Design Conference, UX, UX Design, UX Conference, User Experience, User Experience Design, Design Conference, @IxDConf, interaction conference, interaction design conference, design conferences europe" />
<link rel="stylesheet" type="text/css" href="/cmn/c/global.css?rnd=<?php echo rand(1234567,9878654321); ?>" />
<!--[if lt IE 9]>
<link rel="stylesheet" type="text/css" href="cmn/c/ie.css?rnd=<?php echo rand(1234567,9878654321); ?>" />
<![endif]-->
<!--[if lt IE 8]>
<link rel="stylesheet" type="text/css" href="cmn/c/ie7.css?rnd=<?php echo rand(1234567,9878654321); ?>" />
<![endif]-->
<!--[if lt IE 7]>
<link rel="stylesheet" type="text/css" href="cmn/c/ie6.css?rnd=<?php echo rand(1234567,9878654321); ?>" />
<![endif]-->

<!-- <link rel="stylesheet" type="text/css" href="cmn/c/mobile.css?rnd=<?php echo rand(1234567,9878654321); ?>" /> -->
<script src="/cmn/j/libs/modernizr-1.6.min.js"></script>
<script src="/cmn/j/libs/jquery.min.js"></script>
<?php if($pageID=="submissions"): ?>
  <link rel="stylesheet" type="text/css" href="/cmn/c/wufoo.css?rnd=<?php echo rand(1234567,9878654321); ?>" />

<?php endif; ?>
</head>
<body id="<?php echo $pageID; ?>">
<div class="container">
  <div class="c">
    <header class="masthead">
      <div class="banner"><div class="wrap">
        <h1><a href="http://interaction12.ixda.org/" title="Interaction|12" class="logo main-logo ixd12">Interaction|12 :: Dublin, Feb 01-04</a></h1>
        <a class="fancy-button sponsor-button" href="#sponsorship" data-c-actions="moveTo">Sponsor Interaction|12</a>
      </div></div>
      <nav id="main-nav" class="nav"><div class="wrap">
        <ul>
          <li><a href="/" title="Interaction|12">Home</a></li>
          <li><a href="/submit" title="Submit your proposal">Call for Presenters</a></li>
          <?php /*<li><a href="#">Speakers</a></li>
          <li><a href="#">Getting There</a></li>
          <li><a href="#">About</a></li>*/?>
        </ul>
        <div class="social">
          <a href="http://facebook.com/Interaction12" class="facebook" title="Facebook" target="_blank">Facebook</a>
          <a href="http://twitter.com/ixdconf" class="twitter" title="Twitter" target="_blank">Twitter</a>
        </div>
      </div></nav>
    </header>
    <div class="main-content" id="<?php echo $pageID; ?>-content"><div class="wrap">

