import { ModalName } from "@linnworks/extension-sdk";
import { PermissionsUser } from "@linnworks/entities";

const registry = LinnworksApps.appRegistry;

registry.registerPlaceholderItem("user-management-user-list-buttons", {
    type: "button",
    icon: "fa fa-cog",
    text: "Placeholder layer",
    onClick(e, placeholder, proxy) {
        const proxyDialog = proxy.openModal<never, PermissionsUser>({
            name: ModalName.ADD_NEW_USER
        });

        if (proxyDialog === null) {
            return;
        }

        proxyDialog.afterClosed.then(_ => {
            console.log(_);
        })
    }
})
