//= require ../client/lib/angular/angular.js
//= require ../client/lib/angular-cookies/angular-cookies.js
//= require ../client/lib/angular-route/angular-route.js
//= require ../client/lib/angular-resource/angular-resource.js
//= require ../client/lib/angular-sanitize/angular-sanitize.js
//= require ../client/lib/angular-ui/build/angular-ui.js
//= require ../client/app/app
//= require ../client/app/controllers/expertise_controller
//= require ../client/app/controllers/welcome_controller
//= require ../client/lib/angular-bootstrap/ui-bootstrap-tpls.min
//= require ../client/lib/textAngular/dist/textAngular-sanitize.min
//= require ../client/lib/textAngular/dist/textAngular.min
//= require ../client/lib/jquery/jquery.min.js

!function($) {
	$("#sign_out").click(function() {
		window.location.href = '/';
	});

	$("#logout").remove();

	$("#sign_up").click(function() {
		window.location.href = '/users/sign_up';
	});

}(jQuery);