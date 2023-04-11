import logo from './logo.svg';
import './App.css';
import MainPage from './Containers/MainPage';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
<MainPage setSearch = {setSearch} search = {search}/>
    </div>
  );
}

export default App;
