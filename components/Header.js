import Avatar from "./Avatar";
import {
  ViewGridIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <div className="flex bg-transparent-500 w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        <ViewGridIcon className="h-10 hover:bg-gray-100 w-10 p-2 rounded-full"/>
        <Avatar url={"https://coaching.papareact.com/ai9"}/>
      </div>
    </div>
  )
}

export default Header
