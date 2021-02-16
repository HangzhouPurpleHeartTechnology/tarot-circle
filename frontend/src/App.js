import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/BottomNavbar';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import TopBar from './components/navbar/TopNavbar';
import ShowCardSpread from './components/card_spreads/ShowCardSpread';
import CardInfo from './components/cards/SingleCardExplanation';

function App() {
  return (
    <div id='app'>
      <TopBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/cardspreads/:cardSpreadId'>
          <ShowCardSpread />
        </Route>
        <Route path='/card/:cardIndex'>
          <CardInfo />
        </Route>
      </Switch>
      <Navbar />
    </div>
  );
}

export default App;
