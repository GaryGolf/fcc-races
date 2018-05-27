/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const css: any;
  export = css;
}

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  __INITIAL_STATE__: AppStore;
}

// enviroment constant
declare const PRODUCTION: boolean;