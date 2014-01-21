var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/app/phones/phones.json').success(function (data) {
            $scope.phones = data;
        });
        $scope.Message = "World";
        $scope.orderProp = 'age';
    }]);