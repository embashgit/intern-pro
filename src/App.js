import React from 'react';
import "circular-std";
import './App.css';
import { Switch, Route,Router } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import routeDefinitions, { Slides, Slide1 } from './container/routes'
import { createBrowserHistory } from 'history';
import { DefaultLayout } from './routes';
import { blue } from './mui';

export const history = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      light: '#daa520',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    textPrimary:{
      main:"#daa520"
    }
  }
})
function App() {
  const routes = routeDefinitions.map(({
    path, component, exact, key, name
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
    <MuiThemeProvider theme={theme}>
        <Router history={history} >
      <Switch>
        <Route exact  path="/auth" name="Login" component={Slides} />
        <Route path="/slide1" name="Home" component={Slide1} />
        <Route  path="/" name="Defaultlayout" component={DefaultLayout} />
      </Switch>
    </Router>
    </MuiThemeProvider>
    
  );
}

export default App;
