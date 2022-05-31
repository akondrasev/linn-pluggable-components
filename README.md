# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
pnpm run build
```


# Steps to create a placeholder app:

## Prerequisites:

_Install pnpm https://pnpm.io/_

```
npm i -g pnpm
pnpm setup
pnpm add -g pnpm
```

Install webpack https://webpack.js.org/:

```
pnpm add -g webpack webpack-cli @webpack-cli/generators
```

## Create application

1. Create a folder for the app like "placeholder-app-example"
2. Open cmd in this folder and run:
   ```
   webpack init
   ```
3. Make this recommended choices during webpack init:
   ```
   > Typescript
   > use dev server (Y answer )
   > do not simplify html creation (N answer )
   > do not use PWA support (N answer )
   > no css support (none answer )
   > do not use prettier (n answer)
   > pick pnpm package manager
   ```
4. Update tsconfig.json: 
    ```
   "moduleResolution": "Node",
   "strict": true,
   "lib": ["ES2015", "dom"],
   "types": [
        "@linnworks/extension-sdk"
    ],
   "module": "ES2020"
   ```
5. Install linnworks packages dedicated to support extensions developers with strictly defined interfaces:
    ```
   pnpm add @linnworks/extension-sdk @linnworks/entities
   ```

_Done, this steps should help you to organize initial project configuration, from this point you can start developing a linnworks extension._
