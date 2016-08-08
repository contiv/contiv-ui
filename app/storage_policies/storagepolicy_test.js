/**
 * Created by cshampur on 8/5/16.
 */


describe('contiv.storagepolicies module', function(){
   var volumeData = [
       {
           "policy":"policy2",
           "name":"vol2",
           "driver":{
               "pool":"rbd"
           },
           "mount":"",
           "create":{
               "size":"50MB",
               "filesystem":"ext4"
           },
           "runtime":{
               "snapshots":true,
               "snapshot":{
                   "frequency":"30m",
                   "keep":20
               },
               "rate-limit":{
                   "write-bps":100000,
                   "read-bps":100000
               }
           },
           "backends":{
               "crud":"ceph",
               "mount":"ceph",
               "snapshot":"ceph"
           }
       },
       {
           "policy":"policy2",
           "name":"vol3",
           "driver":{
               "pool":"rbd"
           },
           "mount":"",
           "create":{
               "size":"50MB",
               "filesystem":"ext4"
           },
           "runtime":{
               "snapshots":true,
               "snapshot":{
                   "frequency":"30m",
                   "keep":20
               },
               "rate-limit":{
                   "write-bps":100000,
                   "read-bps":100000
               }
           },
           "backends":{
               "crud":"ceph",
               "mount":"ceph",
               "snapshot":"ceph"
           }
       }
   ];

    var storagePolicyData = [
        {
            "name":"policy1",
            "create":{
                "size":"10MB",
                "filesystem":"ext4"
            },
            "runtime":{
                "snapshots":true,
                "snapshot":{
                    "frequency":"30m",
                    "keep":20
                },
                "rate-limit":{
                    "write-bps":100000,
                    "read-bps":100000
                }
            },
            "driver":{
                "pool":"rbd"
            },
            "filesystems":{
                "ext4":"mkfs.ext4 -m0 %"
            },
            "backends":{
                "crud":"ceph",
                "mount":"ceph",
                "snapshot":"ceph"
            }
        }
    ];

    beforeEach(module('ui.router'));

    beforeEach(module('contiv.storagepolicies'));

    var $httpBackend;

    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', ContivGlobals.VOLUMES_ENDPOINT).respond(volumeData);
        $httpBackend.when('GET', ContivGlobals.STORAGEPOLICIES_ENDPOINT).respond(storagePolicyData);
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('storagedetails controller', function(){
        var $controller, $interval, $rootScope, $state, $stateParams, $filter;
        var storagePolicyDetailsCtrl;
        beforeEach(inject(function(_$interval_, _$rootScope_, _$controller_, _$filter_, _$state_, _$stateParams_){
            $state = _$state_;
            $state.go = function($stateName){};
            $stateParams = _$stateParams_;
            $interval = _$interval_;
            $rootScope = _$rootScope_;
            $filter = _$filter_;
            $controller = _$controller_;
            storagePolicyDetailsCtrl = $controller('StoragePolicyDetailsCtrl',
                { $state: $state, $stateParams: $stateParams, $interval: $interval, $scope: $rootScope, $filter:$filter});
        }));

        it('should be defined', function(){
            expect(storagePolicyDetailsCtrl).toBeDefined();
            $httpBackend.flush();
        });

        it('storagePolicyDetailsCtrl should do a get on /volmaster/policies/ Rest API', function(){
            $httpBackend.expectGET(ContivGlobals.STORAGEPOLICIES_ENDPOINT);
            $httpBackend.flush();
            expect(storagePolicyDetailsCtrl.policy).toEqual(storagePolicyData[0]);
        });

        it('storagePolicyDetailsCtrl should do a get on /volmaster/volumes/ Rest API', function(){
            $httpBackend.expectGET(ContivGlobals.VOLUMES_ENDPOINT);
            $httpBackend.flush();
            expect(storagePolicyDetailsCtrl.volumes.length).toEqual(volumeData.length);
            console.log("success");
        });
        
        it('')

    });

});