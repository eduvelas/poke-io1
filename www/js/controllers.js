angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope,$scope,$http) {
  var pokemon = angular.module("pokemon",[])
  $scope.pokedexB = [];
  for (var i = 0; i <= 200; i++) {
    $http({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/"+i
  }).then(function callbackSuccess(y){
    $scope.pokedexB.push(y);
  })
}
})


.controller('ChatsCtrl', function($scope, Chats) {
  
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  
});
