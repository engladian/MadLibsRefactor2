var app = angular.module('appMadLibs', [])

app.controller('madLibsCtrl', function($scope) {

    // $scope.data = {}
    $scope.submit = function() {
        $scope.submitted = true
        console.log($scope.madLibsForm)
        // $showStoryText = true
    }

    $scope.reset = function() {
        $scope.data = {}
        $scope.submitted = false
        $scope.madLibsForm.$setPristine()
        $scope.showStoryText = false
    }
})

