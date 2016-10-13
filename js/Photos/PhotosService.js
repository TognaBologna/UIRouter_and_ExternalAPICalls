angular.module('angularDrill').service('getPhotosService', function($http, $q){
	this.getPhotos = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'https://api.unsplash.com/users/togna_bologna/photos/?client_id=23056017eff6d45c205c1e054aa5a9f3e9016a7ebebd8183ecc5d586747cf405'
		}).then(function(response) {
			var returnedObjects = response.data;
			var photoURLs = [];
			for(var i = 0; i < returnedObjects.length; i++){
				photoURLs.push(
					{
						Image: returnedObjects[i].urls.small,
						Source: returnedObjects[i].links.html,
					}
				);
			}
			deferred.resolve(photoURLs);
		})
		return deferred.promise;
	}
});