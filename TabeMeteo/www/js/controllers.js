angular.module('starter.controllers', [])  

.controller('meteoCtrl',function($scope){})

.controller('login2Ctrl', function($scope,$state) {
$scope.goMeteo = function () {
    $state.go('meteo');
  }
$scope.goReg = function () {
    $state.go('registrazione');
}})


.controller('regCtrl', function($scope,$state) {

$scope.goLogin = function () {
    $state.go('login');
}})

.controller('DashCtrl', function($scope) {})

.controller('settingsCtrl', function($scope,$state,$scope,$state) {
$scope.goLogin = function () {
    $state.go('login');
    
}})

.controller('loginCtrl', function($scope, gestioneNavigatore, $state,$scope,$state) {
 
$scope.goMeteo = function () {
    $state.go('meteo');
  }
$scope.goReg = function () {
    $state.go('registrazione');
  
  }
  

  $scope.pippoFunction = function () {
    
    $scope.pippo = gestioneNavigatore.functionChangeValue();
  }


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  
  };
});
