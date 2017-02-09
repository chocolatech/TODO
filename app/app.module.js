angular.module('app', ['core', 'listItem', 'listContainer', 'addItem'])
    .run(function (ListItemsService) {
       ListItemsService.initListItems();
    });