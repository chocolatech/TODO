angular.module('core', []).service('ListItemsService', ['$http', function ($http) {
    var vm = this;

    vm.getListItems = function () {
        return $http.get('/list');
    };
}
]);