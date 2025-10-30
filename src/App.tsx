import PageHeader from './components/PageHeader'
import NavBar from './components/NavBar'
import FST from './components/FST'

function App() {

  return (
    <>
      <NavBar />
      <PageHeader />

      <div className='relative flex justify-center'>
        <div className="relative flex flex-col w-full max-w-[1200px] p-8">
          <FST/>
        </div>
      </div>
    </>
  )
}

export default App
