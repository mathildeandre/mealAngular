
/**
******************************************************************************************************************************************************************************************************
******************************************************************
 Contrôleur de la page de  ************ BREAKFAST ****************
******************************************************************
******************************************************************
 */
 
 var breakfastControllers = angular.module('breakfastControllers', []);
breakfastControllers.controller('breakfastCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "BIENVENUE ds les breakfast !!! =)";
		
    }
]);