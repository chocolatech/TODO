angular.module('listItem').component('listItem', {
    bindings: {
        data: '='
    },
    templateUrl: 'listItem/list-item.template.html',
        controller: ['ListItemsService', function (ListItemsService) {
        var vm = this;
        vm.inputs = false;

        vm.setInput = function () {
            vm.inputs = !vm.inputs;
        }

    }]
})