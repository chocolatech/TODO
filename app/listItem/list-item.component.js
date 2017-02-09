angular.module('listItem', ['core']).component('listItem', {
    bindings: {
        data: '=',
        index: '=',
        onRefresh: '&'
    },
    templateUrl: 'listItem/list-item.template.html',
        controller: ['ListItemsService', function (ListItemsService) {
        var vm = this;

        vm.setInput = function () {
            var state;
            if(vm.data.item.state == 'done'){
                state = 'todo';
            } else {
                state = 'done';
            }
            ListItemsService.changeState(vm.index, state);
            vm.onRefresh();
        }

    }]
})