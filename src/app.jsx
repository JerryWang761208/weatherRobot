import React from 'react';
import { render } from 'react-dom';
import { createHashHistory, useBasename } from 'history';
import { Router } from 'react-router';
import "./common/styles/app.less";
import * as firebase from 'firebase';

const history = useBasename(createHashHistory)({
   queryKey: false
})

const rootRoute = {
  path: '/',
  component: require('./components/pages/Login'),
}

var config = {
    apiKey: "AIzaSyDDFA-Dmpu5MVln5sl1D0pB3B_tuv_Yb9c",
    authDomain: "weather-robot-5988e.firebaseapp.com",
    databaseURL: "https://weather-robot-5988e.firebaseio.com",
    storageBucket: "weather-robot-5988e.appspot.com",
    messagingSenderId: "554509220665"
  };
firebase.initializeApp(config);
firebase.database.ref().set({
  appName:'Weather_Robot'      
});
render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('app')
)

// /**
//  * App entry point
//  */

// // Polyfill

// import "babel-core/polyfill";

// // Libraries
// import React from "react";
// import Router from "react-router";


// // Base styling
// import "./common/styles/app.less";

// // Routers
// import Routes from "./routers/Routes";


// // ID of the DOM element to mount app on
// const DOM_APP_EL_ID = "app";

// // Initialize routes depending on session
// let routes;

// routes = Routes.getRoutes();

// *
//  * Given a set of routes and params associated with the current active state,
//  * call #fetchData(params) on all Route Handlers that define that static method.
//  *
//  * This is the main mechanism by which a route handler (page)
//  * requests its data.
//  *
//  * @example Defining a route handler that requests data
//  *
//  *  var SomePage = React.createClass({
//  *    statics: {
//  *      fetchData(params) {
//  *        return getData({
//  *          data: {...}
//  *        })
//  *      }
//  *    }
//  *  })
//  *
//  *  Given a Route handler:
//  *    <Route name="some-page" handler={SomePage} />
//  *
//  *  when it becomes activated, it will be passed a {data} prop containing the response:
//  *    <SomePage data="..." />
//  *
//  *
//  * @param  {[Route]} routes list of activated routes
//  * @param  {[Param]} params route params
//  *
//  * @return {Promise}        data containing responses mapped by route name
 
// /*
// let fetchData = function(routes, params) {
//   let data = {};

//   return Promise.all(routes
//     .filter(route => route.handler.fetchData)
//     .map(route => {
//       return route.handler.fetchData(params).then(resp => {
//         data[route.name] = resp;
//         data.tag = route.name;
//       })
//     })
//   ).then(() => data);
// }*/

// // Start the router
// Router.run(routes, function(Handler) {
//   React.render(<Handler />, document.getElementById(DOM_APP_EL_ID));
// });



// /**
//  * App entry point
//  */

// // Polyfill

// import "babel-core/polyfill";

// // Libraries
// import React from "react";
// import Router from "react-router";


// // Base styling
// import "./common/styles/app.less";

// // Routers
// import Routes from "./routers/Routes";


// // ID of the DOM element to mount app on
// const DOM_APP_EL_ID = "app";

// // Initialize routes depending on session
// let routes;

// routes = Routes.getRoutes();

// *
//  * Given a set of routes and params associated with the current active state,
//  * call #fetchData(params) on all Route Handlers that define that static method.
//  *
//  * This is the main mechanism by which a route handler (page)
//  * requests its data.
//  *
//  * @example Defining a route handler that requests data
//  *
//  *  var SomePage = React.createClass({
//  *    statics: {
//  *      fetchData(params) {
//  *        return getData({
//  *          data: {...}
//  *        })
//  *      }
//  *    }
//  *  })
//  *
//  *  Given a Route handler:
//  *    <Route name="some-page" handler={SomePage} />
//  *
//  *  when it becomes activated, it will be passed a {data} prop containing the response:
//  *    <SomePage data="..." />
//  *
//  *
//  * @param  {[Route]} routes list of activated routes
//  * @param  {[Param]} params route params
//  *
//  * @return {Promise}        data containing responses mapped by route name
 
// /*
// let fetchData = function(routes, params) {
//   let data = {};

//   return Promise.all(routes
//     .filter(route => route.handler.fetchData)
//     .map(route => {
//       return route.handler.fetchData(params).then(resp => {
//         data[route.name] = resp;
//         data.tag = route.name;
//       })
//     })
//   ).then(() => data);
// }*/

// // Start the router
// Router.run(routes, function(Handler) {
//   React.render(<Handler />, document.getElementById(DOM_APP_EL_ID));
// });