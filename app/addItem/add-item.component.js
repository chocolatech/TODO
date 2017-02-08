angular.module('addItem').component('addItem', {
    bindings: {
        data: '='
    },
    templateUrl: 'addItem/add-item.template.html',
    controller: [function () {
        var vm = this;
        vm.items;

        vm.addNewItem = function () {

            vm.newItem = "";
        };

    }]
})