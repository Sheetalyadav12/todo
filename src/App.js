// import React from "react";

// class AppInner extends React.Component{
//   sendData =()=>{
//     this.props.prentcallback(document.getElementById("inputBox").value)
//   }
//   render(){

//   return(
//     <div>

//     <input type="text " id="inputBox" placeholder="i am child"></input>
//     <button onClick={this.sendData}>send data</button>
//     </div>
  
  
//   );

// }
// }
// class App extends React.Component{
//   state={massage:"hellow i akm seetal"}
//   getDataFromChild =(childData)=>{
//     this.setState({massage:childData})

//   }
//   render(){
//     return(
//       <div>
//         <AppInner  prentcallback = {this.getDataFromChild}/>
//         <br/>
//         <div>{this.state.massage}</div>
//       </div>
//     )
//   }

// }



import { render } from "@testing-library/react";
import React from "react";


class AppInner extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    
    const style={color:this.props.color}
    return<span 
    style={style}>{this.props.name}</span>
  }
}

//commit


class App extends React.Component
{
  state={childcolor:"color",name:"sheetal"}
  changecolor=()=>{
    const color=document.getElementById("colorbox").value
    this.setState({childcolor:color.})
  }
  changeName =() =>{
     const name=document.getElementById("namebox").vale
     this.setState({name:name})
  }
  render(){
    return(
      <div>
        color<input type="text" onChange={this.changecolor} id="colorbox"/>
        <br/>
        name<input type="tex" onChange={this.changeName} id="namebox"/>
        <AppInner color={this.state.childcolor} name={this.state.name}/>
    
      </div>
    );

  }
  
  
  
}








// import { useState } from "react";


// const App =()=>{
//   const [formData,setFormData]=useState({
//     username:"",
//     email:"",
//     password:"",
//     confirm_password:""



//   });
//   const handelInput = (event)=>{
//     const name=event.target.name;
//     const value=event.target.value
//     console.log(name)


//     setFormData((prev)=>{
//       return {...prev,[name]:value}

//     })

//   };




//   return(
//     <div>
//       <input type="text" placeholder="name"   value={formData.username}name="userName"  onChange={handelInput} /><br></br>

//       <inpur type="text " placeholder="email"  value={formData.email}  name="email"  onChange={handelInput}  ></inpur><br></br>

//       <input type="text" placeholder="password" value={formData.password}  name="password"  onChange={handelInput} ></input><br></br>

//       <input type="text" placeholder="confirm-password" value={formData.confirm_password}  name="confirm-password"  onChange={handelInput}></input>

      
//     </div>
//   )
// }



// import { useState } from "react";


// const App=()=>{
//   const[count,setCount]=useState(0)


//   return(
  
//     <div className="container">
//       <button onClick={()=>setCount(count+1)}>
//         +
//       </button>
//       <h1>{count}</h1>
      
//       <button onClick={()=> (count===0)?setCount(0):setCount(count-1)}>-</button>
//     </div>
    
//   )


// }


// import { useState } from "react"

// const App =()=>{
//     const [todo,setTodo]=useState([])
//     const [counter,setcounter]=useState(1)


// function addTodo(){
//     console.log("----logo---")
//     let addTodo=document.getElementById("addTodo").value
//     console.log("addTodo"+addTodo)
   

// }
// function deletetodo(id){
//   console.log("........deletetodo....")
//   let tepmTodo= todo.filter(element=>{
//     return element.id !=id
//   })
//   setTodo([...tepmTodo])
// }
// function addTodoObject(text,complited){
//   let teamTodoObject={
//     id:counter,
//     text:text,
//     complited:complited
//   }
//   todo.push(addTodo)
//   console.log(todo)
//   setTodo([...todo])
//   setcounter([...counter])
// }
// return <div>
//     <h1>To-do Application</h1>
//     <input type="text" id="addTodo" placeholder="enter any elewmnewt"/>
//     <button onClick={()=>addTodo()}>click</button>
//     {todo.map(element=>
//     {
//       return <div>
        
          
//         {
//          element.complited?
//           <input type="checkbox" checked/>:
//         <input type="checkbox" unchecked/>
//         }
      

//         {element.text}
//         <button onClick={()=>deletetodo(element.id)}>Delete</button>
//         </div>

//     })
//     }
    
//   </div>
// }



export default App;

