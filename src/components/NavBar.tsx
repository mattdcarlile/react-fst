function NavBar() {
  return (
    <>

      <nav className='relative flex flex-row w-full h-20 p-5 bg-white max-w-full'>
        <div className='flex w-full'>
          <img src='./images/brand-uhealth.svg' alt='U Health University of Utah' />
        </div>
        <div className='flex justify-end'>
          <a href='#' className='py-1.5 px-4 rounded-md uppercase border border-gray-400'>Menu</a>
        </div>
      </nav>
    </>
  )
}

export default NavBar