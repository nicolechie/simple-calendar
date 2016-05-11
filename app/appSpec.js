describe('calendar', function() {
	
	var scope,
		element,
		compiled,
		html;

	beforeEach(module('calendarDemoApp'));
	beforeEach(module('calendarTemplate.html'));
	beforeEach(inject(function($rootScope, $compile) {
		var html = "<calendar></calendar>";
		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();

	}));
	it('should have these attributes', function(){
    	// expect(element.html()).toContain("Monday");
    	expect(element.find(div.dayNames).attr('ng-repeat')).toBe(true);
    	var x = 2;
    	expect(x).toBe(2);
    });
});