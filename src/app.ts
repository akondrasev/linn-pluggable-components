const registry = LinnworksApps.appRegistry;

registry.registerPlaceholderItem("user-management-user-list-buttons", {
    type: "button",
    icon: "fa fa-plus",
    text: "Example app button",
    onClick(e, placeholder, proxy) {
        //TODO missing access to session in proxy

        proxy.uiService.getSelectedPageDataItems().then(_ => {
            console.log(_);
        });

        const proxyDialog = proxy.uiService.openExtensionDialog("DIALOG_REF", {
            dialogTitle: "Title",
            dialogActions: [],
            data: {
                test: "string"
            }//pass anything to your dialog, this data should be passed inside iframe by linnworks host
        });

        if (proxyDialog === null) {
            return;
        }

        proxyDialog.afterClosed.then(_ => {
            console.log(_);
        });
    }
});

registry.registerExternalDialog({
    dialogUrl: "http://localhost:8080/",
    name: "DIALOG_REF"
});

registry.registerExternalUi({
    applicationUrl: "https://dashboard.xsellco.com/linnworks/auth/[{TOKEN}]",
    stateUrl: "xcello-app",
    leftMenuName: "XCELLO",
    leftMenuSection: "Inventory",
    title: "Xcello external ui"
});
