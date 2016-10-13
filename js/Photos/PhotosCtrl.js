angular.module('angularDrill').controller('PhotosCtrl', function($scope, getPhotosService){
		$scope.getURLs = getPhotosService.getPhotos()
			.then(function(dataFromService) {
				$scope.urls = dataFromService;
			});
});