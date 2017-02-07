angular.module('listItem').component('listItem', {
    templateUrl: 'listItem/list-item.template.html',
    controller: ['ListItemsService', function(ListItemsService){
        var vm = this;

        ListItemsService.getListItems().then(function(response){
            vm.list = response.data;
        })
    }]
})