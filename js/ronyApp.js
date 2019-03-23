
var app = angular.module('ronyApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'view/home.html',
		controller: 'mainCtrl'
	})
	.when('/planos/:skuPlano/:nomePlano', {
		templateUrl: 'view/planos.html',
		controller: 'planosCtrl'
	});
	

}]);


app.controller('mainCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas').then(function(response){
		$scope.plataformas = response.data.plataformas;
	})

}]) 

app.controller('planosCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$scope.skuPlano = $routeParams.skuPlano;
	$scope.nomePlano = $routeParams.nomePlano;

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/'+$routeParams.skuPlano).then(function(response){
		$scope.todosPlanos = response.data.planos;
	})

}]) 