import React from 'react'

const SelectSession = () => {
  return (
    <section className="h-20 grid place-items-center">
      <select className="" name="projects" id="projects">
        <option value="acme">acme-project1</option>
        <option value="GE">acme-project2</option>
        <option value="Microsoft">acme-project3</option>
        <option value="Apple">acme-project4</option>
      </select>
    </section>
  )
}

export default SelectSession
