import React, { useState } from "react";

//create your first component

const Home = () => {
	const [tarea, setTarea] = useState([]);
	const [tareaInput, setTareaInput] = useState("");

	const addTask = (e) => {
		e.preventDefault();
		if (tareaInput !== ""){
			setTarea([...tarea, tareaInput]);
			setTareaInput("");
		}
	}
	const deleteTask = (index) => {
		const newTask = [...tarea];
		newTask.splice(index, 1);
		setTarea(newTask);
		
	}	
	
	return(
	<div className = "pared">
		<h1>todos</h1>
		<form className = "tareas" onClick={addTask}>
		<div className = "input">
			<input type="text" autoComplete="off" value={tareaInput} placeholder = "Que tengo que hacer?" onChange={e => setTareaInput(e.target.value)}/>
		</div>	
		<button type="submit" className="addButton"></button>		
		{tarea.map((item,index) => (			
			<div className="task" key={index}>
				<div className="newItem" key={index}>{item}</div>
				<button className="delete" onClick={deleteTask}>x</button>
           </div>
		))}
			<p>Pendientes: {tarea.length}</p>
		</form>
	</div>);
	
}


export default Home;
