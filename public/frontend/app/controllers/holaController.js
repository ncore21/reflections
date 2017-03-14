'use strict';

angular.module('myApp').controller('holaController',[
	'$scope',
	function($scope){
		$scope.nombre = "Nicolas Cordoba";
		$scope.nuevoComentario = {};
		$scope.comentarios = [
			{
				comentario : "Buen Tutorial",
				username : "codigofacilito"
			},{
				comentario : "Malisimo!!!!",
				username : "nicolascba"
			}
		];

		$scope.agregarComentario = function(){
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario = {};
		};
	}
	]);