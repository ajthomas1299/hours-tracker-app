

const SelectProject = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <label className="text-xl mt-3" htmlFor="project">Choose a Project:</label>
      <select className="" name="projects" id="projects">
        <option value="acme">acme-project1</option>
        <option value="GE">acme-project2</option>
        <option value="Microsoft">acme-project3</option>
        <option value="Apple">acme-project4</option>
      </select>
    </div>
  )
}

export default SelectProject
