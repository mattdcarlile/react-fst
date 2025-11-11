import PageHeader from './components/base/PageHeader'
import NavBar from './components/base/NavBar'
import FstTabs from './components/Tabs'


function App() {

  return (
    <>
      <NavBar />
      <PageHeader />
      <div className='relative flex justify-center bg-gray-100'>
        <div className="relative flex flex-col w-full max-w-[1200px] px-8 xl:px-0">
          <FstTabs/>
        </div>
      </div>
    </>
  )
}

export default App
