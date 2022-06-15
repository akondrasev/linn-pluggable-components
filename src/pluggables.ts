/*
 * this is the main placeholder file which is going to register itself to linnworks apps at runtime
 */

import { ModalName } from "@linnworks/extension-sdk";

//user import type instead of usual import to make sure it is not included in runtime bundle
import type { PermissionsUser } from "@linnworks/entities";

//get registry from global scope, it has to be implemented by linnworks
const registry = LinnworksApps.appRegistry;

/*
 * you can register placeholder under strictly defined key, if you try to make mistake - typescript will not compile
 */
registry.registerPlaceholderItem("user-management-user-list-buttons", {
    type: "button",
    icon: "fa fa-plus",
    text: "Example app button",
    onClick(e, placeholder, proxy) {
        proxy.uiService.getSelectedPageDataItems().subscribe(_ => {
            console.log(_);
        });


        /*const proxyDialog = proxy.uiService.openModal<never, PermissionsUser>({
            name: ModalName.ADD_NEW_USER
        });

        if (proxyDialog === null) {
            return;
        }

        proxyDialog.afterClosed.then(_ => {
            console.log(_);
        });*/
    }
});
