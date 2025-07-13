import ProfileIcon from './icons/profile.svg';
import ContactsIcon from './icons/contacts.svg';
import projects from './projects.json';

import { ProjectCard } from './components/ProjectCard';
import { ProjectsCube } from './components/ProjectsCube';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/logo.jpg'} className="App-logo" alt="logo" />
        <h1 className="App-header-logo-text">
          Informatioa
        </h1>
        <div className='App-header-controls'>
          <button type="button" className="App-header-button App-header-profile">
            <ProfileIcon />
          </button>
          <button type="button" className="App-header-button App-header-contacts">
            <ContactsIcon />
          </button>
          <div className="App-header-search">
            <input type="text" placeholder="Search Projects" />
          </div>
        </div>
      </header>

      <main className="App-main">
        <h2 className="App-main-title">All projects of Informatioa:</h2>
        <div className='App-main-content'>
          <div>
            {
              projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            }
          </div>
          <ProjectsCube projects={projects} />
        </div>
      </main>
    </div>
  );
}

export default App;
