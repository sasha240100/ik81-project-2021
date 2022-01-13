import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

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
  const [searchPhrase, setSearchPhrase] = useState('')

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Header onSearch={setSearchPhrase} />
          <Switch>
            <Route path="/article/:slug" component={Article} />
            <Route path="/contribute" component={Contribute} />
            <Route>
              <ArticlesList searchPhrase={searchPhrase} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
