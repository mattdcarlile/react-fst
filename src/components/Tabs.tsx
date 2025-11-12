import { useState } from "react";
import ByLocation from "./locations/ByLocation";
import ByName from "./ByName"
import doctorsData from '../data/doctors.json'
import type { Doctor } from "../types/doctors";
import { useQuery } from "@tanstack/react-query";


// Production API Call
// const fetchDoctors = async (): Promise<Doctor[]> => {
//   const res = await fetch("/api/doctors.json");
//   return res.json();
// };

// Example API Placeholder
const fetchDoctors = async (): Promise<Doctor[]> => {
  return doctorsData;
};

function Tabs() {

  const [fstHidden, setFstHidden] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const { data: doctors = [], isLoading, isError, error } = useQuery<Doctor[], Error>({
    queryKey: ["doctors"],
    queryFn: fetchDoctors,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const handleTabDisplay = (tab: string) => {
    setFstHidden(true);

    if (activeTab === tab) {
      setActiveTab('');
      setFstHidden(false);
    } else {
      setActiveTab(tab);
    }
  };


  return (
    <>
      <div className="my-20">
        <h2>Find a Heart Specialist</h2>

        <div className="flex flex-col">
          <div className="fst-container flex flex-row w-full max-w-full items-center bg-white rounded-md">
            <div id='by-name' onClick={() => handleTabDisplay('by-name')} className={`tab-fst ${fstHidden ? (activeTab === 'by-name' ? 'tab-active' : 'tab-not-active') : 'tab-clear'}`}>
              <span>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1" viewBox="0 0 24 24" width="36" height="36"><circle cx="12" cy="7" r="5.5"></circle><path d="M8.8,15.1c-1.8,0.4-3.5,0.9-5.2,1.6c-1.3,0.7-2.2,2.1-2.2,3.6V21c0,0.8,0.7,1.5,1.5,1.5h8.5L8.8,15.1z"></path><path d="M20.3,16.7c-1.7-0.7-3.4-1.2-5.1-1.6l-2.7,7.4H21c0.8,0,1.5-0.7,1.5-1.5v-0.7C22.5,18.8,21.7,17.4,20.3,16.7z"></path><polyline points="13.5,19.5 13.5,15.5 12,14.5 10.5,15.5 10.5,19.5"></polyline><line x1="16.5" y1="19.5" x2="18.5" y2="19.5"></line><line x1="17.5" y1="18.5" x2="17.5" y2="20.5"></line></svg>
              </span>
              <span>By Name</span>
            </div>
            <div id='by-location' onClick={() => handleTabDisplay('by-location')} className={`tab-fst ${fstHidden ? (activeTab === 'by-location' ? 'tab-active' : 'tab-not-active') : 'tab-clear'}`}>
              <div>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1" viewBox="0 0 24 24" width="36" height="36"><path d="M12,23.5	L5.3979492,11.5598755C4.8256226,10.5006104,4.5,9.2884521,4.5,8c0-4.1421509,3.3578491-7.5,7.5-7.5s7.5,3.3578491,7.5,7.5	c0,1.2884521-0.3256226,2.5006104-0.8979492,3.5598755L12,23.5z"></path><circle cx="12" cy="8" r="5"></circle><line x1="10" y1="8" x2="14" y2="8"></line><line x1="12" y1="6" x2="12" y2="10"></line></svg>
              </div>
              <span>By Location</span>
            </div>
          </div>

          {fstHidden && (
            <>
              {activeTab === 'by-name' && <ByName doctors={doctors} />}
              {activeTab === 'by-location' && <ByLocation doctors={doctors} />}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Tabs