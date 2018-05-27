/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const css: any;
  export = css;
}

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}

// enviroment constant
declare const PRODUCTION: boolean;