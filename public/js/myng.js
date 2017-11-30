        var app = angular.module('routingDemoApp', ['ngRoute'])

        /**路由设置**/
        app.config(['$routeProvider', $routeProvider =>{
            $routeProvider
            .when('/', {template: 'Main Page'})
            .when('/page1', { templateUrl: 'components/template.html', controller: 'component1'})
            .when('/page2', { templateUrl: 'components/template.html', controller: 'component2'})
            .when('/page3', { templateUrl: 'components/template.html', controller: 'component3'})
            .otherwise({ redirecTo: '/'})
        }])