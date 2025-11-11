import { useMemo, useState, type ChangeEvent } from "react";
import type { Doctor } from "../types/doctors";
import SkeletonCards from "./cards/SkeletonCards";
import DoctorCards from "./cards/DoctorCards";


interface ByNameProps {
  doctors: Doctor[];
}


function ByName({ doctors }: ByNameProps) {
  const [searchDocName, setSearchDocName] = useState('');
  const inputSpecSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchDocName(event.target.value);
  }

  const AZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const availableLetters = useMemo(() => {
    if (!doctors) return new Set<string>();
    const letters = doctors
      .map((doc) => doc.lastName?.charAt(0)?.toUpperCase() ?? "")
      .filter(Boolean);
    return new Set(letters);
  }, [doctors]);

  const [visibleCount, setVisibleCount] = useState(24);
  const [filterLetter, setFilterLetter] = useState<string | null>(null);
  const increment = 16;

  const filteredDoctors = useMemo(() => {
    if (!doctors) return [];

    return [...doctors]
      .sort((a, b) => {
        const nameA = a.lastName?.toLowerCase() ?? "";
        const nameB = b.lastName?.toLowerCase() ?? "";
        return nameA.localeCompare(nameB);
      })
      .filter((doc) => {
        const matchesLetter = filterLetter
          ? doc.lastName?.toUpperCase().startsWith(filterLetter)
          : true;

        const matchesSearch = searchDocName
          ? doc.preferredFullName
            ?.toLowerCase()
            .includes(searchDocName.toLowerCase())
          : true;

        return matchesLetter && matchesSearch;
      });
  }, [doctors, filterLetter, searchDocName]);

  const visibleDoctors = filteredDoctors.slice(0, visibleCount);

  const handleFilter = (letter: string) => {
    setFilterLetter(letter);
    setVisibleCount(24); // reset visible count
  };

  const handleClearFilter = () => {
    setFilterLetter(null);
    setVisibleCount(24);
    setSearchDocName('');
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + increment);
  };


  return (
    <div className="bg-white flex flex-col p-10 rounded-b-md border-1 border-gray-400 border-t-0">
      <div className="relative">
        <div className="absolute px-4 flex items-center h-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1" viewBox="0 0 24 24" width="24" height="24"><circle cx="9.5" cy="9.5" r="9"></circle><line x1="23.5" y1="23.5" x2="15.862" y2="15.862"></line></svg>
        </div>

        <input className='input-filter w-full p-4 pl-13 rounded-md border border-gray-400 placeholder:text-gray-600 focus:outline-redd' type='text' placeholder='Search By Name' value={searchDocName} onChange={inputSpecSearch} />

      </div>
      <div className="flex flex-col w-full mt-10 justify-center">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {AZ.map((letter) => {
            const isAvailable = availableLetters.has(letter);
            const isActive = filterLetter === letter;

            return (
              <span onClick={() => isAvailable && handleFilter(letter)} key={letter} className={`text-xl ${isActive ? 'bg-redd text-white font-semibold cursor-pointer px-1' : isAvailable ? 'text-redd hover:text-red-600 underline hover:no-underline cursor-pointer' : 'text-gray-400 cursor-not-allowed no-underline'}`}>
                {letter}
              </span>
            )
          })}
        </div>


      {(filterLetter || searchDocName) ?
        <div className="flex w-full justify-center mt-6">
          <button onClick={handleClearFilter} className="uppercase px-6 py-2 cursor-pointer rounded-md border border-gray-400 text-center hover:font-medium hover:border-redd hover:bg-redd hover:text-white">
            Reset All
          </button>
        </div>
        : ''}


      </div>



      <div>
        <div className="flex items-center justify-center my-8">
          <span className="text-lg flex items-center w-full text-redd">
            <span className="block h-px w-32 bg-gray-300 mr-4 grow"></span>
            {filteredDoctors.length} Resulting Health Care Providers
            <span className="block h-px w-32 bg-gray-300 ml-4 grow"></span>
          </span>
        </div>

          {!doctors ? <SkeletonCards /> : (
            <DoctorCards filteredDocs={visibleDoctors} />
          )}

        {visibleCount < filteredDoctors.length && (
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  )
}

export default ByName