

const SelectProject = () => {
  return (
    <div className="w-screen flex flex-col items-center mb-6">
      
      <select className="" name="projects" id="projects">
        <option value="" disabled selected hidden>Select Project...</option>
        <option value="acme-project1">acme-project1</option>
        <option value="acme-project2">acme-project2</option>
        <option value="acme-project3">acme-project3</option>
        <option value="acme-project4">acme-project4</option>
      </select>
    </div>
  )
}

export default SelectProject
