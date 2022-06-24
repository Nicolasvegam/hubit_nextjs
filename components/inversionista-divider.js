/* This example requires Tailwind CSS v2.0+ */
 function Divider() {
    return (
      <div className="relative ">
        <div className="absolute inset-1 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-2 border-indigo-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-sm text-gray-500"></span>
        </div>
      </div>
    )
  }

  export default Divider
  