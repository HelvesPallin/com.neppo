var editarPessoasControllerApp = angular.module("editarPessoasControllerApp", []);

editarPessoasControllerApp.controller("editarPessoasController", function($scope, $http, $window, $location){

    $scope.id = null;
    $scope.nome = null;
    $scope.login = null;
    $scope.senha = null;

    var url = $location.absUrl();
    var urlNumber = url.substring(49);

    $scope.init = function(){
        var resultado = $http.get("../consultarPorId/"+urlNumber);

        resultado.success(function(data, status, headers, config){

            $scope.id = data.id;
            $scope.nome = data.nome;
            $scope.login = data.login;
            $scope.senha = data.senha;

        });
        resultado.error(function(data, status, headers, config){

            $window.alert(data);

        });
    }

    $scope.editarPessoas = function(){

        var pessoasModel = new Object();

        pessoasModel.id = $scope.id;
        pessoasModel.nome = $scope.nome;
        pessoasModel.login = $scope.login;
        pessoasModel.senha = $scope.senha;

        var resultadoModel = $http.post("../editarPessoas", pessoasModel);

        resultadoModel.success(function(data, status, headers, config){

            if(data.codigo == 1){

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