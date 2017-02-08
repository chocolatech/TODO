angular.module('addItem').component('addItem', {
    bindings: {
        data: '=',
        onSubmit: '&'
    },
    templateUrl: 'addItem/add-item.template.html',
    controller: [function () {
        var vm = this;

        vm.$onInit = function $onInit() {
            vm.newItem = {};
            resetTodo();
        };

        vm.submitForm = function submitForm() {
            vm.onSubmit({
                $event: {
                    todo: vm.newItem
                }
            });

            resetTodo();
        };

        function resetTodo() {
            vm.newItem = {};
        }


    }]
})