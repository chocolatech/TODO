angular.module('addItem').component('addItem', {
    bindings: {
        data: '='
    },
    templateUrl: 'addItem/add-item.template.html',
    controller: [function () {
        var vm = this;
        vm.todoList = [{ todoText: 'Clean House', done: false }];

        vm.todoAdd = function () {
            vm.todoList.push({ todoText: vm.todoInput, done: false });
            vm.todoInput = "";
        };

    }]
})