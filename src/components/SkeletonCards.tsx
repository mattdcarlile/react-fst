
function SkeletonCards() {
  return (
      <>
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
      </>
    )
}

export default SkeletonCards