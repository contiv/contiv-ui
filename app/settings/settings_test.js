'use strict';

describe('contiv.settings module', function () {
    var clustersettingData = {
            "extra_vars": {
                "contiv_network_mode":"standalone",
                "control_interface":"eth0",
                "env": {
                    "HTTPS_PROXY":"http://proxy.esl.cisco.com:8080/",
                    "HTTP_PROXY":"http://proxy.esl.cisco.com:8080/",
                    "NO_PROXY":"localhost,127.0.0.1,netmaster",
                    "http_proxy":"http://proxy.esl.cisco.com:8080/",
                    "https_proxy":"http://proxy.esl.cisco.com:8080/",
                    "no_proxy":"localhost,127.0.0.1,netmaster"
                },
                "fwd_mode":"bridge",
                "http_proxy":"http://proxy.cisco.com",
                "netplugin_if":"eth1",
                "scheduler_provider":"native-swarm",
                "service_vip":"192.168.2.252"
            }
        };

    var networksettingData = [
        {
            "key": "global",
            "name": "global",
            "networkInfraType": "default",
            "vlans": "1-4093",
            "vxlans": "1-10000"
        }
    ];

    var globalOperationalState = {
        Oper: {
            numNetworks: 5,
            vxlansInUse: "1-2",
            VlansInUse: "1-4,7,9-12",
            DefaultNetwork: "default:contiv-1",
            FreeVXLANsStart: "5"
        }
    };

    beforeEach(module('ui.router'));
    beforeEach(module('contiv.settings'));

    var $httpBackend;
    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', ContivGlobals.NODES_SETTINGS_GET_ENDPOINT).respond(clustersettingData);
        $httpBackend.when('POST', ContivGlobals.NODES_SETTINGS_SET_ENDPOINT).respond();
        $httpBackend.when('GET', ContivGlobals.NETWORK_SETTINGS_ENDPOINT).respond(networksettingData);
        $httpBackend.when('POST', ContivGlobals.NETWORK_SETTINGS_ENDPOINT + networksettingData[0].key + '/').respond();
        $httpBackend.when('GET', ContivGlobals.GLOBAL_OPERATIONAL_ENDPOINT).respond(globalOperationalState);
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('clustersettings controller', function () {
        var $controller, $stateParams;
        var clusterSettingCtrl;
        beforeEach(inject(function (_$stateParams_, _$controller_) {
            $stateParams = _$stateParams_;
            $controller = _$controller_;
            clusterSettingCtrl = $controller('ClusterSettingCtrl', { $stateParams: $stateParams });
        }));
        it('should be defined', function () {
            expect(clusterSettingCtrl).toBeDefined();
            $httpBackend.flush();
        });
        it('ClusterSettingCtrl should do a GET on /info/globals/ REST API', function () {
            $httpBackend.expectGET(ContivGlobals.NODES_SETTINGS_GET_ENDPOINT);
            $httpBackend.flush();
        });
        it('ClusterSettingCtrl should do have showLoader property set to false after fetch', function () {
            $httpBackend.expectGET(ContivGlobals.NODES_SETTINGS_GET_ENDPOINT);
            $httpBackend.flush();
            expect(clusterSettingCtrl.showLoader).toBeFalsy();
        });
        it('ClusterSettingCtrl.updateClusterSettings() should do a POST on /globals/', function () {
            clusterSettingCtrl.form = {'$valid' : true};
            clusterSettingCtrl.updateClusterSettings();
            $httpBackend.expectPOST(ContivGlobals.NODES_SETTINGS_SET_ENDPOINT);
            $httpBackend.flush();
        });
        it('ClusterSettingCtrl.updateClusterSettings() should not do a POST on /globals/ REST API for invalid form', function () {
            clusterSettingCtrl.form = {'$valid' : false};
            clusterSettingCtrl.updateClusterSettings();
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.flush();
            expect(clusterSettingCtrl.showLoader).toBeFalsy();
        });
        it('ClusterSettingCtrl should have clustersettingData object assigned to setting property', function () {
            $httpBackend.expectGET(ContivGlobals.NODES_SETTINGS_GET_ENDPOINT);
            $httpBackend.flush();
            expect(clusterSettingCtrl.setting).toEqual(clustersettingData);
        });
    });

    describe('networksettings controller', function () {
        var $controller, $interval, $rootScope;
        var networkSettingCtrl;
        beforeEach(inject(function (_$interval_, _$rootScope_, _$controller_) {
            $interval = _$interval_;
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            networkSettingCtrl = $controller('NetworkSettingCtrl', { $interval: $interval, $scope: $rootScope });
        }));
        it('should be defined', function () {
            expect(networkSettingCtrl).toBeDefined();
            $httpBackend.flush();
        });
        it('NetworkSettingCtrl should do a GET on /netmaster/api/v1/globals/ REST API', function () {
            $httpBackend.expectGET(ContivGlobals.NETWORK_SETTINGS_ENDPOINT);
            $httpBackend.flush();
        });
        it('NetworkSettingCtrl should do have showLoader property set to false after fetch', function () {
            $httpBackend.expectGET(ContivGlobals.NETWORK_SETTINGS_ENDPOINT);
            $httpBackend.flush();
            expect(networkSettingCtrl.showLoader).toBeFalsy();
        });
        it('NetworkSettingCtrl.updateNetworkSettings() should do a POST on /netmaster/api/v1/globals/global/', function () {
            networkSettingCtrl.key = networksettingData[0].key;
            networkSettingCtrl.form = {'$valid' : true};
            networkSettingCtrl.updateNetworkSettings();
            $httpBackend.expectPOST(ContivGlobals.NETWORK_SETTINGS_ENDPOINT + networksettingData[0].key + '/');
            $httpBackend.flush();
        });
        it('NetworkSettingCtrl.updateNetworkSettings() should not do a POST on /netmaster/api/v1/globals/global/ REST API for invalid form', function () {
            networkSettingCtrl.form = {'$valid' : false};
            networkSettingCtrl.updateNetworkSettings();
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.flush();
            expect(networkSettingCtrl.showLoader).toBeFalsy();
        });
        it('NetworkSettingCtrl should have networksettingData object assigned to setting property', function () {
            $httpBackend.expectGET(ContivGlobals.NETWORK_SETTINGS_ENDPOINT);
            $httpBackend.flush();
            expect(networkSettingCtrl.setting).toEqual(networksettingData[0]);
        });
        it('NetworkSettingCtrl should fetch the global operational state',function(){
            $httpBackend.expectGET(ContivGlobals.GLOBAL_OPERATIONAL_ENDPOINT);
            $httpBackend.flush();
        });

        it('Global operational state should be defined',function(){
            $httpBackend.expectGET(ContivGlobals.GLOBAL_OPERATIONAL_ENDPOINT);
            $httpBackend.flush();
            expect(networkSettingCtrl.globalOperStat).toBeDefined();
            expect(networkSettingCtrl.globalOperStat.length).toEqual(Object.keys(globalOperationalState.Oper).length);
            var globStat = networkSettingCtrl.globalOperStat;
            for(var i in globStat){
                expect(globStat[i].globProperty in globalOperationalState.Oper).toBeTruthy();
                expect(globStat[i].globPropertyVal).toEqual(globalOperationalState.Oper[globStat[i].globProperty]);
            }
        });
    });
});
