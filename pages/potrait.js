import Head from 'next/head'

const LinearGradient = ({ option, children }) => {
  const bgOption = [
    "flex items-center justify-center p-12 bg-gradient-to-r from-cyan-500 to-blue-500 relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-sky-500 to-indigo-500 relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-purple-500 to-pink-500 relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-pink-500 to-yellow-500 relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-orange-500 to-amber-500 relative",
  ]

  return (
    <div className={"w-[1080px] h-[1920px] " + (bgOption[option] ? bgOption[option] : `flex items-center justify-center p-12 bg-white relative`)}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <LinearGradient option={1} >
        <div className="px-20 w-full">
            <h1 className="text-[142px] leading-tight pb-6 font-bold text-white">
                What skills you <span className='text-orange-300 leading-none -rotate-12 inline-block'>Need</span> to become a <span className='text-white bg-sky-900 inline-block px-6 pt-4 my-2'>Backend</span> <span className='text-white bg-sky-900 inline-block px-6 pt-4 my-2'>Developer?</span>
            </h1>
            <p className='text-6xl pt-8 text-white'>Backend Developer Roadmap.</p>
            <div className='flex mt-36 items-center gap-6 w-full'>
                <img className="w-28 outline rounded-full outline-violet-300" src="/profile.png" />
                <div className='text-4xl text-white space-y-2'>
                    <p>ahmadrosid.com</p>
                    <p>@_ahmadrosid</p>
                </div>
            </div>
        </div>
      </LinearGradient>
    </>
  )
}
