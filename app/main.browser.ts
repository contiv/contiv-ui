/**
 * Created by vjain3 on 10/6/16.
 */
import { AppModule } from './app.module';
import { upgradeAdapter } from "./upgradeadapter";
import { NetworksModel } from "./components/models/networksmodel";
import { OrganizationsModel } from "./components/models/organizationsmodel";
import { ServicelbsModel } from "./components/models/servicelbsmodel";
import { StoragePoliciesModel } from "./components/models/storagepoliciesmodel";
import { PoliciesModel } from "./components/models/policiesmodel";
import { VolumesModel } from "./components/models/volumesmodel";
import { ApplicationGroupsModel } from "./components/models/applicationgroupsmodel";
import { NodesModel } from "./components/models/nodesmodel";
import { RulesModel } from "./components/models/rulesmodel";
import { NetprofilesModel } from "./components/models/netprofilesmodel";
import { CRUDHelperService } from "./components/utils/crudhelperservice";
import { InspectService } from "./components/utils/inspectservice";
import { NodesService } from "./components/utils/nodesservice";
import { ErrorMessageComponent } from "./components/directives/errormessagedirective";
import { CollapsibleComponent } from "./components/directives/collapsibledirective";
import { DashboardComponent } from "./dashboard/dashboardctrl";
import { IsolationPolicyCreateComponent } from "./network_policies/isolationpolicycreatectrl";
import { IsolationPolicyDetailsComponent } from "./network_policies/isolationpolicydetailsctrl";
import { BandwidthPolicyCreateComponent } from "./network_policies/bandwidthpolicycreatectrl";
import { BandwidthPolicyDetailsComponent } from "./network_policies/bandwidthpolicydetailsctrl";
import { ApplicationGroupCreateComponent } from "./applicationgroups/applicationgroupcreatectrl";
import { ApplicationGroupDetailsComponent } from "./applicationgroups/applicationgroupdetailsctrl";
import { NetworkSettingsComponent } from "./settings/networksettingctrl";
import { VolumeSettingsComponent } from "./settings/volumesettingctrl";

import {
    CtvTableComponent, CtvThComponent, CtvSearchComponent,
    CtvTpaginationComponent
} from "./components/directives/tabledirective";
import {NetworkListComponent} from "./networks/networklistctrl";
import {AppGrouplistComponent} from "./applicationgroups/applicationgrouplistctrl";

upgradeAdapter.upgradeNg1Provider('$state');
upgradeAdapter.upgradeNg1Provider('$stateParams');

angular.module('contiv.models')
    .factory('NetworksModel', upgradeAdapter.downgradeNg2Provider(NetworksModel));
angular.module('contiv.models')
    .factory('OrganizationsModel', upgradeAdapter.downgradeNg2Provider(OrganizationsModel));
angular.module('contiv.models')
    .factory('ServicelbsModel', upgradeAdapter.downgradeNg2Provider(ServicelbsModel));
angular.module('contiv.models')
    .factory('StoragePoliciesModel', upgradeAdapter.downgradeNg2Provider(StoragePoliciesModel));
angular.module('contiv.models')
    .factory('PoliciesModel', upgradeAdapter.downgradeNg2Provider(PoliciesModel));
angular.module('contiv.models')
    .factory('VolumesModel', upgradeAdapter.downgradeNg2Provider(VolumesModel));
angular.module('contiv.models')
    .factory('ApplicationGroupsModel', upgradeAdapter.downgradeNg2Provider(ApplicationGroupsModel));
angular.module('contiv.models')
    .factory('NodesModel', upgradeAdapter.downgradeNg2Provider(NodesModel));
angular.module('contiv.models')
    .factory('RulesModel', upgradeAdapter.downgradeNg2Provider(RulesModel));
angular.module('contiv.models')
    .factory('NetprofilesModel', upgradeAdapter.downgradeNg2Provider(NetprofilesModel));
angular.module('contiv.utils')
    .factory('CRUDHelperService', upgradeAdapter.downgradeNg2Provider(CRUDHelperService));

angular.module("contiv.utils")
    .factory("InspectService", upgradeAdapter.downgradeNg2Provider(InspectService))
    .factory('NodesService', upgradeAdapter.downgradeNg2Provider(NodesService));

angular.module('contiv.dashboard')
    .directive(
        'dashboard',
        upgradeAdapter.downgradeNg2Component(DashboardComponent) as angular.IDirectiveFactory
    );

angular.module('contiv.networkpolicies')
    .directive(
        'isolationpolicycreate',
        upgradeAdapter.downgradeNg2Component(IsolationPolicyCreateComponent) as angular.IDirectiveFactory
    )
    .directive(
        'isolationpolicydetails',
        upgradeAdapter.downgradeNg2Component(IsolationPolicyDetailsComponent) as angular.IDirectiveFactory
    )
    .directive(
        'bandwidthpolicycreate',
        upgradeAdapter.downgradeNg2Component(BandwidthPolicyCreateComponent) as angular.IDirectiveFactory
    )
    .directive(
        'bandwidthpolicydetails',
        upgradeAdapter.downgradeNg2Component(BandwidthPolicyDetailsComponent) as angular.IDirectiveFactory
    );

angular.module('contiv.applicationgroups')
    .directive(
        'applicationgroupcreate',
        upgradeAdapter.downgradeNg2Component(ApplicationGroupCreateComponent) as angular.IDirectiveFactory
    )
    .directive(
        'applicationgroupdetails',
        upgradeAdapter.downgradeNg2Component(ApplicationGroupDetailsComponent) as angular.IDirectiveFactory
    );

angular.module("contiv.directives")
    .directive("ctvCollapsible", upgradeAdapter.downgradeNg2Component(CollapsibleComponent) as angular.IDirectiveFactory
    )
    .directive("ctvError", upgradeAdapter.downgradeNg2Component(ErrorMessageComponent) as angular.IDirectiveFactory
    );

angular.module('contiv.settings')
    .directive('networksetting', upgradeAdapter.downgradeNg2Component(NetworkSettingsComponent) as angular.IDirectiveFactory)
    .directive('volumesetting', upgradeAdapter.downgradeNg2Component(VolumeSettingsComponent) as angular.IDirectiveFactory);
angular.module('contiv.directives')
    .directive('ctvTable', upgradeAdapter.downgradeNg2Component(CtvTableComponent) as angular.IDirectiveFactory);
angular.module('contiv.directives')
    .directive('ctvTh', upgradeAdapter.downgradeNg2Component(CtvThComponent) as angular.IDirectiveFactory);
angular.module('contiv.directives')
    .directive('ctvSearch', upgradeAdapter.downgradeNg2Component(CtvSearchComponent) as angular.IDirectiveFactory);
angular.module('contiv.directives')
    .directive('ctvTpagination', upgradeAdapter.downgradeNg2Component(CtvTpaginationComponent) as angular.IDirectiveFactory);
angular.module('contiv.networks')
    .directive(
        'networkList',
        upgradeAdapter.downgradeNg2Component(NetworkListComponent) as angular.IDirectiveFactory
    );
angular.module('contiv.applicationgroups')
    .directive(
        'applicationGrouplist',
        upgradeAdapter.downgradeNg2Component(AppGrouplistComponent) as angular.IDirectiveFactory
    );
upgradeAdapter.bootstrap(document.documentElement, ['contivApp']);
