
Simple.app.directive('trackActive', function($location) {
    function link(scope, element, attrs){
        scope.$watch(function() {
            return $location.path();
        }, function(){
            var links = element.find('a');
            links.removeClass('active');
            angular.forEach(links, function(value){
                var a = angular.element(value);
                if (a.attr('href') == '#' + $location.path() ){
                    a.addClass('active');
                }
            });
        });
    }
    return {link: link};
});