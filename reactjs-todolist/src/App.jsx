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
        <div tag="new-button" className="p-8 flex items-center justify-center">
          <img src={image} alt="GTA 6 image" className="w-half h-70 object-contain static rounded-[30px] hover:shadow-2xl " />
          <button className="absolute backdrop-blur-md text-white px-20 py-5 rounded-3xl text-4xl font-thin shadow-2xl border border-neutral-500
          
          transition ease-in-out delay-90 hover:*translate-y-1
          ">Button</button>
        </div>
      </div>
    </>
  )
}
