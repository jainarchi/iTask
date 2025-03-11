import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)


  useEffect(() => {

    let todoString = localStorage.getItem("todos")
    // console.log(todoString)                                       // null - if length 0
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])




  const SaveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleEdit = (e, id) => {
    // addRef.current.innerHTML ="Save"
    let t = todos.filter(i => i.id === id)      //ret coll - array  t[0] unique / Or let index = todos.findIndex(i =>{return i.id === id}    setTodo(todos[index].todo)    
    setTodo(t[0].todo)

    let newTodos = todos.filter(i => {
      return i.id !== id                 // return imp becoz more then 1
    })
    setTodos(newTodos)
    SaveToLS()
  }


  const handleDelete = (e, id) => {                  // e is event
    if (confirm("Are you Sure to delete todo")) {

      let newTodos = todos.filter(item => {
        return item.id !== id
      })
      setTodos(newTodos)
      SaveToLS()
    }
  }


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo(" ")
    // console.log(todos)
    SaveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }


  const handleChackbox = (e) => {
    let id = e.target.name

    let index = todos.findIndex(item => {
      return item.id === id;
    })

    let newTodos = [...todos]                     // not use [todos] becoz state re-render         sol:use ...todos for same reference
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    SaveToLS()
  }


  const togglefinished = (e) => {
    setshowfinished(!showfinished)
  }

  return (
    <>
      <div className=" bg-gray-100/35 h-[100vh]">
        <Navbar />

        <div className=" mainbox md:container bg-gray-600/10 backdrop-blur-[10px] mx-auto my-5 p-3 sm:p-5 min-h-[90vh] sm:w-[60vw]  md:max-w-[40vw] ">

          <h1 className='font-bold text-center text-2xl'>iTask - Manage your todos at one place</h1>

          <div className='addtodos py-5 '>
            <h2 className='font-bold text-lg py-3'>Add a Todo</h2>
            <div className='flex'>
              <input onChange={handleChange} value={todo} type="text" className='w-full rounded-xl px-2 ' />
              <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-900 hover:bg-violet-950 disabled:bg-violet-700 rounded-md ml-2 p-1 px-2 text-sm font-semibold text-white'>Save</button>
            </div>
          </div>
          <div className='py-2'>
            <input onChange={togglefinished} type="checkbox" checked={showfinished} />
            <label htmlFor="show" className='mx-2'>Show Finished</label>
          </div>
          <div className="h-[1px] bg-slate-500"></div>

          <h2 className='font-bold text-lg my-3'>Your Todos</h2>

          <div className='todos w-full' >
            {todos.length == 0 && <div className='px-3'>No Todos found</div>}

            {todos.map(item => {
              return (showfinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between border border-violet-300 p-1 items-center">
                <div className="flex gap-5">
                  <input onChange={handleChackbox} type="checkbox" name={item.id} id="" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className='btns flex'>
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-900 rounded-md mx-2 p-1 text-sm text-white'><FaEdit /></button>
                  <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-800 hover:bg-violet-900 rounded-md p-1 text-sm text-white'><AiFillDelete /></button>
                </div>
              </div>
            })}

          </div>

        </div>
      </div>
    </>
  )
}

export default App
