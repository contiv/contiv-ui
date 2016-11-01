var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var eventStream = require('event-stream');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('build', function () {
    var s1 = gulp.src(['app/components/**/module.js',//First include files that register shared modules
            'app/**/module.js',//Include files that register modules for various tabs
            'app/app.js',
            'app/**/*.js',
            '!app/bundle.js',//Exclude generated bundle.js
            '!app/**/*test.js',//Exclude test files
            '!app/**/*.md', //Exclude .md files
            '!app/bower_components/**/*.js',
            '!app/components/graphobjects/**/*.js',
            '!app/main.browser.js',//Exclude files loaded by webpack
            '!app/app.module.js',//Exclude files loaded by webpack
            '!app/upgradeadapter.js',
            '!app/polyfills.browser.js',//Exclude files loaded by webpack
            '!app/vendor.browser.js',//Exclude files loaded by webpack
            '!app/polyfills.bundle.js',//Exclude bundle generated by webpack
            '!app/vendor.bundle.js',//Exclude bundle generated by webpack
            '!app/main.bundle.js',//Exclude bundle generated by webpack
            '!app/components/models/*model.js',
            '!app/components/models/basecollection.js',
            '!app/components/models/collection.js',
            '!app/components/utils/*service.js',
            '!app/components/directives/directives.module.js',
            '!app/components/directives/errormessagedirective.js',
            '!app/components/pipes/*.js',
            '!app/dashboard/dashboardctrl.js',
            '!app/network_policies/networkpolicies.module.js',
            '!app/network_policies/networkpoliciestabsctrl.js',
            '!app/network_policies/isolationpolicylistctrl.js',
            '!app/network_policies/bandwidthpolicylistctrl.js',
            '!app/network_policies/isolationpolicycreatectrl.js',
            '!app/network_policies/isolationpolicydetailsctrl.js',
            '!app/network_policies/bandwidthpolicycreatectrl.js',
            '!app/network_policies/bandwidthpolicydetailsctrl.js',
            '!app/applicationgroups/applicationgroups.module.js',
            '!app/applicationgroups/applicationgroupcreatectrl.js',
            '!app/applicationgroups/applicationgroupdetailsctrl.js',
            '!app/applicationgroups/isolationpolicydirective.js',
            '!app/applicationgroups/bandwidthpolicydirective.js',
            '!app/settings/settings.module.js',
            '!app/settings/networksettingctrl.js',
            '!app/components/directives/tabledirective.js',
            '!app/components/directives/accordiondirective.js',
            '!app/networks/networklistctrl.js',
            '!app/networks/network.module.js',
            '!app/applicationgroups/applicationgrouplistctrl.js',
            '!app/networks/networkstatsctrl.js',
            '!app/service_lbs/servicelb.module.js',
            '!app/service_lbs/servicelblistctrl.js',
            '!app/service_lbs/servicelbstatsctrl.js',
            '!app/organizations/organization.module.js',
            '!app/organizations/organizationlistctrl.js',
            '!app/networks/networkdetailsctrl.js',
            '!app/networks/networkinfoctrl.js',
            '!app/components/directives/collapsibledirective.js',
            '!app/components/directives/namevaluedirective.js',
            '!app/networks/networkcreatectrl.js',
            '!app/service_lbs/servicelbportsdirective.js',
            '!app/service_lbs/servicelbcreatectrl.js',
            '!app/service_lbs/servicelbdetailsctrl.js',
            '!app/service_lbs/servicelbinfoctrl.js',
            '!app/settings/clustersettingctrl.js'
            ])//Exclude vendor libraries
        .pipe(sourcemaps.init());
    //ES6 code
    var s2 = gulp.src(['app/components/graphobjects/**/module.js',
            'app/components/graphobjects/**/*.js',
            '!app/components/graphobjects/**/*test.js',
            '!app/components/graphobjects/**/*.md'
            ])//Exclude vendor libraries
        .pipe(sourcemaps.init())
        .pipe(babel());

    //merge the two streams
    eventStream.merge(s1, s2)
        .pipe(concat('app/bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
});

gulp.task('dev-build', function () {
    var s1 = gulp.src(['app/components/**/module.js',//First include files that register shared modules
            'app/**/module.js',//Include files that register modules for various tabs
            'app/app.js',
            'app/**/*.js',
            '!app/bundle.js',//Exclude generated bundle.js
            '!app/**/*test.js',//Exclude test files
            '!app/**/*.md', //Exclude .md files
            '!app/bower_components/**/*.js',
            '!app/components/graphobjects/**/*.js',
            '!app/main.browser.js',//Exclude files loaded by webpack
            '!app/app.module.js',//Exclude files loaded by webpack
            '!app/upgradeadapter.js',
            '!app/polyfills.browser.js',//Exclude files loaded by webpack
            '!app/vendor.browser.js',//Exclude files loaded by webpack
            '!app/polyfills.bundle.js',//Exclude bundle generated by webpack
            '!app/vendor.bundle.js',//Exclude bundle generated by webpack
            '!app/main.bundle.js',//Exclude bundle generated by webpack
            '!app/components/models/*model.js',
            '!app/components/models/basecollection.js',
            '!app/components/models/collection.js',
            '!app/components/utils/*service.js',
            '!app/components/directives/directives.module.js',
            '!app/components/directives/errormessagedirective.js',
            '!app/components/pipes/*.js',
            '!app/dashboard/dashboardctrl.js',
            '!app/network_policies/networkpolicies.module.js',
            '!app/network_policies/networkpoliciestabsctrl.js',
            '!app/network_policies/isolationpolicylistctrl.js',
            '!app/network_policies/bandwidthpolicylistctrl.js',
            '!app/network_policies/isolationpolicycreatectrl.js',
            '!app/network_policies/isolationpolicydetailsctrl.js',
            '!app/network_policies/bandwidthpolicycreatectrl.js',
            '!app/network_policies/bandwidthpolicydetailsctrl.js',
            '!app/applicationgroups/applicationgroups.module.js',
            '!app/applicationgroups/applicationgroupcreatectrl.js',
            '!app/applicationgroups/applicationgroupdetailsctrl.js',
            '!app/applicationgroups/isolationpolicydirective.js',
            '!app/applicationgroups/bandwidthpolicydirective.js',
            '!app/settings/settings.module.js',
            '!app/settings/networksettingctrl.js',
            '!app/components/directives/tabledirective.js',
            '!app/components/directives/accordiondirective.js',
            '!app/networks/networklistctrl.js',
            '!app/networks/network.module.js',
            '!app/applicationgroups/applicationgrouplistctrl.js',
            '!app/networks/networkstatsctrl.js',
            '!app/service_lbs/servicelb.module.js',
            '!app/service_lbs/servicelblistctrl.js',
            '!app/service_lbs/servicelbstatsctrl.js',
            '!app/organizations/organization.module.js',
            '!app/organizations/organizationlistctrl.js',
            '!app/networks/networkdetailsctrl.js',
            '!app/networks/networkinfoctrl.js',
            '!app/components/directives/collapsibledirective.js',
            '!app/components/directives/namevaluedirective.js',
            '!app/networks/networkcreatectrl.js',
            '!app/service_lbs/servicelbportsdirective.js',
            '!app/service_lbs/servicelbcreatectrl.js',
            '!app/service_lbs/servicelbdetailsctrl.js',
            '!app/service_lbs/servicelbinfoctrl.js',
            '!app/settings/clustersettingctrl.js'
            ])//Exclude vendor libraries
        .pipe(sourcemaps.init());
    //ES6 code
    var s2 = gulp.src(['app/components/graphobjects/**/module.js',
            'app/components/graphobjects/**/*.js',
            '!app/components/graphobjects/**/*test.js',
            '!app/components/graphobjects/**/*.md'
            ])//Exclude vendor libraries
        .pipe(sourcemaps.init())
        .pipe(babel());

    //merge the two streams
    eventStream.merge(s1, s2)
        .pipe(concat('app/bundle.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'));
});


gulp.task('watch', ['build'], function () {
    gulp.watch('app/**/*.js', ['build'])
});