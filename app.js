var myApp = angular.module("myApp", ['ui.compat']);

myApp.factory('ShoppingList', function (){
    return {
        items: [
            {id: '1', description: 'Cheese'},
            {id: '2', description: 'Bacon'}
        ]
    };
});

myApp.config(function ($stateProvider) {
    $stateProvider
    .state('shopping', {
        templateUrl: 'views/shopping.html'
    })
    .state('shopping.list', {
        url: '/shopping/list',
        templateUrl: 'views/shopping.list.html'
    })
    .state('shopping.item', {
        url: '/shopping/item/{itemId}',
        templateUrl: 'views/shopping.item.html',
    })
    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
    });
});

myApp.controller('MainController', function ($state) {
    $state.transitionTo('shopping.list');
});

myApp.controller('ShoppingListController', function ($scope) {
    $scope.shoppingList = {
        items: [
            {id: '1', description: 'Sausage'}
        ]
    };
});

myApp.controller('ShoppingItemController', function ($scope, $stateParams) {
    $scope.item = {id: $stateParams.itemId}
});
