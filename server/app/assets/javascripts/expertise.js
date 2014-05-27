//= require ../client/lib/angular/angular.js
//= require ../client/lib/angular-cookies/angular-cookies.js
//= require ../client/lib/angular-route/angular-route.js
//= require ../client/lib/angular-resource/angular-resource.js
//= require ../client/lib/angular-sanitize/angular-sanitize.js
//= require ../client/lib/angular-ui/build/angular-ui.js
//= require ../client/app/app
//= require ../client/app/controllers/expertise_controller
//= require ../client/app/controllers/welcome_controller

!function() {
	var sign_out = document.getElementById("sign_out");
	sign_out.addEventListener("click", function() {
		window.location.href = '/';
	}, false);
}();