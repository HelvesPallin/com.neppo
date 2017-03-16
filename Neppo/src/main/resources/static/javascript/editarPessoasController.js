var editarPessoasControllerApp = angular.module("editarPessoasControllerApp", []);

editarPessoasControllerApp.controller("editarPessoasController", function($scope, $http, $window){

    $scope.id = null;
    $scope.nome = null;
    $scope.login = null;
    $scope.senha = null;

    $scope.editarPessoas = function(){

        var pessoasModel = new Object();

        pessoasModel.id = $scope.id;
        pessoasModel.nome = $scope.nome;
        pessoasModel.login = $scope.login;
        pessoasModel.senha = $scope.senha;

        var resultadoModel = $http.post("../editarPessoas", pessoasModel);

        resultadoModel.success(function(data, status, headers, config){

            if(data == 1){

                $window.alert(data.mensagem);
                $window.location.href = "../consultarPessoas.html";

            }
            else{

                $window.alert(data.mensagem);
            }
        });
        resultadoModel.error(function(data, status, headers, config){

            $window.alert(data);
        });
    }
});