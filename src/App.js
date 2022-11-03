import './App.css';
import Content from './Content';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="mainsection">
          <Switch>
            <Route exact path='/'>
              <Content/>
            </Route>
            <Route path='/contact'>
              <Contact/>
            </Route>
          </Switch>
      </div>
    
      <div className="footer">
          <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;
