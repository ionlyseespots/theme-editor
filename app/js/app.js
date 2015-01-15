var Simple = {};

Simple.app = angular.module('SimpleApp',['ngRoute', 'FBAngular', 'textAngular', 'ngSanitize', 'ui.bootstrap', 'ui.bootstrap.modal', 'colorpicker.module', 'ngClipboard'])
    .config(['ngClipProvider', function(ngClipProvider) {
        ngClipProvider.setPath("../bower_components/zeroclipboard/dist/ZeroClipboard.swf");
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/headerTemplate', {templateUrl: 'partials/header.html', controller: 'themeEditorCtrl'});
        $routeProvider.when('/loginBackground', {templateUrl: 'partials/loginBackground.html', controller: 'themeEditorCtrl'});
        $routeProvider.when('/newTemplate', {templateUrl: 'partials/newTemplate.html', controller: 'themeEditorCtrl'});
        $routeProvider.when('/desktopTheme', {templateUrl: 'partials/desktopTheme.html', controller: 'themeEditorCtrl'});
        $routeProvider.when('/colorEditor', {templateUrl: 'partials/colorEditor.html', controller: 'colorThemeCtrl'});
        $routeProvider.when('/snippets', {templateUrl: 'partials/snippets.html', controller: 'themeEditorCtrl'});
        $routeProvider.otherwise({redirectTo: '/desktopTheme'});
    }]);