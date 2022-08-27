import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [todo, setTodo] = useState("")
	const [todoList, setTodoList] = useState([])


	// const deleteTodo = () => {

	// 	let newTodo = todoList.filter( (item, index) => )
	// }

	const addTodo = () => {
		setTodoList([...todoList, todo])
	}

	const deleteAll = () => {
		setTodoList([])
	}

	const showFunc = () => {
		console.log(e.target.value)
	}

	// function showDeleteButton () {
	// 	todoList.length === 0 ? console.log("agrega algo") : console.log("ya lo hiciste")
	// }
	// showDeleteButton();

	return (<>
	<div className="container w-50 bg-dark text-light">
		<div className="text-center mt-3">
  			<div className="mb-3">
   			 <label htmlFor="exampleInputEmail1" className="form-label fs-3">Todo App</label>
   			 <input type="text" className="form-control bg-secondary text-light" id="exampleInputEmail1" onChange={(e) => setTodo(e.target.value)}/>
			<button type="button" className="btn btn-light mt-2 p-1" onClick={addTodo}>Add todo</button>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
<ul className="list-group">
	{todoList.map( (item, index) => {
		return <li key={index.toString()} className="list-group-item-dark bg-secondary text-light m-2 p-2">{item}<button type="button" className="btn-close float-end" ></button></li>
	})}
	
	</ul>
	<button type="button" className="btn btn-light m-2 p-1" onClick={deleteAll}>Delete todos</button>
		</div>
		</div>
		</>
	);
};

export default Home;
