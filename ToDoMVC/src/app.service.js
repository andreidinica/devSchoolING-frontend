(function (module) {

    var toDoService = function () {

        var getItems = function () {
            return [
                {"action": "Make slides", "done": false},
                {"action": "Travel to ING", "done": false},
                {"action": "Prepare room", "done": false},
                {"action": "Order pizza", "done": false}
            ];
        };

        return {
            getItems: getItems
        };
    };

    module.factory("toDoService", toDoService);
}(angular.module("toDoApp")));