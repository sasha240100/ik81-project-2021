import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";

import { Router } from "react-router-dom";
import { Switch, Route } from "react-router";

import ArticlesList from "./screens/articles-list";
import Article from "./screens/article";
import Contribute from "./screens/contribute";

import {Provider} from 'react-redux'

import store from './redux/store'
import { history } from "./history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/article/:slug" component={Article} />
            <Route path="/contribute" component={Contribute} />
            <Route component={ArticlesList} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
