// npm install -g yarn
// yarn init
// yarn add -D webpack
// yarn add react
// yarn build

//steps after installing yarn => webpack.config.js //IMPORT THE FILE IN THE ES5
// 1. move both main.js && index.js outside of src folder.
// 2. delete src folder.
// 3. create webpack.config.js
// const path = require("path");
// module.exports = {
  // //main path
  // entry: "./src/index.js",
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "main.js",
  // },
// }
// 4. install yarn add -D babel-loader @babel/core @babel/preset-env webpack => three libraries for ES6 to ES5
// inside module.exports.js
// module {
  // where to apply the rule
  // rules:  [{
    // pentru toate fisierele js
        // test: /\.jsx?/,
        //in afara de node_modules
        // exclude: /node_modules/,
        //ce loader sa foloseasca
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },]
// }

// 5. de creat .babelrc file
// reguli de loader
// {
//   "presets": ["@babel/preset-env"]
// }

// 6. create folder public, create file index.html => html:5
// add a div with id="root"
// to add this file in dist folder
// webpack html template
// yarn add -D html-webpack-plugin

// 7. import in the webpack.config.js file
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// inside module
// plugins: [
    // new HtmlWebpackPlugin({
        // take the template created
    //     template: "./public/index.html",
    // the file we want to keep
    //     filename: "index.html",
    //   }),
    // ],
// this will add the file in dist folder and it will add automatically <script defer src="main.js"></script> inside the file.

// 8. start the server and
// dummy server => webpack server
// add another plugin
// yarn add -D webpack-dev-server
// 9. in package.json add in scripts
    // "start": "webpack serve --open"
// in the terminal write: yarn start

// 10. yarn add react-dom
// create the react app
// import React from "react";

// 11. yarn add -D @babel/preset-react
// add the second parameter in .babelrc file
// yarn add -D @babel/preset-react

// 12. index.js - React
// - the first letter always capital
// - return only 1 element from function
// - React accepts only one parent div
// - instead of parent div, we can use Fragment (that you need to import it from "react") or just <></> (babel interpretation)
// - instead of class use className

// exercise: build a React function with h1 and h2 elements
// const App = () => {
//   return (
//     <>
//       <h1>Nicoleta</h1>
//       <h2>I'm learning React</h2>
//     </>
//   );
// };

// const App = (props)
// props are the passed attributes inside the ReactDOM.rendering App, firstName, lastName
// ReactDOM.render(<App firstName="Nicoleta" lastName="Ungureanu" />, document.getElementById("root"));
// you can also detructure props as {firstName, lastName}
// const App = ({firstName, lastName}) => {
//   return (
//     <>
//       <h1>firstName</h1>
//       <h2>lastName</h2>
//     </>
//   );
// };

// componenet -> reusable
// const App = ({ firstName, caption}) => {
//   return (
//     <>
//       <h1>{firstName}</h1>
//       <h2>{caption}</h2>
//     </>
//   );
// };

// for rendering
// ReactDOM.render(<App firstName="Nicoleta" caption="I'm learning React"/>, document.getElementById("root"));

// Props -> pass the information to component
// Props -> immutable

// shortcut to import React: imr/imp

// to add css
// write the inline style as an object
// backgroundColor: 'red'
// the property in camelCase
// the value as a string, otherwise it will interpret it as a html variable

// for extern css
// import style from "./appStyle";
// the file appStyle.css => reusable
// const style = {
//   h1: {
//     backgroundColor: "red",
//     color: "white",
//   },
// };

// export default style;

// you can import also a normal css file with
// import "./styles.css";
// but we need to add a rule for the css in webpack
// {
//   test: /\.css$/i,
//   exclude: /node_modules/,
// // css loader (identify the file), and style loader(put the style in html)
//   use: ["style-loader", "css-loader"],
// },
// terminal command: yarn add -D css-loader style-loader

// for every file, we need to add a rule in webpack for it to know how to translate it: svg etc.
