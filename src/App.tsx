import PageHeader from './components/PageHeader'
import NavBar from './components/NavBar'
import FST from './components/FST'

function App() {

  return (
    <>
      <NavBar />
      <PageHeader />
      <div className='relative flex justify-center bg-gray-100'>
        <div className="relative flex flex-col w-full max-w-[1200px] px-8 lg:px-0">
          <FST/>
        </div>
      </div>
    </>
  )
}

export default App
