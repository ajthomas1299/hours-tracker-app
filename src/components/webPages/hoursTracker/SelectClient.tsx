const SelectClient = () => {
  return (
    <div className="w-screen flex justify-center mb-6 sml:mb-3 sml:mt-2">   
      <select  name="clients" id="clients" >
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
