import type { Doctor } from "../../types/doctors";
import RatingStars from "./RatingStars";

interface filteredDocsProps {
  filteredDocs: Doctor[];
}

function DoctorCards({ filteredDocs }: filteredDocsProps) {
  return (
    <>
      <div className='fst-docs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
        {filteredDocs.map((doc, index) => (
          <div key={index} className="fst-cards">
            <div className='card-img' style={{ backgroundImage: doc.media ? `url('${doc.media}')` : `url(${'./images/person-placeholder.png'})` }}>
            </div>
            <div className="card-name">
              {doc.preferredFullName}, <span className='card-degree'>{doc.degrees}</span>
            </div>
            <div className="card-rating grow">
              <RatingStars rating={doc.starRatingTotal} />
            </div>
            <div className="card-specialty">Cardiology</div>
            <div className='card-link'>
              <a className='card-button' target="_blank" href={`https://healthcare.utah.edu${doc.path}`}>View Profile</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DoctorCards