angular.module('listContainer').component('listContainer', {
    templateUrl: 'listContainer/list-container.template.html',
        controller: ['ListItemsService', function(ListItemsService){
        var vm = this;

        ListItemsService.getListItems().then(function(response){
            vm.items = response.data.items;
        })
    }]
})