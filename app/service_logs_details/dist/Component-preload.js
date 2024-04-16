//@ui5-bundle cpapp/servicelogsdetails/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"cpapp/servicelogsdetails/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","cpapp/servicelogsdetails/model/models"],function(e,i,t){"use strict";return e.extend("cpapp.servicelogsdetails.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"cpapp/servicelogsdetails/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("cpapp.servicelogsdetails.controller.App",{onInit:function(){}})});
},
	"cpapp/servicelogsdetails/controller/Home.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/m/MessageToast","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/core/library","sap/ui/model/Sorter","sap/m/Dialog","sap/m/library","sap/m/Text","sap/m/Button","sap/m/MessageBox"],function(e,o,t,s,i,a,r,l,n,d,u){"use strict";var c,p;return e.extend("cpapp.servicelogsdetails.controller.Home",{onInit:function(){c=this;c.oGModel=c.getOwnerComponent().getModel("oGModel");c.oModel=new o;c.oModelInactive=new o;c.oModel.setSizeLimit(1e3);c.oModelInactive.setSizeLimit(1e3)},onAfterRendering:function(){sap.ui.core.BusyIndicator.show();this.getOwnerComponent().getModel("BModel").read("/getJobLogs",{success:function(e){if(e.results.length>0){c.oModel.setData({Jobresults:e.results});c.byId("jobList").setModel(c.oModel)}else{c.oModel.setData({Jobresults:[]});c.byId("jobList").setModel(c.oModel)}sap.ui.core.BusyIndicator.hide()},error:function(e){sap.ui.core.BusyIndicator.hide();t.show("Failed to get data")}})}})});
},
	"cpapp/servicelogsdetails/i18n/i18n.properties":'# This is the resource bundle for cpapp.servicelogsdetails\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Service Log Details\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=Service Log Details\n\nflpTitle=Service Log Details\n\nflpSubtitle=An app for displaying details of Service Logs\n',
	"cpapp/servicelogsdetails/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"cpapp.servicelogsdetails","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.0","toolsId":"0844e77c-b753-47b8-b6ad-7d821ffb7abf"},"dataSources":{"mainService":{"uri":"v2/odata/v4/job-scheduler/","type":"OData","settings":{"annotations":[],"odataVersion":"2.0"}}},"crossNavigation":{"inbounds":{"ServiceLogDet-Display":{"semanticObject":"ServiceLogDet","action":"Display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.122.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"cpapp.servicelogsdetails.i18n.i18n"}},"oGModel":{"type":"sap.ui.model.json.JSONModel","settings":{"defaultBindingMode":"TwoWay"},"preload":true},"BModel":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true,"groupId":"$direct"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"cpapp.servicelogsdetails.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteHome","pattern":":?query:","target":["TargetHome"]}],"targets":{"TargetHome":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Home","viewName":"Home"}}},"rootView":{"viewName":"cpapp.servicelogsdetails.view.App","type":"XML","async":true,"id":"App"}},"sap.platform.cf":{"oAuthScopes":["$XSAPPNAME.User","$XSAPPNAME.admin"],"ui5VersionNumber":"1.117.1"}}',
	"cpapp/servicelogsdetails/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"cpapp/servicelogsdetails/view/App.view.xml":'<mvc:View controllerName="cpapp.servicelogsdetails.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"cpapp/servicelogsdetails/view/Home.view.xml":'<mvc:View controllerName="cpapp.servicelogsdetails.controller.Home"\n   xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core"\n\tdisplayBlock="true" xmlns="sap.m" xmlns:m="sap.m" xmlns:l="sap.ui.layout" xmlns:ux="sap.uxap" xmlns:f="sap.ui.layout.form"\n\txmlns:html="http://www.w3.org/1999/xhtml" xmlns:u="sap.ui.unified"><ux:ObjectPageLayout id="ObjectPageLayout"><ux:headerTitle><ux:ObjectPageDynamicHeaderTitle><ux:expandedHeading><HBox><Title text="{i18n>title}" class="TitleClass" titleAlignment="Center" wrapping="true"/></HBox></ux:expandedHeading><ux:snappedHeading><HBox fitContainer="true" alignItems="Center"><Title text="{i18n>title}" wrapping="true" class="TitleClass"/></HBox></ux:snappedHeading><ux:actions></ux:actions></ux:ObjectPageDynamicHeaderTitle></ux:headerTitle><ux:headerContent><Bar ><contentLeft><SearchField id="headSearch" liveChange="handleSearch" placeholder="Job ID/Name"/><ToolbarSpacer /></contentLeft></Bar></ux:headerContent><ux:sections><ux:ObjectPageSection><ux:subSections><ux:ObjectPageSubSection><ux:blocks><Table id="jobList" items="{path: \'/Jobresults\', sorter: {path: \'JOB_TIME_STAMP\',descending:true}}" itemPress="onhandlePress" growingScrollToLoad="true" mode="SingleSelectMaster"\n\t\t\t\t\t\t\t\t\t\t\t\tsticky="ColumnHeaders" selectionChange="onhandlePress" rememberSelections="false"><columns><Column hAlign="Left" vAlign="Middle" width="100px"><Text text="Job ID"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Job Name"/></Column><Column hAlign="Left" vAlign="Middle" width="75px"><Text text="Time Stamp"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Comments"/></Column><Column hAlign="Center" vAlign="Middle" width="100px"><Text text="Message Type"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Parameter 1"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Parameter 2"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Parameter 3"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Parameter 4"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Parameter 5"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Parameter 6"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Parameter 7"/></Column><Column hAlign="Left" vAlign="Middle"><Text text="Parameter 8"/></Column></columns><items><ColumnListItem><cells><Text text="{JOB_ID}"/><Text text="{JOB_NAME}"/><Text text="{JOB_TIME_STAMP}"/><Text text="{COMMENT}"/><Text text="{MESSAGE_TYPE}"/><Text text="{PARAMETER_1}"/><Text text="{PARAMETER_2}"/><Text text="{PARAMETER_3}"/><Text text="{PARAMETER_4}"/><Text text="{PARAMETER_5}"/><Text text="{PARAMETER_6}"/><Text text="{PARAMETER_7}"/><Text text="{PARAMETER_8}"/></cells></ColumnListItem></items></Table></ux:blocks></ux:ObjectPageSubSection></ux:subSections></ux:ObjectPageSection></ux:sections></ux:ObjectPageLayout></mvc:View>\n'
}});
