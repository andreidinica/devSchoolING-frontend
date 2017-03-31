(function (module) {

    var ToDoCtrl = function () {
        var vm = this;

        vm.todo = {
            user: "Radu"

        };
        vm.todo.items = toDoService.getItems();


        vm.addNewItem = function (actionText) {
            vm.todo.items.push({action: actionText, done: false});
        };
        vm.incompleteCount = function () {
            var count = 0;
            angular.forEach(vm.todo.items, function (item) {
                if (!item.done) {
                    count++;
                }
            });
            return count;
        };

        vm.warningLevel = function () {
            return vm.incompleteCount() < 3 ? "label-success" : "label-warning";
        };

    };

    module.controller("ToDoCtrl", ToDoCtrl);

}(angular.module("toDoApp")));