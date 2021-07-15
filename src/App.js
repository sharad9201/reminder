import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [reminder, setReminder] = useState(data)
  return <main>
    <section className="container">
      <h3 >{reminder.length} reminder games today </h3>
      <List reminder={reminder}/>
      <button onClick={()=> setReminder([])}>
        clear all
      </button>
    </section>
  </main>
}

export default App;