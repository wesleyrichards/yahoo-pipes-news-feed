//Define the Angular CONTROLLER
var myApp = angular.module('myApp',['ui.bootstrap']); //Add the Angular UI Bootstrap module to the app

//The Angular controller that is responsibe for getting the Yahoo pipe JSON feed
myApp.controller('yahoofeed', ['$scope','$http', function ($scope, $http){

	$scope.newsLoaded = false;	//flag to determine whether the news has been loaded so we can display a message to user whilst we are waiting
	$scope.loadError = false;	//flag to determine whether there was a problem loading the feed	

	//Angular JSONP  - to avoid cross domain issues.  Check the promise to determine the state of the request
	$http.jsonp('http://pipes.yahoo.com/pipes/pipe.run?_id=DqsF_ZG72xGLbes9l7okhQ&_render=json&_callback=JSON_CALLBACK')
	.success(function(data){
		$scope.newsfeed = data;	//Load the MODEL into the newsfeed object
		$scope.newsLoaded = true;
	})
	.error(function(data,status){
		$scope.loadError = true;
		console.error(status);
	});

}]);