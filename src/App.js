import List from './List';
import './App.css';
import { useState } from 'react';
import data from './data';

function App() {
  const [people,setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h2>{people.length} Birthday Reminder</h2>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
