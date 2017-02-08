angular.module('listContainer').component('listContainer', {
    templateUrl: 'listContainer/list-container.template.html',
    controller: ['ListItemsService', function (ListItemsService) {
        var vm = this;

        vm.refresh = function () {
            vm.items = ListItemsService.getListItems();
        };
        vm.refresh();
    }]
})