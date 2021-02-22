import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/BottomNavbar';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import TopBar from './components/navbar/TopNavbar';
import ShowCardSpread from './components/card_spreads/ShowCardSpread';
import CardInfo from './components/cards/SingleCardExplanation';
import { AuthRoute, ProtectedRoute } from './components/auth/SpecialRoutes';

function App() {
  return (
    <div id='app'>
      <TopBar />
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <AuthRoute path='/signin' component={Signin} />
        <AuthRoute path='/signup' component={Signup} />
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
