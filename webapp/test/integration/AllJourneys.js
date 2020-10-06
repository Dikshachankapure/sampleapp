/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"demo/sampleapp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"demo/sampleapp/test/integration/pages/View1",
	"demo/sampleapp/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "demo.sampleapp.view.",
		autoWait: true
	});
});