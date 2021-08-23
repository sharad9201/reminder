import React, { useState, useEffect } from 'react';



function App() {
  const [reminders, setReminders] = useState([])
  useEffect(()=>{
    getReminders();
  },[])

  function getReminders(){
    const url="http://127.0.0.1:8000/api/items";
    fetch(url).then(resp=>resp.json())
    .then(resp=>setReminders(resp))
  }
  function reminderDelete(id){
    // alert(id);
    fetch(`http://127.0.0.1:8000/api/delete/${id}`,{
      method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn(resp)
      getReminders();
    })
  })
    

  }
  return <main>
    <section className="container">
      {/* <h3 >{reminder.length} reminder games today </h3>
      <List reminder={reminder}/>
      <button onClick={()=> setReminder([])}>
        clear all 
        </button> */}
      
        
      {
        reminders.map(reminder=><div><p>{reminder.name} 
        
          <button onClick={()=>reminderDelete(reminder.id)}>Delete</button>
          </p> 
         </div>)
      }

      
    </section>
  </main>
}

export default App;

