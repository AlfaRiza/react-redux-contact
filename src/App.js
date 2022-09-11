import logo from './logo.svg';
import './App.css';
import {ListContact, AddContact} from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Aplikasi Management Kontak</h2>
        <AddContact/>
        <hr/>
        <ListContact/>
      </header>
    </div>
  );
}

export default App;
