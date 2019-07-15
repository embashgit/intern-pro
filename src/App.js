import React from 'react';
import "circular-std";
import './App.css';
import { Switch,BrowserRouter, Route } from 'react-router-dom'
import routeDefinitions from './routes'

function App() {
  const routes = routeDefinitions.map(({
    path, component,exact, key,name
  }) => {
    return (
      <Route
        exact={Boolean(exact)}
        path={path}
        component={component}
        name={name}
        key={key}
      />
    )
  });
  return (
    <BrowserRouter> 
    <Switch>
      {routes}
    </Switch>
    </BrowserRouter>
  );
}

export default App;
