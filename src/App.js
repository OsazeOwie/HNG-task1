import './App.css';
import Content from './Content';
import Footer from './Footer';
import Social from './Social';

function App() {
  return (
    <div className="App">
      <div className="mainsection">
          <Content/>
      </div>
      <div className="social-section">
          <Social/>
      </div>
      <div className="footer">
          <Footer/>
      </div>
    </div>
  );
}

export default App;
