import {useState, useEffect} from 'react'

function Update(props){

const [data, setData] = useState([])

const [name, setName] = useState("")
const [completed, setCompleted] = useState("")
useEffect(() => {
    getData()
  
}, [])

async function deleteData(id){

    let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
        method: "DELETE"
    })
    alert(id)
    result = await result.json()
    getData()
}

async function getData(){
    let result = await fetch("http://127.0.0.1:8000/api/items");
    result = await result.json();
    setData(result)
}

return(
    <div>
        <ul>
            { data.map((item)=>
                <li>
                <label htmlFor="">
                    <input type="checkbox" onChange={} /> {item.name}
                    <button onClick={()=>{deleteData(item.id)}}> delete</button>
                </label>
            </li>  )
            }
           
        </ul>
       
      
    </div>
)
}
export default Update