import React, { useState, useEffect } from 'react';

// import data from './data';
// import List from './List';


const useFetch = (url) =>{
  // const [questions, setQuestion] = useState(data);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
 
  useEffect(async ()=>{
 
    const response = await fetch(url);
    const data = await response.json(); 
    const [item] = data.results;
 
    setData(item);
    setLoading(false);
 
 },[]);
 return {data, loading};
 }

 export default () =>{
  // const [count, setCount] = useState(0);
  const {data, loading} = useFetch("https://api.randomuser.me/")
 
  return <main>
    <div className="">
      {/* <p>You clicked {count} times</p> */}
      {/* <button onClick={() =>setCount(count+1)}></button> */}
      {loading ? <div>...loading</div>: <div>{data.name.first}</div>}
    </div>
  </main>
}

// function App() {
//   const [reminder, setReminder] = useState(data)
//   return <main>
//     <section className="container">
//       <h3 >{reminder.length} reminder games today </h3>
//       <List reminder={reminder}/>
//       <button onClick={()=> setReminder([])}>
//         clear all
//       </button>
//     </section>
//   </main>
// }

// export default App;


// import data from './data';
// import SingleQuestion from './Question';

// const useFetch = (url) =>{
//  // const [questions, setQuestion] = useState(data);
//  const [data, setData] = useState(null);
//  const [loading, setLoading] = useState(true)

//  useEffect(async ()=>{

//    const response = await fetch(url);
//    const data = await response.json(); 
//    const [item] = data.results;

//    setData(item);
//    setLoading(false);

// },[]);
// return {data, loading};
// }

// export default () =>{
//   const [count, setCount] = useState(0);
//   const {data, loading} = useFetch("https://api.randomuser.me/")
 
//   return <main>
//     <div className="">
//       <p>You clicked {count} times</p>
//       <button onClick={() =>setCount(count+1)}></button>
//       {loading ? <div>...loading</div>: <div>{data.name.first}</div>}
//       {/* <h3> Question and Answer</h3>
//       <section className="info">
//         { questions.map((question) => {
//             return <SingleQuestion key={question.id} {...question} />
//           })}
//       </section> */}
//     </div>
//   </main>
// }

// export default App;