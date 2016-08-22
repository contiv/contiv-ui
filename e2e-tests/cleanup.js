/**
 * Created by cshampur on 8/19/16.
 */

describe("Clean Up", function(){
    it("Remove Network", function(){
        testConfig.removeObject("#/m/networks/list", testConfig.networks.name);
    });
    it("Remove Copied Volume", function(){
        testConfig.removeObject("#/m/volumes/list", testConfig.volumes.newvolume);
    });
    it("Remove Volume", function(){
       testConfig.removeObject("#/m/volumes/list", testConfig.volumes.name);
    });
    it("Remove Storage Policy", function(){
       testConfig.removeObject("#/m/storagepolicies/list", testConfig.storagePolicy.name);
    });
});
