app.controller('FormController', ['$scope', '$rootScope', '$http', '$location', '$window', 'alertService', 'loadingService', function($scope, $rootScope, $http, $location, $window, alertService, loadingService){
		$scope.CurrentLocation = window.location.pathname;
		$scope.formData = undefined;

		$rootScope.$on("SetFormData", function(contextData, formData){
			$scope.formData = formData;
		});

		$scope.environment = function(){ return loadingService.environment;};
		
		$scope.DefaultSuccessWithRedirectCallback = function(data, successLocation)
		{
			$window.location.href = successLocation
		};
		$scope.DefaultMessageCallback = function(data)
		{
			alertService.push(data.msg, data.type, data.title);
		};
		
		$scope.DefaultErrorCallback = function(data)
		{
			alertService.push(data.msg, data.type, data.title);
		};
		
		$scope.CloseModalCallback = function(resultCallback, closeFunction, additionalData)
		{
			return function (data, formData) {
				resultCallback(data, formData);

				closeFunction(additionalData ? additionalData : data);
			};
		};
		
		
		$scope.submit = function(targetLocation, successLocation)
		{
			var successCallback = function(data)
			{
				$scope.DefaultSuccessWithRedirectCallback(data, successLocation);
			};
			$scope.submitWithCallback(targetLocation, successCallback, $scope.DefaultErrorCallback)
		};
		
		$scope.submitWithCallback = function(targetLocation, successCallBack, errorCallback, confirmMessage)
		{
			confirmMessage = confirmMessage || "";
			
			if(confirmMessage!=="")
			{
				return alertService.confirm(function(){$scope.submitWithCallback(targetLocation, successCallBack, errorCallback)},(confirmMessage));
			}
			
			var alerts = alertService.all();
			for(var i = 0; i< alerts.length; ++i)
			{
				$scope.closeAlert(i);
			}
			loadingService.setLoading(true);
			var config ={
					  method  : 'POST',
					  url     : targetLocation,
					  data    : $scope.formData,
					  dataType: "json",
					  headers: {
					        "Content-Type": "application/json"
					  }
					 };
			$http(config).success(function(data){ loadingService.setLoading(false); successCallBack(data, $scope.formData)}).error(function(data){ loadingService.setLoading(false); errorCallback(data)});
		};
		

		  $scope.closeAlert = function(index) {
		    alertService.closeAlert(index);
		  };
	
			$scope.formSubmit = function(callback)
			{
				var innerArguments = Array.prototype.slice.call(arguments, 1);
				return function()
				{
					callback.apply(this, innerArguments);
				}
			}
			
		
	}]);