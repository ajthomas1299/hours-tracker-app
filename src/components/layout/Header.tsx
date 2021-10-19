
const Header = () => {

  return (
    <nav className="fixed top-0 left-0 w-full text-center border-t border-grey bg-gray-li shadow-lg">
			
      <div className="flex flex-row items-center">

        <div className="flex  justify-start ">
          <a href="javascript:history.go(-1)" className="py-2 px-2 font-medium text-white bg-red-dk hover:bg-gray-def transition duration-300">Back</a>
        </div>

        <div className="w-96 flex flex-1 items-center ">
            <div className="m-auto font-semibold text-gray-500 text-xl">Fast Hours Tracker</div>
        </div>
          
        <div className="flex justify-end ">
          <a href="/" className="float-right py-2 px-2 font-medium text-white bg-red-dk  hover:bg-gray-def transition duration-300">Menu</a>
        </div>
        
      </div>
			
		</nav>
  )
}

export default Header

