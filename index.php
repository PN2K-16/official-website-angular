<!DOCTYPE html>
<html ng-app="pn2k">
	<head>

		<!-- Basic -->
		<meta charset="utf-8">
		<title>PN2K</title>
		<meta name="keywords" content="PN2K Solutions" />
		<meta name="description" content="Official website of PN2K Solutions">
		<meta name="author" content="Nilesh Jayanandana">

		<!-- Mobile Metas -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Web Fonts  -->
		<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light" rel="stylesheet" type="text/css">

		<!-- Vendor CSS -->
		<link rel="stylesheet" href="vendor/bootstrap/bootstrap.css">
		<link rel="stylesheet" href="vendor/fontawesome/css/font-awesome.css">
		<!--<link rel="stylesheet" href="vendor/owlcarousel/owl.carousel.min.css" media="screen"> -->
		<link rel="stylesheet" href="node_modules/owl.carousel/dist/assets/owl.carousel.css" media="screen">
		<link rel="stylesheet" href="node_modules/owl.carousel/dist/assets/owl.theme.default.css" media="screen">
		<!--<link rel="stylesheet" href="vendor/owlcarousel/owl.theme.default.min.css" media="screen">-->
		<link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.css" media="screen">

		<!-- Theme CSS -->
		<link rel="stylesheet" href="css/theme.css">
		<link rel="stylesheet" href="css/theme-elements.css">
		<link rel="stylesheet" href="css/theme-blog.css">
		<link rel="stylesheet" href="css/theme-shop.css">
		<link rel="stylesheet" href="css/theme-animate.css">

		<!-- Current Page CSS -->
		<link rel="stylesheet" href="vendor/rs-plugin/css/settings.css" media="screen">
		<link rel="stylesheet" href="vendor/circle-flip-slideshow/css/component.css" media="screen">

		<!-- Skin CSS -->
		<link rel="stylesheet" href="css/skins/default.css">

		<!-- Theme Custom CSS -->
		<link rel="stylesheet" href="css/custom.css">

		<!-- Head Libs -->
		<script src="vendor/modernizr/modernizr.js"></script>

		<!--[if IE]>
<link rel="stylesheet" href="css/ie.css">
<![endif]-->

		<!--[if lte IE 8]>
<script src="vendor/respond/respond.js"></script>
<script src="vendor/excanvas/excanvas.js"></script>
<![endif]-->

	</head>
	<body>
		<div class="body">
			<!--header -->
			<header id="header" class="flat-menu single-menu">
				<div class="container">
					<div class="logo">
						<a href="index.html">
							<img alt="Porto" width="111" height="54" data-sticky-width="82" data-sticky-height="40" src="img/logo.png">
						</a>
					</div>
					<button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse">
						<i class="fa fa-bars"></i>
					</button>
				</div>
				<div class="navbar-collapse nav-main-collapse collapse">
					<div class="container">

						<nav class="nav-main mega-menu">
							<ul class="nav nav-pills nav-main" id="mainMenu">
								<li  ui-sref-active="active">
									<a   ui-sref="home" href="">
										Home 
									</a>
								</li> 
								<li  ui-sref-active="active">
									<a   ui-sref="about" href="">
										About Us 
									</a>
								</li> 
								
								<li  ui-sref-active="active">
									<a   ui-sref="portfolio" href="">
										Portfolio 
									</a>
								</li> 
								
								<li  ui-sref-active="active">
									<a   ui-sref="contact-us" href="">
										Contact Us 
									</a>
								</li> 
							</ul>
						</nav>
					</div>
				</div>
			</header>

			<div ui-view ></div>

			<footer id="footer">
				<div class="container">
					<div class="row">
						<div class="footer-ribbon">
							<span>Get in Touch</span>
						</div>
						<div class="col-md-3">
							<div class="newsletter">
								<h4>Newsletter</h4>
								<p>Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.</p>

								<div class="alert alert-success hidden" id="newsletterSuccess">
									<strong>Success!</strong> You've been added to our email list.
								</div>

								<div class="alert alert-danger hidden" id="newsletterError"></div>

								<form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST">
									<div class="input-group">
										<input class="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text">
										<span class="input-group-btn">
											<button class="btn btn-default" type="submit">Go!</button>
										</span>
									</div>
								</form>
							</div>
						</div>
						<div class="col-md-3">
							<h4>Latest Tweets</h4>
							<div id="tweet" class="twitter" data-plugin-tweets data-plugin-options='{"username": "", "count": 2}'>
								<p>Please wait...</p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="contact-details">
								<h4>Contact Us</h4>
								<ul class="contact">
									<li><p><i class="fa fa-map-marker"></i> <strong>Address:</strong> 1234 Street Name, City Name, United States</p></li>
									<li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> (123) 456-7890</p></li>
									<li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:mail@example.com">mail@example.com</a></p></li>
								</ul>
							</div>
						</div>
						<div class="col-md-2">
							<h4>Follow Us</h4>
							<div class="social-icons">
								<ul class="social-icons">
									<li class="facebook"><a href="http://www.facebook.com/" target="_blank" data-placement="bottom" data-tooltip title="Facebook">Facebook</a></li>
									<li class="twitter"><a href="http://www.twitter.com/" target="_blank" data-placement="bottom" data-tooltip title="Twitter">Twitter</a></li>
									<li class="linkedin"><a href="http://www.linkedin.com/" target="_blank" data-placement="bottom" data-tooltip title="Linkedin">Linkedin</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="container">
						<div class="row">
							<div class="col-md-1">
								<a href="index.html" class="logo">
									<img alt="Porto Website Template" class="img-responsive" src="img/logo-footer.png">
								</a>
							</div>
							<div class="col-md-7">
								<p>© Copyright 2015. All Rights Reserved.</p>
							</div>
							<div class="col-md-4">
								<nav id="sub-menu">
									<ul>
										<li><a href="page-faq.html">FAQ's</a></li>
										<li><a href="sitemap.html">Sitemap</a></li>
										<li><a href="contact-us.html">Contact</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>

		<!-- Vendor -->
		<script src="vendor/jquery/jquery.js"></script>
		<script src="vendor/jquery.appear/jquery.appear.js"></script>
		<script src="vendor/jquery.easing/jquery.easing.js"></script>
		<script src="vendor/jquery-cookie/jquery-cookie.js"></script>
		<script src="vendor/bootstrap/bootstrap.js"></script>
		<script src="vendor/common/common.js"></script>
		<script src="vendor/jquery.validation/jquery.validation.js"></script>
		<script src="vendor/jquery.stellar/jquery.stellar.js"></script>
		<script src="vendor/jquery.easy-pie-chart/jquery.easy-pie-chart.js"></script>
		<script src="vendor/jquery.gmap/jquery.gmap.js"></script>
		<script src="vendor/isotope/jquery.isotope.js"></script>
		<script src="node_modules/owl.carousel/dist/owl.carousel.js"></script>
		<!--<script src="vendor/owlcarousel/owl.carousel.min.js"></script> -->
		<script src="vendor/jflickrfeed/jflickrfeed.js"></script>
		<script src="vendor/magnific-popup/jquery.magnific-popup.js"></script>
		<script src="vendor/vide/vide.js"></script>

		<!-- Theme Base, Components and Settings -->
		 <script src="js/theme.js"></script> 

		<!-- Specific Page Vendor and Views -->
		<script src="vendor/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
		<script src="vendor/rs-plugin/js/jquery.themepunch.revolution.js"></script>
		<script src="vendor/circle-flip-slideshow/js/jquery.flipshow.js"></script>


		<!-- Theme Custom -->
		<!--<script src="js/custom.js"></script>-->



		<script src="node_modules/angular/angular.js"></script>
		<script src="node_modules/angular-ui-router/release/angular-ui-router.js"></script>


		<script src="app/app.js"></script>
		<script src="app//controller.home.js"></script>

		<!-- Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information.
<script type="text/javascript">

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-12345678-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

</script>
-->

	</body>
</html>
