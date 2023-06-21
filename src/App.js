import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MainComponent from './components/MainComponent';

function App() {
  const [data, setData] = useState([
    { id: 1, title: 'task 1' },
    { id: 2, title: 'task 2' },
    { id: 3, title: 'task 3' },
    { id: 4, title: 'task 4' }
  ])
  return (
    <div className="App border border-3 shadow-lg container my-3">
      
      <MainComponent sampleData={data} stateUpdater = {setData} />
    </div>
  );
}

export default App;
