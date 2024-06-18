import image from './assets/image1.jpg';
export default function App() {
  return (
    <>
      <div className="px-10 py-20">
        <p
          className="underlinefont-extralight text-yellow-600 text-6xl shadow-xl antialiased font-semibold hover:underline rounded-full p-6 bg-stripes-zinc">Hello</p>
        <div className="text-4xl font-bold p-10 hover:animate-pulse border-4 border-yellow-400 rounded-full">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello!
          </span>
        </div>
        <br />
        <button className="bg-red-400 rounded-md py-3 px-8 font-black mt-4">Click</button>
        <div className="p-8 flex items-center justify-center">
          <img src={image} alt="Background Visual" className="w-half h-70 object-contain static rounded-[30px] shadow-2xl " />
          {/* <div className = "grid inset-0 grid-cols-2 relative"> */}
            <button className="absolute backdrop-blur-md text-white px-20 py-5 rounded-3xl text-4xl font-thin shadow-2xl border border-neutral-500
            transition-all ease-in-out
            hover:-translate-y-1 hover:backdrop-blur-xl
            hover:scale-105 duration-300 hover:ring  ring-offset  ring-opacity-50 ring-neutral-300

            active:scale-95 active:translate-y-0 active:backdrop-blur-md active:ring-opacity-10 cursor-pointer
            ">Button</button>
            <button>Hello</button>
          {/* </div> */}
        </div>
        <div className = "grid gap-4 grid-cols-2">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
        </div>
      </div>
    </>
  )
}
