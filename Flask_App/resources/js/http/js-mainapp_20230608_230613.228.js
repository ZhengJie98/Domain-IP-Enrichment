function isEmptyObject(obj) {
	for(var prop in obj) {
		if(obj.hasOwnProperty(prop))
			return false;
	}

	return JSON.stringify(obj) === JSON.stringify({});
}

var behaveAsLink = function(event, location, window)
{
	if (event.which === 2 || (event.which === 1 && (event.metaKey || event.ctrlKey))) {
		// MIDDLE CLICK or CMD+LEFTCLICK - new tab
		window.open(location);
		// the about:blank is to please Chrome, and _blank to please Firefox
	}
	else if(event.which === 1){
		window.location.href = location;
	}
};

var isCurrentElementClicked = function(event)
{
	var current = event.currentTarget;
	var node = event.target;
	while(node != null) {
		if (node === current) {
			return true;
		}
		else if(node.attributes['ng-click'] != null || node.attributes['ng-complex-click'] != null  ){
			return false;
		}
		node = node.parentNode;
	}
	return false;
};

app.service('alertService', function($uibModal, $sce){
	var alerts = [];

	
	return {
		all: function(){
			return alerts;
		},
		push: function(msg, type, title)
		{
			if(msg.startsWith("<!doctype html>"))
			{
				var body = new DOMParser().parseFromString(msg, "text/html").body.innerHTML;
				alerts.push({msg: body, type:type, isHTML:true, title:title, expired: false});
				return;
			}
			alerts.push({msg:msg, type:type, title:title, expired: false});
		},
		pushFromHttp: function(httpResponse)
		{
			alerts.push({msg:httpResponse.msg, type:httpResponse.type, title:httpResponse.title, expired: false});
		},
		closeAlert: function(index) {
		    alerts.splice(index, 1);
		},
		expireAlert: function(index) {
			alerts[index].expired = true;
		},
		confirm: function(callback, text, title, button)
		{
			text = text || "Are you sure?";
			title = title || "Warning";
			button = button || "<span class=\"glyphicon glyphicon-ok\"></span>&nbsp;Confirm";
			
			var template = "<div class=\"modal-header label-warning\">"+
								"<button type=\"button\" class=\"close\" ng-click=\"$close(false)\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></span>"+
								"<h3 class=\"modal-title\" style=\"color:white;\"><span class=\"glyphicon glyphicon-warning-sign\"></span>&nbsp;"+title+"</h3>"+
							"</div>"+
							"<div class=\"modal-body\">"+
								"<p>"+text+"</p>"+
								"<button type=\"submit\" class=\"btn btn-default\" ng-click=\"$close(true)\">"+button+"</button>"+
								"<span style=\"float:right\"><button type=\"reset\" class=\"btn btn-default\" ng-click=\"$close(false)\"><span class=\"glyphicon glyphicon-remove-circle\"></span>&nbsp;Cancel</button></span>"+
							"</div>";
			
			var modalInstance = $uibModal.open({
				animation: true,
				template: template
		    });
			modalInstance.result.then(function(response){
				if(response)
				{
					callback();
				}
			});
			
		},
		modalAlert: function (callback, text, title, button) {
			title = title || "Warning";
			button = button || "<span class=\"glyphicon glyphicon-ok\"></span>&nbsp;Confirm";
			
			var template = "<div class=\"modal-header label-primary\">"+
				"<button type=\"button\" class=\"close\" ng-click=\"$close(false)\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></span>"+
				"<h3 class=\"modal-title\" style=\"color:white;\"><span class=\"glyphicon glyphicon-info-sign\"></span>&nbsp;"+title+"</h3>"+
				"</div>"+
				"<div class=\"modal-body\">"+
				"<p>"+text+"</p>"+
				"<button type=\"submit\" class=\"btn btn-default\" ng-click=\"$close(true)\">"+button+"</button>"+
				"<span style=\"float:right\"><button type=\"reset\" class=\"btn btn-default\" ng-click=\"$close(false)\"><span class=\"glyphicon glyphicon-remove-circle\"></span>&nbsp;Cancel</button></span>"+
				"</div>";
			
			var modalInstance = $uibModal.open({
				animation: true,
				template: template
			});
			modalInstance.result.then(function(response){
				if(response)
				{
					callback();
				}
			});
		}
		
	}
	
});

app.directive('jsonText', function() {
	  return {
	    restrict: 'A', // only activate on element attribute
	    require: 'ngModel', // get a hold of NgModelController
	    link: function(scope, element, attrs, ngModelCtrl) {

	      var lastValid;

	      // push() if faster than unshift(), and avail. in IE8 and earlier (unshift isn't)
	      ngModelCtrl.$parsers.push(fromUser);
	      ngModelCtrl.$formatters.push(toUser);

	      // clear any invalid changes on blur
	      element.bind('blur', function() {
	        element.val(toUser(scope.$eval(attrs.ngModel)));
	      });

	      // $watch(attrs.ngModel) wouldn't work if this directive created a new scope;
	      // see http://stackoverflow.com/questions/14693052/watch-ngmodel-from-inside-directive-using-isolate-scope how to do it then
	      scope.$watch(attrs.ngModel, function(newValue, oldValue) {
	        lastValid = lastValid || newValue;

	        if (newValue !== oldValue) {
	          ngModelCtrl.$setViewValue(toUser(newValue));

	          // TODO avoid this causing the focus of the input to be lost..
	          ngModelCtrl.$render();
	        }
	      }, true); // MUST use objectEquality (true) here, for some reason..

	      function fromUser(text) {
	        // Beware: trim() is not available in old browsers
	        if (!text || text.trim() === '') {
	          return {};
	        } else {
	          try {
	            lastValid = angular.fromJson(text);
	            ngModelCtrl.$setValidity('invalidJson', true);
	          } catch (e) {
	            ngModelCtrl.$setValidity('invalidJson', false);
	          }
	          return lastValid;
	        }
	      }

	      function toUser(object) {
	        // better than JSON.stringify(), because it formats + filters $$hashKey etc.
	        return angular.toJson(object, true);
	      }
	    }
	  };
	});


app.directive('collectionWithAdd', function ($compile ) {
	
	return {
		restrict: "E",
		transclude: true,
		link: function (scope, element, attrs, ctrl, transclude) {
			scope.newElemName = "";
			scope.panelMode=attrs.panelMode == null ? "panel-default" : "panel-"+attrs.panelMode;
			scope.getIdentifier = function (index, element) {
				return (scope.useIndex === true || scope.isObject) ? index : element;
			};
			scope.getElementName = function (identifier) {
				return (scope.hasNameProperty === true) ? identifier.Name : identifier;
			};
			scope.addNewElement = function (newElemName) {
				var realAlloc = scope.allocator || function(){ return {};};
				var newElem = realAlloc();
				if (scope.isObject) {
					scope.collection[newElemName] = newElem;
				} else if (scope.useIndex)
				{
					scope.collection.push(newElem);
				}else {
					if (scope.hasNameProperty) {
						newElem.Name = newElemName;
						scope.collection.push(newElem);
					}
					else {
						scope.collection.push(newElemName);
					}
				}
			};
			scope.removeElement = function(index)
			{
				if(Array.isArray(scope.collection)) {
					scope.collection.splice(index, 1);
				}
				else
				{
					delete scope.collection[index];
				}
			}
		},
		scope: {
			current: '@',
			collection: "=",
			isObject: "=",
			useIndex: "=?",
			visibilityHandler: "=?",
			hasNameProperty: "=?",
			hasContent: "=?",
			placeholder: "=?",
			allocator: "&"
		},
		controller: function($scope)
		{
			$scope.useIndex = angular.isDefined($scope.useIndex) ? $scope.useIndex : false;
			$scope.visibilityHandler = angular.isDefined($scope.visibilityHandler) ? $scope.visibilityHandler : $scope.$parent.visibilityHandler;
			$scope.hasNameProperty = angular.isDefined($scope.hasNameProperty) ? $scope.hasNameProperty : false;
			$scope.hasContent = angular.isDefined($scope.hasContent) ? $scope.hasContent : true;
			$scope.placeholder = angular.isDefined($scope.placeholder) ? $scope.placeholder : "Additional Element";
		},
		templateUrl: '/js/templates/CollectionWithAddField.html'
	}
});

app.directive('stringToNumber', function() {
		return {
			require: 'ngModel',
			link: function(scope, element, attrs, ngModel) {
				ngModel.$parsers.push(function(value) {
					return value;
				});
				ngModel.$formatters.push(function(value) {
					if(typeof value === 'object')
					{
						if(value.hasOwnProperty("$numberLong"))
						{
							return parseFloat(value.$numberLong);
						}
					}
					else if(typeof value === 'string')
					{
						return parseFloat(value);
					}
					return value;
				});
			}
		};
	});
app.service('loadingService', function(){
	this.Data = {
			isVisible: false
	};
	this.setLoading = function(visible)
	{
		this.Data.isVisible = visible;
	};
	
	this.getLoading = function()
	{
		return this.Data.isVisible;
	};
	
	this.environment = "Development";

});

app.service('leaderboardsService', function(){
	var leaderboards = [];
	var currentDump;


	return {
		all: function(){
			return leaderboards;
		},
		filled: function(){
			return leaderboards.filter(function(lead){return lead.scoresNum!==-1;})
		},
		set: function(arrayleaderboards) {
			leaderboards = leaderboards.concat(arrayleaderboards);
		},
		push: function(leaderboard)
		{
			leaderboards.push(leaderboard);
		},
		pop: function(leaderboard)
		{
			var index = leaderboards.indexOf(leaderboards);
			if(index !== -1)
			{
				leaderboards.splice(index, 1);
			}
		},
		wipeScores: function()
		{
			for(var i = 0; i< leaderboards.length; i++)
			{
				leaderboards[i].scores = [];
			}
		},
		currentDump: function()
		{
			return currentDump;
		},
		setDump: function(dump)
		{
			currentDump = dump;
		}
	}
});

app.service('statisticsService', function()
{
   return {
       checkPath: function(object, Path)
	   {
		   if(Path !== null && Path!==undefined && object!==null && object !==undefined) {
			   var elems = Path.split(".");
			   var currObj = object;
			   for (var i=0; i<elems.length;++i) {
				   var key = elems[i];
				   if(key.match(/(^\${)(\w+)(}$)/))//If Variable Path, all Path should match, so we pick the first one, to lightly check it. A deep inspection would require some time, we will do it on submission.
				   {
					   if (currObj !== null && currObj !== undefined && currObj.hasOwnProperty("InnerValue"))
					   {
						   key = Object.keys(currObj.InnerValue)[0];
					   }
				   }

				   if (currObj === null || currObj === undefined || !currObj.hasOwnProperty("InnerValue") || currObj.InnerValue[key] === null || currObj.InnerValue[key] === undefined) {
					   return false;
				   }
				   currObj = currObj.InnerValue[key];
			   }
			   return currObj !== null && currObj !== undefined && currObj.Type !== 'Container' && currObj.Type !== 'Array';
		   }
		   return false;
	   },

	   getType: function(object, Path)
	   {
		   if(Path !== null && Path!==undefined && object!==null && object !==undefined) {
			   var elems = Path.split(".");
			   var currObj = object;
			   for (var i=0; i<elems.length;++i) {
				   var key = elems[i];
				   if(key.match(/(^\${)(\w+)(}$)/))//If Variable Path, all Path should match, so we pick the first one, to lightly check it. A deep inspection would require some time, we will do it on submission.
				   {
					   if (currObj !== null && currObj !== undefined && currObj.hasOwnProperty("InnerValue"))
					   {
						   key = Object.keys(currObj.InnerValue)[0];
					   }
				   }

				   if (currObj === null || currObj === undefined || !currObj.hasOwnProperty("InnerValue") || currObj.InnerValue[key] === null || currObj.InnerValue[key] === undefined) {
					   return "None";
				   }
				   currObj = currObj.InnerValue[key];
			   }
			   return currObj.Type;
		   }
		   return "None";

	   }
   }
});
app.directive('dropdown', function() {
	var template ="<div ng-class=\"{'input-group-btn': isAddon, 'btn-group': !isAddon}\" dropdown>\n" +
		"\n" +
		"  <!-- dropdown items -->\n" +
		"  <ul class=\"dropdown-menu\" role=\"menu\"> \n" +
		"    <li ng-repeat=\"item in items\">\n" +
		"      <a href=\"#\" \n" +
		"         ng-bind=\"item.name\" \n" +
		"         ng-click=\"select(item.id)\"></a>\n" +
		"    </li> \n" +
		"  </ul>\n" +
		"  <!-- button style dropdown -->\n" +
		"  <button type=\"button\" class=\"btn dropdown-toggle\" dropdown-toggle ng-class=\"getElement(ngModel).class || 'btn-primary'\" style='border-top-right-radius: 4px;border-bottom-right-radius: 4px;'>\n" +
		"    {{getElementName(ngModel) || default}}\n" +
		"    <span class=\"caret\"></span>\n" +
		"  </button>\n" +
		"\n" +
		"  \n" +
		"</div>";
	return {
		restrict: 'E',
		require: '^ngModel',
		scope: {
			ngModel: '=', // selection
			items: '=',   // items to select from
			withDefault: '=',
			callback: '&' // callback
		},
		link: function(scope, element, attrs, ngModelCtrl) {
			element.on('click', function(event) {
				event.preventDefault();
			});
			
			if(scope.withDefault != null)
			{
				scope.items.unshift(scope.withDefault)
			}
			
			scope.default = 'Please select item';
			scope.isAddon = 'isAddon' in attrs;
			
			// selection changed handler
			scope.select = function(item) {
				ngModelCtrl.$setViewValue(item);
				scope.ngModel = item;
				if (scope.callback) {
					scope.callback({ item: item });
				}
			};
			
			scope.getElement = function(itemId)
			{
				return scope.items.find(function(elem, index) {
					if(elem.id === itemId)
						return true;
				});
			};
			
			scope.getElementName = function(itemId)
			{
				var found = scope.getElement(itemId);
				return found != null ? found.name : null;
			};
		},
		template: template
	};
});

app.filter('duration', function() {
	return function(millseconds) {
		if(millseconds instanceof Date)
		{
			millseconds = millseconds.getTime();
		}
		var seconds = Math.floor(millseconds / 1000);
		var days = Math.floor(seconds / 86400);
		var hours = Math.floor((seconds % 86400) / 3600);
		var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
		var timeString = '';
		if(days > 0) timeString += (days > 1) ? (days + " days ") : (days + " day ");
		if(hours > 0) timeString += (hours > 1) ? (hours + " hours ") : (hours + " hour ");
		if(minutes >= 0) timeString += (minutes > 1) ? (minutes + " minutes ") : (minutes + " minute ");
		return timeString;
	}
});

app.controller("MainController", function($scope, alertService, loadingService) {
	
	var urlParams = new URLSearchParams(window.location.search);
	$scope.Math = Math;;
	$scope.isObject = function(val)
	{
		return typeof val === 'object';
	};
	
	$scope.getQueryParam = function(key)
	{
		return urlParams.get(key);
	};
	
	var match = window.location.href.match(/Admin\/(Live|Production|Development)\//i);
	if(match != null && match.length === 2)
	{
		loadingService.environment = match[1];
	}
	else
	{
		loadingService.environment = "Development";
	}
	
	$scope.alerts = alertService.all();
	$scope.closeAlert = function(index) {
	    alertService.closeAlert(index);
	};
	
	$scope.confirm = alertService.confirm;
	
	$scope.environment = function () {
		return loadingService.environment;
	};
	
	$scope.setEnvironment = function(newEnv)
	{
		var match = window.location.href.match(/Admin\/(Live|Production|Development)\//i);
		if(match != null && match.length === 2)
		{
			if(match[1] !== newEnv) {
				window.location.href = window.location.href.replace(match[1], newEnv);
			}
		}
		else
		{
			loadingService.environment = newEnv;
		}
	};
	
	
	$scope.Loading = loadingService.Data;
});
app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
app.filter('startFrom', function() {
	return function(input, start) {
		start = +start; //parse to int
		return input.slice(start);
	}
});


(function() {
		
		var PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i;
		/**
		 * Converts all accepted directives format into proper directive name.
		 * @param name Name to normalize
		 */
		function directiveNormalize(name) {
			return camelCase(name.replace(PREFIX_REGEXP, ''));
		}
		
		
		var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
		var MOZ_HACK_REGEXP = /^moz([A-Z])/;
		
		/**
		 * Converts snake_case to camelCase.
		 * Also there is special case for Moz prefix starting with upper case letter.
		 * @param name Name to normalize
		 */
		function camelCase(name) {
			return name.
			replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
				return offset ? letter.toUpperCase() : letter;
			}).
			replace(MOZ_HACK_REGEXP, 'Moz$1');
		}
		
		
		var eventName="complex-click";
		
	var directiveName = directiveNormalize('ng-' + eventName);
	
	app.directive(directiveName, ['$parse', '$rootScope', function($parse) {
			return {
				restrict: 'A',
				compile: function ($element, attr) {
					
					var pendingAction = null;
					
					// We expose the powerful $event object on the scope that provides access to the Window,
					// etc. that isn't protected by the fast paths in $parse.  We explicitly request better
					// checks at the cost of speed since event handler expressions are not executed as
					// frequently as regular change detection.
					var fn = $parse(attr[directiveName], /* interceptorFn */ null, /* expensiveChecks */ true);
					return function ngEventHandler(scope, element) {
						element.on("mousedown", function(event)
						{
							pendingAction = event;
						});
						element.on("mouseup", function(event)
						{
							if(pendingAction != null
								&& event.altKey === pendingAction.altKey
								&& event.which === pendingAction.which
								&& event.ctrlKey === pendingAction.ctrlKey
							)
							{
								var callback = function () {
									fn(scope, {$event: event});
								};
								scope.$apply(callback);
								event.preventDefault();
							}
							else {
								pendingAction = null;
							}
						});
					};
				}
			};
		}]
	);
}()
);