/**
 * Created by hardik gandhi on 7/5/16.
 */


describe('contiv.applicationgroups module', function () {

    beforeEach(module('ui.router'));

    beforeEach(module('contiv.applicationgroups'));

    beforeEach(module('contiv.test.directives'));

    var netprofileListData = [
        {
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
        }
    ];

    describe('netprofile directive', function () {

        var $httpBackend;
        var $controller,netprofileCtrl,$rootScope,$element;

        beforeEach(inject(
            function (_$httpBackend_) {
                $httpBackend = _$httpBackend_;
                $httpBackend.when('GET', ContivGlobals.NETPROFILES_ENDPOINT).respond(netprofileListData);

            }));

        beforeEach(inject(function ( _$rootScope_,_$controller_) {
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            netprofileCtrl = $controller('NetprofileCtrl',{ $scope: $rootScope });
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should be defined', function () {
            expect(netprofileCtrl).toBeDefined();
            $httpBackend.flush();
        });

        it('ApplicationGroupDetailsCtrl should have netprofiles array assigned to netprofiles property', function() {
            $httpBackend.expectGET(ContivGlobals.NETPROFILES_ENDPOINT);
            $httpBackend.flush();
            expect($rootScope.netProfiles.length).toEqual(1);
            expect($rootScope.netProfiles[0]).toEqual(netprofileListData[0]);
         });

         it('NetprofileCtrl should do a GET on /api/v1/netprofiles/ REST API', function () {
            
            $httpBackend.expectGET(ContivGlobals.NETPROFILES_ENDPOINT);
            $httpBackend.flush();
         });


    });



});