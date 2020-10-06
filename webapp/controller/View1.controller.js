sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ndc/BarcodeScanner'
], function (Controller, BarcodeScanner) {
	"use strict";

	return Controller.extend("demo.sampleapp.controller.View1", {

		onAfterRendering: function () {
			var oTextArea = this.getView().byId("txtEanscanned")
			$(oTextArea).keypress(function (e) {

			

			});
			/*var oTextArea = this.getView().byId("txtEanscanned");
			oTextArea.attachLiveChange(function (oEvent) {
				
			});*/
		},
		onInit: function () {

		}
	});
});