import './App.css';
import Navbarcomponent from './components/Navbar'
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ProjectCard } from './components/ProjectCard';
function App() {
  return (
    <div className="App">
     <Navbarcomponent/>
     <Banner/>
     <Skills/>
     <Projects/>
    </div>
  );
}

export default App;
