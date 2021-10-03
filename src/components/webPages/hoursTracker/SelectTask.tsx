

const SelectTask = () => {
  return (
    <div className="w-screen flex flex-col items-center">
       <label className="text-xl mt-3" htmlFor="task">Choose a Task:</label>
      <select className="" name="tasks" id="tasks">
        <option value="acme">refactor</option>
        <option value="GE">code</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Apple">Apple</option>
      </select>
    </div>
  )
}

export default SelectTask
