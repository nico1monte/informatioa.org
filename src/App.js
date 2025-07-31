import React, { useState } from 'react';
import ProfileIcon from './icons/profile.svg';
import ContactsIcon from './icons/contacts.svg';
import projects from './projects.json';

import { ProjectCard } from './components/ProjectCard';
import { ProjectsCube } from './components/ProjectsCube';

import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <video
            src={'/icons/logo-animated.mp4'}
            className="App-logo"
            autoPlay
            loop
            muted
            playsInline
            alt="logo"
          />
        </div>
        <h1 className="App-header-logo-text">
          Informatioa
        </h1>
        <div className='App-header-controls'>
          <button type="button" className="App-header-button App-header-profile">
            <ProfileIcon />
          </button>
          <a href="https://t.me/+lUostc2WfHIzMTdh" className="App-header-button App-header-contacts">
            <ContactsIcon />
          </a>
          <div className="App-header-search">
            <input
              type="text"
              placeholder="Search Projects"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </header>

      <main className="App-main">
        <h2 className="App-main-title">All projects of Informatioa:</h2>
        <div className='App-main-content'>
          {filteredProjects.length === 0 && <div className="App-error-on-find-container">
            <img className='App-error-on-find' src={'/icons/error_on_find.png'} alt="no projects" />
            No projects found
          </div>}
          <div>
            {
              filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            }
          </div>
          {filteredProjects.length > 0 && <ProjectsCube projects={filteredProjects} />}
        </div>
      </main>
    </div>
  );
}

export default App;
