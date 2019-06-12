angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope,$scope,$http) {
  var pokemon = angular.module("pokemon",[])
  $scope.pokedexB = [];
  for (var i = 0; i <= 100; i++) {
    $http({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/"+i
  }).then(function callbackSuccess(y){
    $scope.pokedexB.push(y);
  })
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
