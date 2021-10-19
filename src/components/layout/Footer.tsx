
const Footer = () => {

  return (
    <nav className="fixed bottom-0 left-0 w-full text-center border-t border-grey bg-gray-li ">
			
      <div className="flex flex-row items-center">

        <div className="flex flex-1 justify-start ">
          <a href="#" className="py-2 px-2 font-medium text-white bg-red-dk hover:bg-gray-default transition duration-300">Save</a>
        </div>

        <div className="w-96 flex flex-1 items-center ">
            <div className="m-auto font-semibold text-gray-500 text-xl sm:text-l"></div>
        </div>
          
        <div className="flex flex-1 justify-end ">
          <a href="#" className="float-right py-2 px-2 font-medium text-white bg-red-dk hover:bg-gray-default transition duration-300">Logout</a>
        </div>
        
      </div>
			
		</nav>
  )
}

export default Footer


