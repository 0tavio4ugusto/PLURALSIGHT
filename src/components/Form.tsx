import '../index.css'

const LoginForm = () =>{
  return(
    <form className="flex flex-col items-center w-4/5 pb-4">
      <section className='pb-12 w-4/5'>
      <div>
        <label className='text-sm line leading-8 font-medium '> Email or username</label>
        <input className='mb-5 w-full rounded-lg  bg-zinc-900 border-2 border-zinc-600 text-zinc-400 px-2 py-4 leading-6' type="text" />
      </div>

      <div>
        <label  className='text-sm line leading-8 font-medium'> Password</label>
        <input  className='mb-5 w-full rounded-lg bg-zinc-900 border-2 border-zinc-600 text-zinc-400 px-2 py-4 lea'type="password" />
      </div>
      </section>      

      <button type="submit" className='w-4/5 px-4 py-3 bg-orange-600 h-11 border-0 rounded-md font-medium hover:bg-orange-500 text-white cursor-pointer block transition-all text-center mb-12'> SIGN IN</button>
      <div className='flex flex-col items-center mb-8'>
        <a className='mb-3' href="#">Forgot Password</a>
        <a href="#">Sign in with company or school</a>
      </div>
      <div className="flex flex-row w-8/12 justify-center">
        <hr className='flex-auto border-none h-px bg-zinc-500 mt-3 mr-1'/>
        <span className='text-lg font-mono'>OR</span>
        <hr className='flex-auto border-none h-px bg-zinc-500 mt-3 ml-1'/>
      </div>
      <a className="w-8/12 px-4 py-2 bg-none h-11 border-2 border-gray-300 rounded-md font-medium hover:border-orange-500 hover:text-orange-500 text-white cursor-pointer block transition-all text-center mt-12 mb-12" href="#">Create Account</a>

    </form>
  )
}

export default LoginForm