import image from './assets/image1.jpg';
import google_logo from './assets/google.svg';
import login_img from './assets/login.jpg';
export default function App() {
  return (
    <>
    <div className = "flex items-center justify-center min-h-screen bg-gray-100">
      <div className = "relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className = "flex flex-col justify-center p-8 md:p-14 ">
          <span className = "mb-3 text-4xl font-bold">Welcome back</span>
          <span className = "font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className= "py-4">
            <span className = "mb-2 text-md">
              Email
            </span>
            <input type="text" placeholder="name@email.com" className = "w-full p-2 border border-gray-200 rounded-md placeholder:font-light placeholder:text-gray-500" name = "email" id = "email"/>
            </div>
            <div className = "py-4">
              <span className = "mb-2 text-md">
                Password
              </span>
              <input type="password" placeholder = "Password" name = "pass" id = "pass" className = "w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
          </div>
          <div className = "flex justify-between w-full py-4">
            <div className = "mr-24">
              <input type="checkbox" name = "ch" id = "ch" className = "mr-2" />
              <span className = "text-md">
                Remember for 30 days
              </span>
            </div>

            <span className = "font-bold text-md">
              Forgot password?
            </span>
          </div>
          <button className = "w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">Sign in</button>
          <button className = "w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src={google_logo} alt="Google logo" className = "w-6 h-6 inline mr-2"/>
            Sign in with Google</button>
            <div className = "text-center text-gray-400">
              Dont have an account?
              <span className = "font-bold text-black"> Sign up for free</span>
            </div>
        </div>
        <div className = "relative">
          <img src={login_img} alt="" className = "w-[400px] h-full hidden rounded-r-2xl md:block object-cover"/>
        </div>
        <div className = "absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
          <span className = "text-white text-xl">
            We&apos;ve been using Untitle to kick
            <br />
            start every new project and can&apos;t <br />
            imagine working without it.
          </span>
        </div>

      </div>
    </div>
        <p
          className="underlinefont-extralight text-yellow-600 text-6xl shadow-xl antialiased font-semibold hover:underline rounded-full p-6 bg-stripes-zinc">Hello</p>
        <div className="text-4xl font-bold p-10 hover:animate-pulse border-4 border-yellow-400 rounded-full">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello!
          </span>
        </div>
        <button className="bg-red-400 rounded-md py-3 px-8 font-black mt-4">Click</button>
        <div className="p-8 flex items-center justify-center relative">
          <img src={image} alt="Background Visual" className="w-full h-full object-contain rounded-[30px] shadow-2xl w-4/5" />
          <div className = "grid inset-0 grid-cols-2 gap-10">
            <div className = "absolute inset-0 grid grid-cols-2 gap-4 m-40">
              <div>
                <button className="
                absolute backdrop-blur-md text-white px-20 py-5 rounded-3xl text-4xl font-thin shadow-2xl border border-neutral-500

                transition-all ease-in-out
                hover:-translate-y-1 hover:backdrop-blur-xl hover:scale-105 duration-300 hover:ring  ring-offset  ring-opacity-50 ring-neutral-300
                active:scale-95 active:translate-y-0 active:backdrop-blur-md active:ring-opacity-10 cursor-pointer
                
                ">Button</button>
              <button className = "relative">Hello how are you!</button>
              </div>
            </div>
          </div>
        </div>
        <div className = "grid gap-4 grid-cols-2">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
        </div>

        <h2 className = "bg-gradient-to-r from-zinc-800 to-zinc-100">GRID BUTTONS</h2>
        <div className = "bg-gradient-to-r from-indigo-500 to-blue-500 p-10">EEEE</div>
        
        <div className = "flex justify-center items-center">
            <div className = "border-2 w-3/5 bg-zinc-600 rounded-[30px]" >
              <div className = "grid grid-cols-2 gap-4">
                <img src={image} className = "object-contain rounded-l-[30px]"/>
                <div className = "m-[40px]">
                  <h1 className = "ml-2 text-white">Email</h1>
                  <input type="text" className = "rounded-full ring-[2px] ring-zinc-500 mt-2 p-2"/>
                  <h1 className = "ml-2 text-white">Password</h1>
                  <input type="password" className = "rounded-full ring-[2px] ring-zinc-500 mt-2 p-2"/>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}
