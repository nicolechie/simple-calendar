var app = angular.module('calendarDemoApp', []);
app.controller('CalendarCtrl', ['$scope', function($scope){
		
		var today = new Date();
		var month = today.getMonth();
		var year = today.getFullYear();
		
		$scope.dayNames = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];

		$scope.months = [
		 	{month: 0, name:'January'},
		 	{month: 1, name:'February'},
		 	{month: 2, name:'March'},
		 	{month: 3, name:'April'},
		 	{month: 4, name:'May'},
		 	{month: 5, name:'June'},
		 	{month: 6, name:'July'},
		 	{month: 7, name:'August'},
		 	{month: 8, name:'September'},
		 	{month: 9, name:'October'},
		 	{month: 10, name:'November'},
		 	{month: 11, name:'December'}
		];
		var years = [];
		for (i=year-20; i<=year+20; i++) {
			years.push(i);
		};
		$scope.years = years;
		$scope.thisYear = year;
		$scope.thisMonth = $scope.months[month];
}]);

app.directive('calendar', function() {
	return {
		restrict: 'E',
		templateUrl: 'calendarTemplate.html',
		scope: false,
		link: function($scope, element, attrs) {
			setMonth();
			function setMonth() {
				$scope.range = CalendarRange.getMonthlyRange(new Date($scope.thisYear, $scope.thisMonth.month));
				$scope.days = {};
				$scope.days = $scope.range.days;
				otherMonth();
				console.log($scope.days);
			};
			$scope.otherMonth = otherMonth;
			function otherMonth() {

				for (i=0; i<$scope.days.length; i++) {
					if($scope.days[i].month !== $scope.thisMonth.month) {
						$scope.days[i].isGray = true;
					}
					else {
						$scope.days[i].isGray = false;
					}

				};
			}
			
			$scope.setMonth = setMonth;

		}
	}	


});