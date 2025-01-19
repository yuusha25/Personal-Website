
import Biodata from './components/biodata'
import Contact from './components/contact'
import Experience from './components/experience'
import Headernya from './components/header'
import Traveling from './components/traveling'
function App() {
  return (
    <>
      <div className='pr-24 pl-24 bg-gray-100'>
        <div className='h-[380px]'>
          <Headernya />
        </div>
        <Biodata />  
        <Contact />     
        <Experience />
        <Traveling />
      </div>
    </>
  )
}

export default App
