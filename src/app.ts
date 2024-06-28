const registry = LinnworksApps.appRegistry;


{
  let um = registry.view('user-management-users');

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

      proxy.uiService.openExtensionDialog("DIALOG_REF", {
        dialogTitle: "ttttt",
        dialogActions: []
      });
    },
    place: 'toolbar-buttons'
  });
}

{
  let inventory = registry.view('my-inventory');

  let disabled = true;
  inventory.whenReady((state) => {
    console.log("inventory ready", state);
  })

  inventory.whenStateUpdated((state) => {
    console.log('inventory state update', state)

    disabled = state.selectedItems.length === 0;
  })

  inventory.addButton({
    text: "FFFF",
    place: "toolbar-buttons",
    onClick(...{2: layer}) {
      console.log('inventory click', layer.uiService.viewState);
    },
    isDisabled() {
      return disabled;
    }
  })
}


{
  let po = registry.view('process-orders-popup');

  po.whenReady((state) => {
    console.log("po ready", state)
  })

  po.whenStateUpdated((state) => {
    console.log('po state update', state)
  })

  po.addButton({
    text: "Fake scan",
    place: "popup-action-buttons",
    onClick(...{2: layer}) {
      console.log('po click', layer.uiService.viewState)
    }
  })
}


{
  let OO = registry.view('open-orders-new');

  OO.whenStateUpdated((state) => {
    console.log('OO state update', state)
  })

  OO.addButton({
    text: "Pluggable",
    place: "toolbar-buttons",
    onClick(...{2: layer}) {
      console.log('OO click', layer.uiService.viewState);
    }
  })
}

{
  let viewOrder = registry.view("view-order");

  viewOrder.addButton({
    text: "Open something interesting",
    place: "toolbar-buttons",
    icon: "fa fa-cog",
    onClick(...{2: layer}) {
      console.log("view order", layer.uiService.context);
    }
  });
}

//
registry.registerExternalDialog({
    dialogUrl: "http://localhost:8080/",
    name: "DIALOG_REF"
});
//
// registry.registerExternalUi({
//     applicationUrl: "https://dashboard.xsellco.com/linnworks/auth/[{TOKEN}]",
//     stateUrl: "xcello-app",
//     leftMenuName: "XCELLO",
//     leftMenuSection: "Inventory",
//     title: "Xcello external ui"
// });
