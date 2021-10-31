
const SelectSession = () => {
  return (
    <section className="h-20 grid place-items-center">
      <select className="w-3/5" name="clients" id="clients" >
        <option value="" disabled selected hidden>Select Client...</option>
        <option value="acme">acme</option>
        <option value="GE">GE</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Apple">Apple</option>
      </select>
    </section>
  )
}

export default SelectSession
