import './App.css';
import MainPage from './Containers/Main Page/MainPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MorePage from './Containers/More Page/MorePage';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<MainPage setSearch = {setSearch} search = {search}/>}/>
        <Route path = '/morepage' element = {<MorePage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
