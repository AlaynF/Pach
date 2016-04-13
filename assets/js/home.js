/* SHIT IS IN SCRAPE.JS FOR LOGIN CONTROL */

window.app.controller('home', function($scope, $http, $location, $window) {
    document.title="Home";

    $scope.info = {}
    var rats = ['grimy', 'grubby', 'filthy', 'mucky', 'stained', 'unwashed', 'greasy', 'muddy', 'dusty', 'sooty'];
    var ads = [	'plump', 'stout', 'overweight', 'large', 'chubby', 'portly', 'flabby', 'beer-bellied', 'meaty', 'heavyset'];
    var insults = ['buttpirate','cockshiner','assclown','fudgepacker','cocksmoker','dicklicker','dickbreath','cockgobbler','rumpranger','thundercunt'];

    $scope.showRat = function(justHeader) {
        $scope.ad = ads[Math.floor(Math.random() * ads.length)];
        $scope.insult = insults[Math.floor(Math.random() * insults.length)];
        $scope.rat = rats[Math.floor(Math.random() * rats.length)];

        if (justHeader) {
            $scope.roastheader = ('Ricardo is a ' + $scope.rat + ' '+ $scope.ad + ' '+ $scope.insult + ', rat.');
        } else {
            $scope.roast = ('Ricardo is a ' + $scope.rat + ' '+ $scope.ad + ' '+ $scope.insult + ', rat.');
        }
    }

    $scope.showRat(true);

    $scope.images = [{
        src: 'http://rdcnewscdn.realtor.com/wp-content/uploads/2016/03/Pizza-rat-Imgur.gif',
        title: 'Pic 1'
    }, {
        src: 'http://cdn.smosh.com/sites/default/files/2015/10/halloween-rat-excited-candy.gif',
        title: 'Pic 2'
    }, {
        src: 'http://gif-finder.com/wp-content/uploads/2015/10/Baby-eating-spaghetti.gif',
        title: 'Pic 3'
    }];


    $scope.searchinfo = function(searchString) {
        var gif = $scope.info.string || searchString;

        if (!gif) {
            return;
        }

        gif = encodeURI(gif);

        console.log(gif);

        $http.get('http://api.giphy.com/v1/gifs/search?q='+ gif +'&api_key=dc6zaTOxFJmzC')
        .success(function (result) {
            result = result.data.splice(0, 12);

            $scope.gifResult = result;
        });
    }

    $scope.searchinfo('rat eating');

});
