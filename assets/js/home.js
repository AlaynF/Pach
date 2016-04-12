/* SHIT IS IN SCRAPE.JS FOR LOGIN CONTROL */

window.app.controller('home', function($scope, $http, $location, $window) {
    document.title="Home";

    var rats = ["rat, pig, mule"]
    $scope.rat = rats[Math.floor(Math.random() * rats.length)];
    
})
