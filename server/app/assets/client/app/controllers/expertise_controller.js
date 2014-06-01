'use strict';

angular.module('expertise.controllers', []).
	controller('expertiseController', function ($scope, $http, $cookieStore, $location, $cookies, $modal) {

		$scope.expertise_list = [];
		$scope.alnernative_list = [];

		$http.get("/expertise.json").success(function(res){
			$scope.expertise_list = res;
		});

		$scope.tabs = [
			{ title:'Альтернативи', content:'Dynamic content 1' },
			{ title:'Критерії', content:'Dynamic content 2', disabled: true }
		];

		$scope.singOut = function () {
			$cookieStore.remove('_expertise_session');
			delete $cookies['_expertise_session'];
			$location.path("/users/sign_in");
			$http.delete('/users/sign_out').success(function() {
				console.log('ok');
			});
		}

		$scope.add_expertise =function() {
			$scope.show_expertise = true;
		}

		$scope.add_alternative = function() {
			$scope.show_form_expertise = true;
		}

		$scope.addAlternative = function(name) {
			$scope.alnernative_list.push(name);
		}

		$scope.show = function(item) {
			$scope.expertiseName = item.name;
		}

		$scope.openModalWindow = function () {
			var modalInstance = $modal.open({
				templateUrl: 'templates/add_expertise_modal.html',
				controller: expertiseModalCtrl,
				resolve: {
					expertiseList: function () { return $scope.expertise_list; }
				}
			});
		};

		var expertiseModalCtrl = function ($scope, $modalInstance, expertiseList) {
			$scope.save = function(name) {
				expertiseList.push({ name: name });
				$http.post("/expertizes.json", { name: name, method: "test" }).success(function(res){
					$scope.cancel();
				});
			}

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
		};


	});