import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Switch, Route, Redirect   } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Services from './component/Services';
import About from './component/About';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to='/'/>
    </Switch>
    </>
  );
}

export default App;
