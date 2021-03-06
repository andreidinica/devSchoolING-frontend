(function(module) {

    var summary = function(cart) {
        return {
            restrict: "E",
            templateUrl: "views/cartSummary.html",
            controller: function () {

                var vm = this;
                vm.cartData = cart.getProducts();

                vm.total = function () {
                    var total = 0;
                    for (var i = 0; i < vm.cartData.length; i++) {
                        total += (vm.cartData[i].price * vm.cartData[i].count);
                    }
                    return total;
                }

                vm.itemCount = function () {
                    var total = 0;
                    for (var i = 0; i < vm.cartData.length; i++) {
                        total += vm.cartData[i].count;
                    }
                    return total;
                }
            },
            controllerAs: "vmt"
        };
    };
    module.directive("cartSummary", summary);

}(angular.module("cart")));