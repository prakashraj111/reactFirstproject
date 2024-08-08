import React, { useState } from "react";
import Card from "./Components/Card";

function App() {

  const data = [
    {name: "Harry", profession: "Teacher", image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Krishna", profession: "Artist", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Rohit", profession: "Coder", image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Srijan", profession: "Business man", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false}
  ];

 const [realData, setRealData] = useState(data);
 const handlefriendsButton =(changingIndex)=> {
    setRealData((previous)=>{
     return previous.map((item, index)=>{
      if(index === changingIndex) return {...item, friends: !item.friends}
        return item;
      })
    })
 }

  return(
  <>
  <div className="w-full h-screen bg-zinc-300 gap-4 flex justify-center items-center">
    {realData.map((item, index)=> (
      <Card key={index} index={index} handleClick={handlefriendsButton} values={item}/>
    ))}
  </div>
  </>
  );
}

export default App;