#Contributing to Contiv-ui



##Developers - Table of contents
=================

  * [Setup](#setting-up-contiv-ui-on-mac-and-windows)
    * [Windows](#for-windows)
    * [Mac](#for-mac)
  * [Adding icon](#adding-custom-icons-into-semantic-ui)
  * [Testing](#testing)
    * [Directives] (#writing-directive-tests)
    * [End to end testing] (#writing-end-to-end-tests)


###Setting up Contiv-ui on Mac and Windows
==========================================
###For Windows:
---------------
####Fix long path issue and clone the repo:
* install git, then run
```
$ git config --system core.longpaths true
$ git clone https://github.com/contiv/contiv-ui.git
```

####Install app dependencies
* install node.js
* In the directory of the contiv-ui repo, run:
```
$ npm install -g bower 
$ npm install -g gulp
$ npm install
```
* Build app with:
```
$ gulp dev-build
```

####Install nginx
* download nginx and unzip
* add nginx to System Path
  * If you are having issues with nginx not being a recognized command, check that you added it to your path correctly
* From contiv-nginx.conf(in the contiv-ui repo), copy from line 13 to line 50
* Paste into nginx.conf (in nginx_location/conf) after line 47
* In the section you just pasted, replace localhost with your server
* Change the root to point to the absolute path of contiv-ui/app instead of html

####Running nginx
* In the directory of nginx, to start nginx:
```
$ start nginx
```
Server is now running on localhost:8080  
If you make changes in your app folder, rerun the gulp command and hard refresh page  

* If you modify nginx.conf, restart server with:
```
$ nginx -s reload
```
* To stop nginx:
```
$ nginx -s stop
```

###For Mac:
-----------
####Install git and clone repo
```
$ git
$ git clone https://github.com/contiv/contiv-ui.git
```
####Install app dependencies
* install node.js
* In the directory of the contiv-ui repo, run:
```
$ sudo npm install npm -g
$ sudo npm install -g bower 
$ sudo npm install -g gulp
$ npm install
```
* Build app with:
```
$ gulp dev-build
```
####Install nginx
* install brew and nginx:
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
$ brew install nginx
```
* From contiv-nginx.conf(in the contiv-ui repo), copy from line 13 to line 50
* Paste into nginx.conf (location: /usr/local/etc/nginx) after line 47
* In the section you just pasted, replace localhost with your backend server
  * This should point to the backend running contiv. It is fine to leave as localhost if you just want to view the UI.
* Change the root to point to the absolute path of contiv-ui/app instead of html

####Running nginx
* In the directory of nginx, to start nginx:
```
$ nginx
```
Server is now running on localhost:8080 
If you make changes in your app folder, rerun the gulp command and hard refresh page to view changes in the browser

* If you modify nginx.conf, restart server with:
```
$ nginx -s reload
```
* To stop nginx:
```
$ nginx -s stop
```

### Adding custom icons into semantic-ui
----------------------------------------

* Uncompress the folder containing the files related to the icons.
* Copy and replace the following files cisco-ucp.eot, cisco-ucp.svg, cisco-ucp.tff, cisco-ucp.woff, cisco-ucp.woff2 from /font/ of the uncompressed folder into contiv-ui/app/bower_components/semantic-ui/src/themes/cisco/assets/fonts/.
* Add the new icon to icon.overrides file present in contiv-ui/app/bower_components/semantic-ui/src/themes/cisco/elements/
* eg for adding a snapshot icon - 

```
.icon.snapshot:before {
    content: "\e959";
}

Here content refers to the id of the icon present inside demo.html file.

```
* Do a gulp build inside the semantic installed folder

```
$ gulp build
```

* The icon can be used in the project as below :

```
<i class="snapshot icon"></i>
```


###Testing
==========
To run all tests:
```
$ npm test
```

####Writing Directive Tests
---------------------------
You must configure karma to pre-process the linked template html file. To do so:
* In the Karma.conf.js file:
 * add the location under preprocessors in the following format
 ```
 preprocessors: {
            'app/example/**/*.html':['ng-html2js']
        },
 ```
 * Include the module.js file, all other js files, and the html file.
 ```
 files: [
            'app/example/module.js',
            'app/example/**/*.js,
            'app/example/**/*.html
        ]
 ```
* In the test file, add the following to load the html:
 ```
 beforeEach(module('contiv.test.directives'));
 ```
 
#### Writing End to end tests
----------------------------
Your page interaction test must be organized into two files pageObject.js and pageSpec.js.
Inside pageObject you would create object references for every page element that the user can interact with. pageSpec.js would use the elements declared in pageObject.js to perform the actual test and verifications. 

######Running End to end tests -
Protractor along with Standalone selenium web driver is used to execute these test scripts.

* Start the standalone selenium web driver present in contiv-ui/node_modules/protractor folder. 

```
$ node_modules/protractor/bin/webdriver-manager start
```
* Add your test script inside e2e-tests/
* Run your test scripts by specifying the location of your protractor conf file

```
$ node_modules/protractor/bin/protractor e2e-tests/protractor.conf.js
```
######Debugging End to end tests using webstorm- 

Follow the below instructions to configure your webstorm for running/debugging end to end tests.

* Click on Run/Edit	Configurations.
* Add a new node.js module.
* set the working directory path to contiv-ui/e2e-tests.
* set the javascript file path to contiv-ui/node_modules/protractor/lib/cli.js.
* set the Appliation parameters path to contiv-ui/e2e-tests/protractor.conf.js.

You can now set breakpoints and debug your test scripts through webstorm.




