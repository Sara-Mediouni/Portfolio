import './App.css';
import Navbarcomponent from './Components/Navbar'

import Banner from './Components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/about/Education';

import About from './Components/about/About';
import Certif from './Components/certif';
function App() {
  return (
    <div>
    <Navbarcomponent/>
    <Banner/>
    <About/>
    <Certif/>
    <Education/>
    <Skills/>
    <Projects/>
 

    </div>
  );
}

export default App;
