/**
 * Created by hardik gandhi on 6/30/16.
 */


describe('contiv.bandwidth', function () {

    var mode_var = "create";

    var policy = {
        "DSCP": 3,
        "bandwidth": "20 mbps",
        "key": "default:p3",
        "link-sets": {
            "EndpointGroups": {
                "default:g4": {
                    "key": "default:g4",
                    "type": "endpointGroup"
                }
            }
        },
        "links": {
            "Tenant": {
                "key": "default",
                "type": "tenant"
            }
        },
        "profileName": "p3",
        "tenantName": "default"
    };
        

    beforeEach(module('ui.router'));
    beforeEach(module('contiv.networkpolicies'));
    beforeEach(module('contiv.test.directives'));


    var $rootScope,$compile;
    beforeEach(inject(function(_$compile_,_$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $rootScope = _$rootScope_;
        $compile = _$compile_;

    }));

    describe('bandwidth directive', function () {
        var element;
        beforeEach(inject(function() {
            // Compile a piece of HTML containing the directive


            element = $compile("<ctv-bandwidth mode=mode_var bandwidth-policy=policy></ctv-bandwidth>")($rootScope);
            $rootScope.policy=policy;
            $rootScope.mode = mode_var;
            // fire all the watches, so the scope expression will be evaluated
            $rootScope.$digest();


        }));
        it('Replaces the element with the appropriate content', function () {
            expect(element.html()).toContain("<div ng-switch=\"mode\">");


        });
    });


});    