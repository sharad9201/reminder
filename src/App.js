import React, { useState, useEffect } from 'react';



function App() {
  const [reminders, setReminders] = useState([])
  
  // const [reminder,setReminder]=useState("")

  // function handleSubmit(e){
  //   e.preventDefault();

  //   const newReminder = {
  //     text,
  //     completed: false,
  //   }

    // setReminders([...reminders].concat(newReminder))
    // setReminder("")
    // console.log(newReminder);

    fetch ("http://127.0.0.1:8000/api/store",{
      method: 'POST',
      header: {"Content-Type":"application/json"},
      body: JSON.stringify(newReminder)
    }).then(()=>{
      console.log('new data added')
    })
  }

  useEffect(()=>{
    getReminders();
  },[])

  function getReminders(){
    const url="http://127.0.0.1:8000/api/items";
    fetch(url).then(resp=>resp.json())
    .then(resp=>setReminders(resp))
  }
  function reminderInsert(){
    fetch("http://127.0.0.1:8000/api/store",{
      method:'POST'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getReminders();
      })
  })
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
    
 

  
  return <main>
    <section className="container">
      

     {/* <div>
       <form onSubmit={handleSubmit}>
         <input type="text" onChange={(e)=>setReminder(e.target.value)} value={reminder.name} />
          <button type="submit">Add Reminder</button>
       </form>
     </div> */}
      {
        reminders.map(reminder=><div><p>{reminder.name} </p> 

          <button onClick={()=>reminderDelete(reminder.id)}>Delete</button>
          
         </div>)
      }
      <p>{reminder}</p>

      
    </section>
  </main>
}

export default App;

