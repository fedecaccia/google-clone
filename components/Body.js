import Image from "next/image";
import {
  MicrophoneIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
} from "@heroicons/react/outline";

function Body() {
  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image 
        src={"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}
        width={300}
        height={100}
        alt="google logo"
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 px-5 py-3 items-center rounded-full
        sm:max-w-xl
        lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500"/>
        <input type="text" className="focus:outline-none bg-transparent-500 flex-grow" />
        <MicrophoneIcon className="h-5"/>
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-4
      ">
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeling Lucky</button>        
      </div>
    </form>
  )
}

export default Body
