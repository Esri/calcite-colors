# Patterns-Colors
The Patterns Color repo is where we host Esri's official color documentation that can be see on the forth coming Patterns.esri.com site.  Currently the repo contains a mixture of CSS, SASS and Stylus files tha you can use in your projects.

Feel free to download the files for use in your project or add a refrence in your files that points to the CDN files `CDN Link Coming Soon`.  Also the use of a `Submodule` to import these files into your project.

## SASS Variables file
* A [SASS](http://sass-lang.com/) variables file file can be found in the SCSS folder `variables.scss`.  To learn how to use `Variable` files within SASS please read [USING SASS Variables](http://sass-lang.com/guide#topic-2).  


## Stylus Variables file
* [Stylus](http://learnboost.github.io/stylus/)
* 
## To use CSS

#To setup dev environment

* Checkout this repo in a folder. In the rest of the description, we will assume that the folder is named operationsdashboard-js.
* Create a web app under your server that point to the src folder under the &lt;operationdashboard-js&gt;  folder. For example, http://&lt;server&gt;/operationsdashboard-js is pointing to &lt;operationsdashboard-js&gt;/src
* For authentication, operations dashboard requires https. You need to setup your server for https. If you need a server certificate you can apply option 1 or 2 from http://mediawikidev.esri.com/index.php/Esri_SSL_Certificate_Server
* On your web server, add "*.hbs" (not including quotation) as a new mime type of "text/html" (not including quotation)
* Verify setup by loading this page in the browser. Since the web app will be hosted on your own server you will need to use a query param to define the location of the portal: ?portal=www, ?portal=devext, ?portal=qaext, or any portal link as ?portal=`www.myportal.com`

  `http://<domain>/operationsdashboard-js/index.html#/<viewid>?portal=<portalCodeOrPortalLink>`
   
  A good example:
  
  `http://fredmac2.esri.com/operationsdashboard-js/index.html#/6d088d5f7f7441deaac54dac0d67daff?portal=www`

* The following steps are only necessary if you want to test IE9. You will need to setup a proxy service on your server. The web app will invoke the proxy service `http://<domain>/sharing/proxy/`.
You need to setup an alias in you server that point to the corresponding proxy type folder (PHP or DotNet or Java).
  * Checkout the repo `git@devtopia.esri.com:fred/resource-proxy.git` in a folder on your machine.
  * Setup a web service in your web server as `http://<domainr>/sharing/proxy` pointing to the corresponding proxy folder.
  For example on an Apache server (mac) point to &lt;resource-proxy&/PHP or for IIS &lt;resource-proxy&gt;/DotNet.
  Refer to the different README.md files under &lt;resource-proxy&gt; for more details. Make sure you set the default file for the service to
  the right proxy file (for example for php, you should set the default file for the service to proxy.php and for IIS to proxy.ashx).
  ** Notes for setting up proxy service on IIS: There is a bug confirmed by Online team on 1/15/2014 with the proxy for IIS from `git@devtopia.esri.com:fred/resource-proxy.git`. To work around it, if you are setting up proxy for IIS, download proxypage_net.zip from https://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html. and follow the steps to setup proxy on IIS.
* Note: we never tested installing operations dashboard on a development machine outside or arcgis.com or esri.com. If you need to support this scenario, you should contact the team.
* Additional debugging query parameters:
  * debug=true will load the non minified versions of the libraries (d3, jquery, ember, etc.)
  * beat=false will stop the auto refresh of the view, could be useful when debugging queries


#To setup build environment

1. Checkout [operationsdashboard-js](https://devtopia.esri.com/fred/operationsdashboard-js) in a folder [operationsdashboard-js].
3. Open command prompt in Windows: `Start Menu > Run > cmd`.
4. `cd operationsdashboard-js/build`
5. Run `build.bat` or `sh build.sh`
6. Deploy or define `buildOutput` folder to your server for testing
