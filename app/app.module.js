angular.module('app', ['core', 'listItem', 'listContainer', 'addItem'])
    .constant('Constants', {
        states: ['todo', 'done', 'inProgress']
    }).run(function (ListItemsService) {
       ListItemsService.initListItems();
    });