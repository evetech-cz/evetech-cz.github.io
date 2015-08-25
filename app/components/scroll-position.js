angular.module('components.scroll-position', [
])

.directive('scrollPosition', function ($window) {
    return function (scope, element, attrs) {
        var windowEl = angular.element($window);
        windowEl.on('scroll', function () {
            if (!scope.$$phase) scope.$apply(function () {
                // pageYOffset IE11
                scope[attrs.scrollPosition] = $window.scrollY || $window.pageYOffset;
            });
        });
    };
})
;