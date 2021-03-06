import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect } from "react-router";


import LoginPage from "../components/pages/Login";

var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
          <Route name="index" path="/" handler={LoginPage}>
            
          </Route>
      );
    }
  },
  render: function() {
  
  }
  
});

export default Routes;

// <Route name="dashboard" path="/dashboard" handler={DashboardLayout}>
//               <Route name="dashboard.overview" path="/overview" handler={DashboardOverviewPage} />
//               <Route name="dashboard.reports" path="/reports" handler={DashboardReportsPage} />
//               <DefaultRoute name="dashboard.default" handler={DashboardOverviewPage} />
//             </Route>
//             <Route name="login" path="/login" handler={LoginPage} />
//             <DefaultRoute name="default" handler={DashboardLayout} />
//             <Redirect from="/" to="dashboard.overview" />