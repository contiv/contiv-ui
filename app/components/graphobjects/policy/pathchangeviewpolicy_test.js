'use strict';

describe('PathChangeViewPolicy', function(){
    var policyFactory;
    var $state;
    beforeEach(function(){
        module('PolicyModule');
        inject( function($injector){
            policyFactory = $injector.get('PathChangeViewPolicy');
        });
        $state = {go:function() {return;}};
    });

    it('Checking inital values', function(){
        var policy = new policyFactory.Policy($state);
        expect(policy.policyName).toBe("PathChangeViewPolicy");
        expect(policy.graph).toBe(null);
        expect(policy.initialized).toBe(false);
        expect(policy.$state).toBe($state);
    });

    //TO BE CONTINUED -- GRAPH QUERIES NEED TO BE UPDATED FIRST
});
