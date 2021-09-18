import './App.css';
import AppHeader from './components/AppHeader';
import SearchDeck from './components/SearchDeck';

function App() {
  return (
    <div className="App">
      <AppHeader title="Lord of the APIS" />
      <SearchDeck />
    </div>
  );
}

export default App;
