
import Biodata from './components/biodata'
import Contact from './components/contact'
import Headernya from './components/header'
function App() {
  return (
    <>
      <div className='pr-24 pl-24'>
        <div className='h-[380px]'>
          <Headernya />
        </div>
        <Biodata />  
        <Contact />     
      </div>
    </>
  )
}

export default App
