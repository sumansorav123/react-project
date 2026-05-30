import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function ToDo() {
    
  // state to store tasks
    let [todo , setTodo] = React.useState([]);

    // function to add task to the list and local storage
    const addTask = (e) => {

        let inputData = e.target.inputTask.value;
        if(inputData === ''){
      
            alert('Please enter a task!');  
        }else if( !todo.includes(inputData)){
            
                  let finalData = [...todo , inputData];
                 setTodo(finalData);
                localStorage.setItem('tasks' , JSON.stringify(finalData));
        }else{
              alert('This task already exists!');
        }
         e.preventDefault();
    }
  

    // display data from local storage
    const DisplayData = () => {
       <li  className='flex items-center justify-between bg-[#21262D] p-2 rounded-md mb-2'>
                <span></span>
                <div>
                  <FaEdit className='text-blue-500 cursor-pointer mr-2' />
                  <MdDeleteForever className='text-red-500 cursor-pointer' />
                </div>
              </li>
      
    }
    
    // map through the todo array to create list items
    let list = todo.map((item , index) => {

        return (
            <li key={index} className='flex items-center justify-between bg-[#21262D] p-2 rounded-md mb-2 '>
                <span>{item}</span>
                <div className='flex items-center w-12 justify-between'>
                  <FaEdit className='text-blue-500 cursor-pointer mr-2 ' onClick={() => taskEdit(index)} />
                  <MdDeleteForever className='text-red-500 cursor-pointer' onClick={() => taskDelete(index)} />
                </div>
              </li>
        )
    })

    // useEffect to load tasks from local storage when the component mounts
     React.useEffect(() => {
        let storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
          setTodo(storedTasks);
        }
      }, []);

      // function to delete a task from the list and local storage
      const taskDelete = (index) => {
        let updatedTasks = [...todo];
        updatedTasks.splice(index, 1);
        setTodo(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }

      // function to edit a task in the list and local storage
      const taskEdit = (index) => {
        let newTask = prompt('Edit your task:');
        if (newTask) {
          let updatedTasks = [...todo];
          updatedTasks[index] = newTask;
          setTodo(updatedTasks);
          localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
      }

      // form clear function
      React.useEffect(() => {
        const form = document.querySelector('form');
        form.reset();
      }, [todo]);

  return (
    <div className='flex items-center justify-center h-screen bg-black text-white'>
      <div className='bg-[#0D1117] p-9 rounded-md w-[500px] h-[400px] overflow-hidden'>
         <h1 className='text-4xl font-medium sans-serif '>To Do App</h1><br/>
         <div className='flex flex-col items-center justify-center'>
          <form className="w-full" onSubmit={addTask}>
                <input type="text" name='inputTask' placeholder='write your task ....' className='border-2 border-gray-300 rounded-md p-2 w-full'  />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full cursor-pointer transition-transform duration-300 hover:scale-105  "  >
                  Add Task
                </button>
          </form>
         </div>
         <br/>
         <div>
          <ul className='max-h-54 mb-3.5  overflow-y-auto'>
            {list}
            {

              todo.length === 0 && <h2 className='text-center text-2xl text-gray-500'>No tasks added yet!</h2>
            }
          </ul>
        </div>  
      </div>
        

    </div>
  )
}

export default ToDo