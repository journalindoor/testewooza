
var app = angular.module('ronyApp', []);

app.controller('mainCtrl', function($http) {
	var vm = this;

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas').then(function(response){
		vm.plataformas = response.data.plataformas;
	})
  
});