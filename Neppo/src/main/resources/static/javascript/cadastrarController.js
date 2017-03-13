var cadastrarControllerApp = angular.module("cadastrarControllerApp", []);

cadastrarControllerApp.controller("cadastrarController", function($scope, $window, $http){

    $scope.nome = null;
    $scope.login = null;
    $scope.senha = null;

    $scope.salvarPessoas = function(){

        var pessoasModel = new Object();

        pessoasModel.nome = $scope.nome;
        pessoasModel.login = $scope.login;
        pessoasModel.senha = $scope.senha;

        var resultadoModel = $http.post("salvarPessoas", pessoasModel);

        resultadoModel.success(function(data, status, headers, config){

            if(data.codigo == 1){

                $window.alert(data.mensagem);

            }
            else{

                $window.alert(data.mensagem);

            }
        });

        resultadoModel.error(function(data, status, headers, config){

            $window.alert(data.mensagem);

        });

    };


});