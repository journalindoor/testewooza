
var app = angular.module('ronyApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'view/plataformas.html',
		controller: 'mainCtrl'
	})
	.when('/planos/:skuPlataforma/:nomePlataforma/:posPlataforma', {
		templateUrl: 'view/planos.html',
		controller: 'planosCtrl'
	})
	.when('/dados/:skuPlataforma/:skuPlano/:posPlano', {
		templateUrl: 'view/dados.html',
		controller: 'dadosCtrl'
	});
	

}]);


app.controller('mainCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas').then(function(response){
		$scope.plataformas = response.data.plataformas;
	})

}]);

app.controller('planosCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$scope.skuPlataforma = $routeParams.skuPlataforma;
	$scope.nomePlataforma = $routeParams.nomePlataforma;
	$scope.nProd = 0;

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/'+$routeParams.skuPlataforma).then(function(response){
		$scope.todosPlanos = response.data.planos;
	})

}]);

app.controller('dadosCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$scope.skuPlataforma = $routeParams.skuPlataforma;
	$scope.skuPlano = $routeParams.skuPlano;
	var posPlano = $routeParams.posPlano;
	var planoEscolhido = [];

	$http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/'+$routeParams.skuPlataforma).then(function(response){
		$scope.planoEscolhido = response.data.planos[posPlano];
		planoEscolhido = $scope.planoEscolhido;
	})


	$scope.mostraDados = function (){
		var usunome = $scope.usuNome;
		var usuemail = $scope.usuEmail;
		var usunasc = $scope.usuNasc;
		var usucpf = $scope.usuCpf;
		var usutel = $scope.usuTel;
		if(
			usunome &&
			usuemail &&
			usunasc &&
			usucpf &&
			usutel
			){
			console.log('Nome: ', usunome);
		console.log('E-mail: ', usuemail);
		console.log('Nascimento: ', usunasc);
		console.log('CPF: ', usucpf);
		console.log('Tel.: ', usutel);
		console.log('----');
		console.log('SKU: ', planoEscolhido.sku);
		console.log('Franquia: ', planoEscolhido.franquia);
		console.log('Valor: ', planoEscolhido.valor);
		if(planoEscolhido.aparelho){
			console.log('Aparelho: ', planoEscolhido.aparelho.nome);
			console.log('Aparelho valor: ', planoEscolhido.aparelho.valor);
			console.log('Aparelho numero parcelas: ', planoEscolhido.aparelho.numeroParcelas);
			if(planoEscolhido.aparelho.valorParcelas){
				console.log('Aparelho valor parcelas: ', planoEscolhido.aparelho.valorParcelas);
			}
		}
		



	} 
	else {
		console.log('Tentou usar o formulário sem prencher os dados né?')
	}


}


}]);
