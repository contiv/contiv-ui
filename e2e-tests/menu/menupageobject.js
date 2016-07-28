/**
 * Created by cshampur on 7/27/16.
 */


var MenuPage = function(){
    this.dashboard = element(by.css("a.item[ui-sref='contiv.menu.dashboard()']"));
    this.applicationGroup = element(by.css("a.item[ui-sref='contiv.menu.applicationgroups.list()']"));
    this.networkPolicies = element(by.css("a.item[ui-sref='contiv.menu.networkpolicies.isolation.list()']"));
    this.storagePolicies = element(by.css("a.item[ui-sref='contiv.menu.storagepolicies.list()']"));
    this.serviceLb = element(by.css("a.item[ui-sref='contiv.menu.servicelbs.list()']"));
    this.networks = element(by.css("a.item[ui-sref='contiv.menu.networks.list()']"));
    this.volumes = element(by.css("a.item[ui-sref='contiv.menu.volumes.list()']"));
    this.nodes = element(by.css("a.item[ui-sref='contiv.menu.nodes.list()']"));
    this.organizations = element(by.css("a.item[ui-sref='contiv.menu.organizations.list()']"));
    this.settings = element(by.css("a.item[ui-sref='contiv.menu.settings.details.cluster()']"));
}

module.exports = MenuPage;