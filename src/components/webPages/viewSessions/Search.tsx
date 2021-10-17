
const Search = () => {
  return (
    <section className="w-screen h-20 flex">
      <div className="w-full flex justify-evenly items-center">
          <input className="h-10 mb-0 ml-2" type="search" name="search" id="search" placeholder="Search Session" />
      </div>
      <div className="flex items-center mx-4">
        <button className="h-10 px-2 bg-black text-white rounded">GO</button>
      </div>
    </section>
  )
}

export default Search
