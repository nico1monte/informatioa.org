import ProfileIcon from './icons/profile.svg';
import ContactsIcon from './icons/contacts.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/logo.jpg'} className="App-logo" alt="logo" />
        <h1 className="App-header-logo-text">
          Informatioa
        </h1>
        <button type="button" className="App-header-button App-header-profile">
          <ProfileIcon />
        </button>
        <button type="button" className="App-header-button App-header-contacts">
          <ContactsIcon />
        </button>
        <div className="App-header-search">
          <input type="text" placeholder="Search Projects" />
        </div>
      </header>
    </div>
  );
}

export default App;
