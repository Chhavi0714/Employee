import React from 'react'
import Accepttask from '../TaskList/Accepttask'
import Newtask from '../TaskList/Newtask'
import Completetask from '../TaskList/Completetask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {
  return (
<div id='tasklist'className="h-[40%] w-full flex items-center justify-start gap-5 flex-no-wrap py-5 mt-5 overflow-x-scroll scrollbar-hide ">
     {data.tasks.map((e,id)=>{
       if(e.failed){
        return <FailedTask key={id} data={e} />
       }
       if(e.completed){
        return <Completetask key={id} data={e}/>
      }
      if(e.active){
        return <Accepttask key={id} data={e}/>
       }
      if(e.newTask){
        return <Newtask key={id} data={e}/>
      }
     
     } )}

</div>
  )
}

export default TaskList