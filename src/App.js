
import './App.css';
import Navbar from './components/Navbar'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homescreen from './screens/Homescreen';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Productdescscreen from './screens/Productdescscreen';



const App=()=> {
  return (
    <div className="App">

        <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Homescreen}/>
        <Route path='/product/:id' component={Productdescscreen}/>
        </Switch>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
