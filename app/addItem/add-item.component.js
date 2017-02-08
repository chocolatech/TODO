angular.module('addItem').component('addItem', {
    bindings: {
        'onRefresh': '&'
    },
    templateUrl: 'addItem/add-item.template.html',
    controller: ['ListItemsService', function (ListItemsService) {

        var vm = this;

        vm.$onInit = function $onInit() {
            vm.reset();
        };

        vm.reset = function () {
            vm.newItem = { 'text': '', 'state': 'todo' };
            vm.newItemText = '';
        };

        vm.addNewItem = function () {
            vm.newItem.text = vm.newItemText;
            ListItemsService.addListItem(vm.newItem);
            vm.reset();
            vm.onRefresh();
        };

    }]
})