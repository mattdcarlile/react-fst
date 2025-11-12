import { useState, type ChangeEvent } from "react";
import type { Doctor } from "../../types/doctors";
import DoctorCards from "../cards/DoctorCards";
import SkeletonCards from "../cards/SkeletonCards";


interface ByLocationProps {
  doctors?: Doctor[];
}


function ByLocation({ doctors }: ByLocationProps) {

  const [searchDocName, setSearchDocName] = useState('');


  const inputSpecSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchDocName(event.target.value);
  }

  return (
    <div className="bg-white flex flex-col p-10 rounded-b-md border-1 border-gray-400 border-t-0">
      <div>
        <div className="w-1/3">
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="w-2/3">

        </div>

      </div>


      <div className="relative">
        <div className="absolute px-4 flex items-center h-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1" viewBox="0 0 24 24" width="24" height="24"><circle cx="9.5" cy="9.5" r="9"></circle><line x1="23.5" y1="23.5" x2="15.862" y2="15.862"></line></svg>
        </div>

        <input className='w-full p-4 pl-13 rounded-md border border-gray-400 placeholder:text-gray-600 focus:outline-redd' type='text' placeholder='Enter a Zip Code or City' value={searchDocName} onChange={inputSpecSearch} />

      </div>

      <div>
        <div className="flex items-center justify-center my-8">
          <span className="text-lg flex items-center w-full text-redd">
            <span className="block h-px w-32 bg-gray-300 mr-4 grow"></span>
            # Resulting Health Care Providers
            <span className="block h-px w-32 bg-gray-300 ml-4 grow"></span>
          </span>
        </div>

        {!doctors ? <SkeletonCards /> : (
          <DoctorCards filteredDocs={doctors} />
        )}
      </div>
    </div>
  )
}

export default ByLocation