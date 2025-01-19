
import Biodata from './components/biodata'
import Contact from './components/contact'
import Experience from './components/experience'
import Headernya from './components/header'
import Traveling from './components/traveling'
function App() {
  return (
    <>
      <div className='pr-4 pl-4 md:pr-20  md:pl-20   bg-gray-100'>
        <div className='md:h-[380px]'> 
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
