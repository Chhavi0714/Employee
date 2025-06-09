import React , {useContext,useState} from 'react';
import Completetask from '../TaskList/Completetask';
import { AuthContext } from '../../Context/AuthProvider';
const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)


const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [asignTo, setAsignTo] = useState('')
const [category, setCategory] = useState('')

    const  [newTask, setNewTask] = useState({})
      const submitHandler = (e)=>{
        console.log({taskTitle,taskDescription,taskDate,category})
        e.preventDefault()
        setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,Completed:false})
           const data =userData 

          data.forEach(function(e){
        if(asignTo === e.firstName){
          e.tasks.push(newTask)
          e.taskCount.newTask +=1;
          // console.log(e);
        }
 
       } )

             setUserData(data)
    console.log(data);
       setTaskTitle('')
       setCategory('')
        setAsignTo('')
        setTaskDescription('')
       setTaskDate('')

      } 
  return (
    <div className=" bg-black-900 text-white flex items-center justify-center p-6">
      <form onSubmit={(e)=>{
        submitHandler(e)
       } }
      className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-4xl flex gap-10 item-center justify-between">
        {/* Left Section */} 
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 font-semibold">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              } }
              type="text"
              placeholder="Make a UI design"
              className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <h3 className="mb-1 font-semibold">Date</h3>
            <input
            value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              } }
              type="date"
              className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <h3 className="mb-1 font-semibold">Assign to</h3>
            <input
            value={asignTo}
              onChange={(e)=>{
                setAsignTo(e.target.value)
              } }
              type="text"
              placeholder="employee name"
              className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <h3 className="mb-1 font-semibold">Category</h3>
            <input
            value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              } }
              type="text"
              placeholder="design, dev, etc"
              className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-1 font-semibold">Description</h3>
            <textarea
             value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              } }
              rows="10" cols="60"
              className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              placeholder="Enter task details here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;