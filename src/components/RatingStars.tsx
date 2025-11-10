
interface RatingStarsProps {
  rating: string | null | undefined;
}

function RatingStars({ rating }: RatingStarsProps) {
  const stars = [1, 2, 3, 4, 5];
  const ratings = rating ? (isNaN(Number(rating)) ? 0 : Number(rating)) : 0;
  const numericRating = Math.min(Math.max(parseFloat(rating || '0') || 0, 0), 5);

  return (
    <>
      <div className='flex items-center z-2'>

        {ratings > 0 ? (

          stars.map((_, i) => {
            const fill = Math.min(Math.max(numericRating - i, 0), 1);

            return (
              <div key={i} style={{ position: "relative", width: 20, height: 20 }}>
                <svg
                  width='20'
                  height='20'
                  viewBox="0 0 20 20"
                  fill='#d1d5dc'
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955
              6.564.955-4.756 4.635 1.122 6.545z" />
                </svg>

                {/* Colored foreground star */}
                {fill > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: `${fill * 100}%`,
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    <svg
                      width='20'
                      height='20'
                      viewBox="0 0 20 20"
                      fill='#a6192e'
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955
                  6.564.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div>
            <div className="uppercase text-lg font-semibold text-gray-500">No Rating Available</div>
            <a href="#" className='underline hover:no-underline text-gray-500'>(Learn About Our Rating System)</a>
          </div>
        )}
      </div>
    </>
  );
};

export default RatingStars;