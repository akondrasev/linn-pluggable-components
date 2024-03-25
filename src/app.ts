const registry = LinnworksApps.appRegistry;

let um = registry.view('user-management-users');
let inventory = registry.view('my-inventory');
let po = registry.view('process-orders-popup');

um.whenReady((state) => {
    console.log("ready: ", state);
})

um.whenStateUpdated((state) => {
    console.log("state updated", state);
});

um.addButton({
    text: "New generation",
    icon: "fa fa-print",
    onClick(e, placeholder, proxy) {
        console.log(proxy.uiService.viewState);

        // proxy.uiService.openModal({
        //     name: "ADD_NEW_USER"
        // })
    },
    place: 'toolbar-buttons'
});


inventory.whenReady((state) => {
    console.log("inventory ready", state);
})

inventory.whenStateUpdated((state) => {
    console.log('inventory state update', state)
})

inventory.addButton({
    text: "FFFF",
    place: "toolbar-buttons",
    onClick(...{2: layer}) {
        console.log('inventory click', layer.uiService.viewState);
    }
})


po.whenReady((state) => {
    console.log("po ready", state)
})

po.whenStateUpdated((state) => {
    console.log('po state update', state)
})

po.addButton({
    text: "FFFF",
    place: "popup-action-buttons",
    onClick(...{2: layer}) {
        console.log('po click', layer.uiService.viewState)
    }
})


//
// registry.registerExternalDialog({
//     dialogUrl: "http://localhost:8080/",
//     name: "DIALOG_REF"
// });
//
// registry.registerExternalUi({
//     applicationUrl: "https://dashboard.xsellco.com/linnworks/auth/[{TOKEN}]",
//     stateUrl: "xcello-app",
//     leftMenuName: "XCELLO",
//     leftMenuSection: "Inventory",
//     title: "Xcello external ui"
// });
