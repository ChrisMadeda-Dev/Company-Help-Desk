import Image from "next/image";
import heroImage from "../../../Images/1.jpg";

export default function Hero() {
  return (
    <div className="h-full py-5 w-11/12">
      <div className="w-full h-full grid grid-cols-8 grid-rows-5">
        <div className=" col-span-5 row-span-2 flex justify-start items-center">
          <h1 className=" text-gray-700 text-7xl text-left font-extrabold">
            HEY THERE, WELCOME <br /> IAM CHRISMADEDA
          </h1>
        </div>
        <div className="p-5 col-span-3 row-span-2 flex flex-col justify-center items-start">
          <p className="py-5 pr-7 text-lg font-semibold text-gray-500">
            Welcome to my company desk, in this version Iam implimenting the
            Help desk. Click the button below to view the Help Desk. Blessed
          </p>
          <button className="btn btn-active btn-neutral w-3/6">
            Go to Help Desk
          </button>
        </div>
        <div className="py-5 mb-10 rounded bg-blue-200 col-start-1 row-start-3 col-span-8 row-span-3 "></div>
      </div>
    </div>
  );
}

/**
 * 
 *    <div className=" display-none flex justify-evenly items-center col-span-8 row-span-1">
          <ul className="h-full w-full flex justify-between items-center">
            <li className="bg-blue-200 rounded-lg py-2  px-1 w-2/6">x.com</li>
            <li>Instagram</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
 */
