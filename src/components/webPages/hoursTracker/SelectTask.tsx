
// 


const SelectTask = () => {
  return (
    <div className="w-screen flex flex-col items-center mb-6 sml:mb-3 sml:mt-2">
       
      <select className="" name="tasks" id="tasks">
      <option value="" disabled selected hidden>Select Task...</option>
        <option value="refactor">refactor code</option>
        <option value="code">code update</option>
        <option value="Microsoft">report project</option>
        <option value="Apple">support call</option>
      </select>
    </div>
  )
}

export default SelectTask
