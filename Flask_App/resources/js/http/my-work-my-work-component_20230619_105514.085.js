angular.module('myWork').component('myWork', {
  templateUrl: 'my-work/my-work.template.html',
  controller: ['$http','$scope', function($http, $scope) {
    var self = this;
    console.log('About to make a GET request');
    $http({
      method: 'GET',
      url: '/works'
    })
    .then(function(response) {
      console.log('We got a reponse:', response.data);
      self.works = response.data;
      for(let i = 0; i < self.works.length; i ++) {
        self.works[i].description = response.data[i].description.split('\n');
      };
      $scope.cards = response.data;
    })
    .catch(function(err) {
      console.log('Houston, we got an error:', err);
    });
  }]
});