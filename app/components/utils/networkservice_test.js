'use strict';

describe('contiv.utils module', function () {
    var networksettingData = [
        {
            "key": "global",
            "name": "global",
            "networkInfraType": "default",
            "vlans": "1-4093",
            "vxlans": "1-10000"
        }
    ];

    var globalOperationalState = {Oper:{numNetworks:5, vxlansInUse:"1-2", VlansInUse: "1-4,7,9-12", DefaultNetwork: "default:contiv-1", FreeVXLANsStart: "5"}};
    beforeEach(module('ui.router'));
    beforeEach(module('contiv.utils'));
    beforeEach(module('contiv.settings'));

    var $httpBackend;
    var NetworkService;
    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', ContivGlobals.NETWORK_SETTINGS_ENDPOINT).respond(networksettingData);
        $httpBackend.when('POST', ContivGlobals.NETWORK_SETTINGS_ENDPOINT + networksettingData[0].key + '/').respond();
        $httpBackend.when('GET', ContivGlobals.GLOBAL_OPERATIONAL_ENDPOINT).respond(globalOperationalState);
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("NetworkService", function () {
        var $controller;
        var ctrl,$interval,$rootScope;
        beforeEach(inject(function ( _$controller_, $injector, _$interval_, _$rootScope_) {
            $interval=_$interval_;
            $rootScope=_$rootScope_;
            $controller = _$controller_;
            ctrl = $controller('NetworkSettingCtrl', {$interval: $interval, $scope: $rootScope});

            NetworkService = $injector.get('NetworkService');
            $httpBackend = $injector.get('$httpBackend');
        }));
        it('should be defined', function () {
            console.log("Network Service ---");
            expect(NetworkService).toBeDefined();
            $httpBackend.flush();
        });
        it('NetworkService.getSettings() should do a GET on /netmaster/api/v1/globals/', function () {
            var url = ContivGlobals.NETWORK_SETTINGS_ENDPOINT;
            NetworkService.getSettings(url).then(function(response) {
                expect(response[0]).toEqual(networksettingData[0]);
            });
            $httpBackend.expectGET(ContivGlobals.NETWORK_SETTINGS_ENDPOINT);
            $httpBackend.flush();
        });
        it('NetworkService.updateSettings() should do a POST on /netmaster/api/v1/globals/global/', function () {
            ctrl.key = networksettingData[0].key;
            NetworkService.updateSettings(ctrl);
            $httpBackend.expectPOST(ContivGlobals.NETWORK_SETTINGS_ENDPOINT + networksettingData[0].key + '/');
            $httpBackend.flush();
        });
        it('NetworkService.getSettings() should do a GET on /netmaster/api/v1/globals/', function () {
            var url = ContivGlobals.GLOBAL_OPERATIONAL_ENDPOINT;
            NetworkService.getSettings(url).then(function(response) {
                expect(response.Oper).toEqual(globalOperationalState.Oper);
            });
            $httpBackend.expectGET(ContivGlobals.GLOBAL_OPERATIONAL_ENDPOINT);
            $httpBackend.flush();
        });
    });   
});
