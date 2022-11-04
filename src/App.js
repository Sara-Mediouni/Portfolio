import './App.css';
import Navbarcomponent from './Components/Navbar'

import Banner from './Components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
     <Navbarcomponent/>
     <Banner/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
