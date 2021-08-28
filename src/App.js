import React, { useState } from 'react';



function App() {
  
    const [name, setName] = useState([])
    // const [data, setdata] = useState("")
    // const handleSubmit = (e)=>{
    //   // e.preventDefault()
    //   // const blog={name};
    //   fetch ('http://127.0.0.1:8000/api/store',{
    //     method: 'POST' ,
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(blog)
    //   }).then(()=>
    //   {
    //     console.log('new blog added')
    //   })
    //   console.log(blog)
    // }

    async function addTodo(){
      const formData = new FormData()
      formData.append("name",name)
      let result = await fetch("http://127.0.0.1:8000/api/store",{
        method:"POST",
        body: formData,
        
      })
      alert ("todo was saved")

    }
  
  return <main>
    <section className="container">
      <h1>Here goes the todo</h1>
      <div> 
        <input type="text" className="form-control" onChange={(e) =>setName(e.target.value)} placeholder="enter the todo"/>
        <button onClick={addTodo}>Add Button</button>
        {/* <p>{name}</p> */}
        
      </div>


      
    </section>
  </main>
}

export default App;

