



const ToggleTime = () => {
  return (
    <div className="toggleContainer mx-auto flex justify-center sml:mb-3 sml:mt-2">
      
      <button className="btn2 text-sm">Start Time &gt;&gt;</button>
      <div className="border border-gray-li rounded w-48 h-10 mr-2 flex justify-center content-center" id="toggleTime">
        <time className="my-auto text-sm">
          02:34:15 PM - 10/24/21
        </time>
      </div>
    </div>
  )
}

export default ToggleTime
