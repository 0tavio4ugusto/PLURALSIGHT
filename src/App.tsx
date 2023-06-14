import './App.css'
import Left from './components/Left'
import Right from './components/Right'

const App = () =>{
return(
  <div className='h-screen flex flex-row'>
    <Left/>    
    <Right/>
  </div>
)
}

export default App