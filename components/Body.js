import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import {
  MicrophoneIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
} from "@heroicons/react/outline";

function Body() {

  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault(); // prevent refresh
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  }

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
        <input
          ref={searchInputRef}          
          type="text"
          className="focus:outline-none bg-transparent-500 flex-grow" />
        <MicrophoneIcon className="h-5"/>
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-4
      ">
        <button onClick={search} className="btn">Google Search</button>
        <button onClick={search} className="btn">Im Feeling Lucky</button>        
      </div>
    </form>
  )
}

export default Body
