import { useState } from "react"
import { MdDelete } from "react-icons/md";

function App() {

  const [todos ,setTodos] = useState([])
  const [todoinput , setTodoInput] = useState('')

  function todoTaskHandler(event){
      setTodoInput(event.target.value)
  }

  function addtodoHandler(){
    if(todoinput!==""){
      setTodos([...todos , todoinput])
      setTodoInput("")
    }
      
  }

  function deleteHandler(id){
      let newtodos =[...todos];
      newtodos.splice(id,1)
      setTodos([...newtodos])
  }

  
  return (
    <div className="w-screen h-screen bg-orange-200 flex flex-col items-center">
        <div className="w-[30%]">
          <div className="my-4">
                      <h1 className="text-4xl font-bold  ">To-Do List 📃</h1>
          </div>
           <div className="flex flex-col  px-8 py-8 my-8 bg-orange-50 rounded-md ">
              

                <div className="my-5 bg-slate-100  rounded-full flex justify-between ">
                    <input
                      placeholder="Add your Task"
                      className="outline-none bg-transparent px-4 "
                      onChange={todoTaskHandler}
                      value={todoinput}
                    />
                    <button onClick={addtodoHandler} className="bg-orange-600 transition-all duration-200 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold">Add</button>
                </div>


               <div >
                  {
                      todos.map((todo ,index)=>{
                        return <div key={index} className=" bg-orange-100  rounded-full my-5 text-orange-600 px-4 py-2 flex justify-between items-center">
                              {todo}
                              
                                <MdDelete onClick={deleteHandler} className="cursor-pointer text-lg hover:text-red-800" />
                              
                          </div>
                      })

                  }
               </div>

           </div>
         
        </div>
        
    </div>
  )
}

export default App
