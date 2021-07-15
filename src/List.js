import React from 'react';

const List = ({reminder}) => {
  return (
    <>
     {reminder.map((reminder)=>{

       const {id,name,date,image} = reminder;
       return <article key={id} className="reminder">

         {/* <img src="image" alt="name" /> */}
         <div>
           <h4>{name}</h4>
           <p>{date}</p>
         </div>
       </article>

     })}
    </>
  );
};

export default List;