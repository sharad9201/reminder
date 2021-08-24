import React, { useState, useEffect } from 'react';



function App() {
  
    // const [todos, setTodos] = useState([])
    const [name, setName] = useState("")
    const handleSubmit = (e)=>{
      e.preventDefault()

      const blog={name};

      fetch ('http://127.0.0.1:8000/api/store',{
        method: 'POST' ,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(()=>
      {
        console.log('new blog added')
      })
      console.log(blog)
    }
  
  return <main>
    <section className="container">
      <form onSubmit={handleSubmit}> 
        <input type="text" value={name} onChange={(e) =>setName(e.target.value)} name="text"/>
        <button>Add Button</button>
        <p>{name}</p>
      </form>


      
    </section>
  </main>
}

export default App;

