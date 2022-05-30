# 🚀 Placeholder/pluggable app example
To build current example app:
```
pnpm run build
```

To serve a file during local development:
```
pnpm run serve
```

To test local application with linnworks:
_Go to linnworks.net and press SHIFT + ALT + Q_

# What is a pluggable application
Linnworks runtime environment would expect single js file (a bundle). This bundle has to register all pluggable/external apps using linnworks sdk api.
In general, it is up to you how exactly you write code and compile it into a single bundle, but this project is an example you can copy to understand the concept.
In this example we use typescript for @linnworks/extension-sdk intellisense and compile all together into on bundle under dist/pluggable-app.js.

You have to publish dist/pluggable-app.js file somewhere on https server, so it would be accessible from linnworks environment.


# Steps to create a placeholder app:

## Prerequisites:
* Make sure you are using our appgate to access https://npm.linnworks.com
* Create .npmrc file with registry setup:
* Install pnpm for maximum compatibility with our libraries
   ```
  @linnworks:registry=https://npm.linnworks.com
  ```

Install pnpm https://pnpm.io/_

```
npm i -g pnpm
pnpm setup
pnpm add -g pnpm
```

Install linnworks packages dedicated to support extensions developers with strictly defined interfaces:
   
 ```
pnpm add @linnworks/extension-sdk @linnworks/entities
pnpm add typescript esbuild -D
   ```

_Done, this steps should help you to organize initial project configuration, from this point you can start developing a linnworks extension._
