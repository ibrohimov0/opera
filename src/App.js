import './App.css';
import AboutComponent from './components/aboutComponent';
import { HelpComponent } from './components/helpComponent';
import { MensComponent } from './components/mensComponent';
import ProjectComponent from './components/projectComponent';

function App() {
  return (
    <div className="App">
      <AboutComponent/>
      <ProjectComponent/>
      <HelpComponent/>
      <MensComponent/>
    </div>
  );
}

export default App;
