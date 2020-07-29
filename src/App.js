/* eslint-disable import/no-cycle */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BASE_FONT_SIZE } from './config/const';
import themes from './themes';
import Header from './components/Header';
import Nav from './components/Nav';
import ErrorBoundary from './components/ErrorBoundary';
/* Pages */
// import Login from './pages/Login';
// import Movies from './pages/Movies';
const Login = lazy(() => import('./pages/Login'));
const Movies = lazy(() => import('./pages/Movies'));

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap');
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  * { box-sizing: border-box }
  .App {
    align-items: center;
    font-size: ${props => props.fontSize};
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: auto;
  }

  hr {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    margin: -8px;
    width: calc(100% + 16px);
    z-index: 1;
    height: 10px;
  }

  body {
    background-color: ${props => props.theme.backgroundBody} !important;
  }
`;

const themeContext = {
  theme: themes.light,
  toogleTheme: () => {}
};

export const ThemeContext = React.createContext(themeContext);

const App = () => {
  return (
    <ThemeProvider theme={themeContext.theme}>
      <GlobalStyle fontSize={BASE_FONT_SIZE} />
      <BrowserRouter>
        <div className="App">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <hr />
              <Nav />
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
