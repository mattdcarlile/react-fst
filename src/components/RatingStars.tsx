import React from 'react';

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <>
      <div className='flex items-center z-2'>

        {rating > 0 ? (
          stars.map((star) => {
            let fillClass = 'text-gray-300';
            if (rating >= star) {
              fillClass = 'text-redd';
            } else if (rating > star - 1 && rating < star) {
              fillClass = 'text-redd';
            }

            return (
              <svg key={star} className={`w-5 h-5 ${fillClass}`} viewBox='0 0 20 20' fill='currentColor'>
                <defs>
                  {rating > star - 1 && rating < star && (
                    <linearGradient id={`half-${star}`}>
                      <stop offset={`${(rating - (star - 1)) * 100}%`} stopColor='currentColor' />
                      <stop offset={`${(rating - (star - 1)) * 100}%`} stopColor='transparent' />
                    </linearGradient>
                  )}
                </defs>
                <path fill={rating > star - 1 && rating < star ? `url(#half-${star})` : 'currentColor'} stroke='currentColor' strokeWidth={0} d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z' />
              </svg>
            );
          })
        ) : (
          <div>
            <div className="uppercase text-lg font-semibold text-gray-500">No Rating Available</div>
            <a href="#" className='underline hover:no-underline text-gray-500'>(Learn About Our Rating System)</a>
          </div>
        )}

      </div>
      <div className="flex absolute z-1">
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
    </>
  );
};

export default RatingStars;