const SelectClient = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <label className="text-xl mt-3" htmlFor="client">Choose a client:</label>
      <select className="" name="clients" id="clients">
        <option value="acme">acme</option>
        <option value="GE">GE</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Apple">Apple</option>
      </select>
    </div>
  )
}

export default SelectClient
