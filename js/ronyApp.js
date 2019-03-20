
var app = angular.module('ronyApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'view/home.html'
	})	
	.when('/TBT01', {
		templateUrl: 'view/tablet.html'
	})
	.when('/CPT02', {
		templateUrl: 'view/computador.html'
	})

}]);

app.controller('mainCtrl', function($http) {
	var vm = this;

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas').then(function(response){
		vm.plataformas = response.data.plataformas;
	})

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01').then(function(response){
		vm.planoTablet = response.data.planos;
	})

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02').then(function(response){
		vm.planoComputador = response.data.planos;
	})

});