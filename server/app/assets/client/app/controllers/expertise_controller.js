'use strict';

angular.module('expertise.controllers', []).
	controller('expertiseController', function ($scope, $http, $cookieStore, $location, $cookies, $modal) {

		$scope.expertise_list = [];
		$scope.alnernative_list = [];
		$scope.alternative = {};

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

		$scope.addAlternative = function(name, expertise) {
			$http.post('/alternatives', {name: name, expertise: expertise}).success(function(res) {
				$scope.alnernative_list.push(res);
				$scope.alternative.name =  "";
			});
		}

		$scope.removeAlternative = function(alternative) {
			$http.delete('/alternatives/' + alternative.id).success(function(){
				var index = $scope.alnernative_list.indexOf(alternative);
				$scope.alnernative_list.splice(index, 1);
			});
		}

		$scope.show = function(item) {
			$http.get('/alternatives/' + item.id).success(function(res) {
//				var index = $scope.expertise_list.indexOf(item);
				$scope.alnernative_list = res;
			})
			$scope.expertise = item;
		}

		$scope.removeExpertise = function (expertise) {
			var index = $scope.expertise_list.indexOf(expertise);
			$scope.expertise_list.splice(index, 1);
			$http.delete('/expertizes/' + expertise.id + '.json').success(function(res) {
				console.log(res);
			});
		}

		$scope.openModalWindow = function () {
			var modalInstance = $modal.open({
				templateUrl: 'templates/expertise_modal.html',
				controller: expertiseModalCtrl,
				resolve: {
					expertiseList: function () { return $scope.expertise_list; }
				}
			});
		};

		$scope.editExpertise = function (expertise) {
			var modalInstance = $modal.open({
				templateUrl: 'templates/expertise_modal.html',
				controller: expertiseEditModalCtrl,
				resolve: {
					expertise: function () { return expertise; },
					expertiseList: function () { return $scope.expertise_list; }
				}
			});
		};

		var expertiseEditModalCtrl = function ($scope, $modalInstance, expertiseList, expertise) {
			$scope.expertise = angular.copy(expertise);
			$scope.edit = true;

			$scope.update = function(expertise) {
				$http.put('/expertizes/'+expertise.id + ".json", {expertize:expertise}).success(function(res) {
					var index = expertiseList.indexOf(expertise);
					for (var i = 0; i<expertiseList.length; i++) {
						if (expertiseList[i].id == expertise.id)
							expertiseList[i] = expertise;
					}
					$scope.cancel();
				});
			}

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
		};

		var expertiseModalCtrl = function ($scope, $modalInstance, expertiseList) {
			$scope.save = function(expertise) {
				expertiseList.push({ name: expertise.name, goal: expertise.goal });
				$http.post("/expertizes.json", { name: expertise.name, goal: expertise.goal, method: "test" }).success(function(res){
					$scope.cancel();
				});
			}

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
		};


	});