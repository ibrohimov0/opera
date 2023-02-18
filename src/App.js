import './App.css';
import AboutComponent from './components/aboutComponent';
import { HelpComponent } from './components/helpComponent';
import ProjectComponent from './components/projectComponent';

function App() {
  return (
    <div className="App">
      <AboutComponent/>
      <ProjectComponent/>
      <HelpComponent/>
    </div>
  );
}

export default App;
