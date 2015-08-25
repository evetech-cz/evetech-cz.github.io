angular.module('app', [
    'components.scroll-position'
])

.constant('AppInfo', {
    APP_NAME: 'EVEIT',
    APP_VERSION: '20150504.0.01'
})


.config(function () {

})

.run(function ($rootScope, AppInfo) {
    $rootScope.AppInfo = AppInfo;
})

.controller('app:Index', function ($scope, $rootScope, $window) {

    /*
     *  Scroll monitoring
     */
    $scope.scroll = 0;

    /*
     * TOP tlacitko pro scroll up
     */
    $scope.scroll = 0;
    $scope.goTop = function () {
        $window.scrollTo(0, 0);
    };
    $scope.goTop();


})
;