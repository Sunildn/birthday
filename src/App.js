import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// CONTEXT
import { FairyContextProvider } from './context';

// PAGES
// import { Home, OurMission } from './pages/Main';
import { Begin, SelectTwin, SelectCake, OrderCake, Complete } from './pages';

function App() {
  return (
    <FairyContextProvider>
      <Router>
        <div className="App">
          <Switch>
            {/* MAIN ROUTES */}
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/about" component={OurMission} /> */}

            {/* FAIRY ROUTES */}
            <Route exact path="/" render={(props) => <Begin {...props} />} />
            <Route exact path="/select-twin" render={(props) => <SelectTwin {...props} />} />
            <Route exact path="/select-cake" render={(props) => <SelectCake {...props} />} />
            <Route exact path="/order" render={(props) => <OrderCake {...props} />} />
            <Route exact path="/success" render={(props) => <Complete {...props} />} />
          </Switch>
        </div>
      </Router>
    </FairyContextProvider>
  );
}

export default App;
