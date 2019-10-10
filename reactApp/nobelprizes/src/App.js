import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {NobelprizeOverview} from "./components/Overview/nobelprizeOverview";
import {Header} from "./components/Header/header";
import {Footer} from "./components/Footer/footer"
import {NobelprizeWinnerDetail} from "./components/NobelprizeWinnerDetail/nobelprizeWinnerDetail";
import './scss/style.scss'
import './scss/animations.scss'
import {Loader} from "./components/Loader/loader";

class App extends Component {
  render() {
    return (
        <>
            <Header />
              <main>
                <Switch>
                  <Route exact path="/" component={NobelprizeOverview} />
                  <Route exact path="/nobelprizeWinner/:id" component={NobelprizeWinnerDetail}/>
                  <Route exact path="/loaderAnimation" component={Loader}/>
                </Switch>
              </main>
            <Footer/>
        </>

    );
  }
}
export default App;
