import image from './assets/image1.jpg';
export default function App() {
  return (
    <>
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
