import '../index.css'
import LoginForm from "./Form"
import Footer from './Footer'

const Left = () =>{
  return(
    <div   className='h-screen flex flex-col items-center flex-1 md:flex-[4_4_0%] justify-center  '>
      <img className='w-3/5 lg:w-2/5 mb-14 mt-14' src="./public/login-logo.png" alt="logo" />
      <LoginForm/>
      <Footer/>
    </div>
  )
}

export default Left