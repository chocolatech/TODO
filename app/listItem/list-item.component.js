angular.module('listItem').component('listItem', {
    bindings: {
        data: '='
    },
    templateUrl: 'listItem/list-item.template.html',
        controller: [function () {
        var vm = this;
        vm.inputs = false;

        vm.setInput = function () {
            vm.inputs = !vm.inputs;
            //vm.changeState();
        }

        // vm.changeState = function(){
        //    var data = ListItemsService.getListItems();
        //     if(vm.inputs){
        //         data[1].state = 'lol';
        //     }
        // };

    }]
})