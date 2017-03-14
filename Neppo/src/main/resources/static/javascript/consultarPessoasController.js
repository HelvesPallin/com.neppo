var consultarPessoasControllerApp = angular.module("consultarPessoasControllerApp", []);

consultarPessoasControllerApp.controller("consultarPessoasController", function( $scope, $window, $http){

    $scope.pessoas = new Array();

    $scope.init = function(){

        var resultado = $http.get("consultarTodos");

        resultado.success(function(data, status, headers, config){
            console.log(data);

            $scope.pessoas = data;

        });
        resultado.error(function(data, status, headers, config){

            $window.alert(data);

        });

    }

    $scope.excluirPessoas = function(id){

        if($window.confirm("Deseja realmente excluir essa pessoa?")){

            var resultado = $http.delete("excluirPessoas/" + id);

            resultado.success(function(data, status, headers, config){

                $scope.init();
            });

            resultado.error(function(data, status, headers, config){

                $window.alert(data);
            });


        }

    }
});