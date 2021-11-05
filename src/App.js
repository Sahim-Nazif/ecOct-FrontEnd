
import './App.css';
import Navbar from './components/Navbar'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homescreen from './screens/Homescreen';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen'
import Signup from './screens/Signup';
import Loginscreen from './screens/Loginscreen'

const App=()=> {
  return (
    <div className="App">

        <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Homescreen}/>
        <Route path='/product/:id' component={Productdescscreen}/>
        <Route path='/cart' component={Cartscreen}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Loginscreen}/>
        </Switch>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
