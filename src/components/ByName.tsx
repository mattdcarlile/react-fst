import { useState, type ChangeEvent } from "react";
import RatingStars from "./RatingStars";


function ByName() {
  const [searchDocName, setSearchDocName] = useState('');
  const AZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const movie = {
    title: "Inception",
    rating: 4.5
  };


  const inputSpecSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchDocName(event.target.value);
  }
  return (
    <div className="bg-white flex flex-col p-10 rounded-b-md border-1 border-gray-400 border-t-0">
      <div className="relative">
        <div className="absolute px-4 flex items-center h-full">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1" viewBox="0 0 24 24" width="24" height="24"><circle cx="9.5" cy="9.5" r="9"></circle><line x1="23.5" y1="23.5" x2="15.862" y2="15.862"></line></svg>
        </div>

        <input className='w-full p-4 pl-13 rounded-md border border-gray-400 placeholder:text-gray-600 focus:outline-redd' type='text' placeholder='Search By Name' value={searchDocName} onChange={inputSpecSearch} />

      </div>
      <div className="flex w-full mt-10 justify-center">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <button className="uppercase px-6 py-2 cursor-pointer rounded-md border border-gray-400 text-center hover:font-medium hover:border-redd hover:bg-redd hover:text-white">
            View All
          </button>
          {AZ.map((letter) => (
            <span key={letter} className="text-xl underline text-redd cursor-pointer hover:text-red-600 hover:no-underline">
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* DOCTOR CARDS */}
      <div >
        <div className="flex items-center justify-center my-8">
          <span className="text-lg flex items-center w-full text-redd">
            <span className="block h-px w-32 bg-gray-300 mr-4 grow"></span>
            # Resulting Health Care Providers
            <span className="block h-px w-32 bg-gray-300 ml-4 grow"></span>
          </span>
        </div>

        <div className='fst-docs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
          <div className="fst-cards animate-pulse">
            <div className="card-img bg-gray-200 aspect-3/4"></div>
            <div className="grow">
              <div className="card-name h-8 rounded-3xl bg-gray-200"></div>
              <div className="card-rating flex flex-col">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5 text-gray-300'
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="card-specialty h-4 rounded-3xl bg-gray-200"></div>
            </div>
            <div className='w-full mt-6 self-end'>
              <div className='w-full h-12 text-center block bg-gray-200 rounded-md'></div>
            </div>
          </div>

          <div className="fst-cards">
            <div className="card-img bg-gray-200 aspect-3/4" style={{
              backgroundImage:
                'url("https://healthcare.utah.edu/sites/g/files/zrelqx136/files/styles/portrait_tablet/public/media/images/person/import/FM00084076.jpg?v=20230125")'
            }}>

            </div>
            <div className="card-name">
              Klitos Konstantinidis, <span className='card-degree'>MD</span>
            </div>
            <div className="card-rating">
              <RatingStars rating={movie.rating} />
            </div>
            <div className="card-specialty">Cardiology</div>
            <div className='card-link'>
              <a className='card-button' href='#'>View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ByName