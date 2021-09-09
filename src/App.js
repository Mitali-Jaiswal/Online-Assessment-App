
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import MainComponent from './Components/Main/MainComponent';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Assessment/Home'
function App() {
  return (
    <>
    <BrowserRouter>
     
     
        <Switch>
          <Route path="/assessment" component={Home}  />
          <Route path="/" component={MainComponent} exact/>
          
        </Switch>
       
    </BrowserRouter>
     
      
    </>
  );
}

export default App;
