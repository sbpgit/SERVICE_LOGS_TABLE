sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/library",
    "sap/ui/model/Sorter",
    "sap/m/Dialog",
    "sap/m/library",
    "sap/m/Text",
    "sap/m/Button",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast, Filter, FilterOperator, library, Sorter, Dialog, Text, Button, MessageBox) {
        "use strict";
        var that, oGModel;
        return Controller.extend("cpapp.servicelogsdetails.controller.Home", {
            onInit: function () {
                that = this;
                that.oGModel = that.getOwnerComponent().getModel("oGModel");
                 // Declaring JSON Model and size limit
                 that.oModel = new JSONModel();
                 that.oModelInactive = new JSONModel();           
                 that.oModel.setSizeLimit(1000);
                 that.oModelInactive.setSizeLimit(1000);
            },
            onAfterRendering: function () {
                sap.ui.core.BusyIndicator.show();
                this.getOwnerComponent().getModel("BModel").read("/getJobLogs", {
                    // filters: [
                    //     new Filter( "PARAMETER", FilterOperator.EQ, "TIMEZONE")
                    // ],                    
                    success: function (oData) {
                        if(oData.results.length>0){
                            that.oModel.setData({Jobresults:oData.results});
                            that.byId("jobList").setModel(that.oModel);
                        }
                        else{
                            that.oModel.setData({Jobresults:[]});
                            that.byId("jobList").setModel(that.oModel);
                        }
                        sap.ui.core.BusyIndicator.hide();
                    },
                    error: function (error) {
                        sap.ui.core.BusyIndicator.hide();
                        MessageToast.show("Failed to get data");
                    },
                });
            }
        });
    });

