const SelectClient = () => {
  return (
    <div className="w-screen flex flex-col items-center mb-6">
      
      <select name="clients" id="clients" >
        <option value="" disabled selected hidden>Select Client...</option>
        <option value="acme">acme</option>
        <option value="GE">GE</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Apple">Apple</option>
      </select>
    </div>
  )
}

export default SelectClient
