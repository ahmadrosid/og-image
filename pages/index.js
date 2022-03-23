import Head from 'next/head'

const LinearGradient = ({ option, children }) => {
  const bgOption = [
    "flex items-center justify-center p-12 bg-gradient-to-r from-cyan-500 to-blue-500 w-[1920px] h-[1080px] relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-sky-500 to-indigo-500 w-[1920px] h-[1080px] relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[1920px] h-[1080px] relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-purple-500 to-pink-500 w-[1920px] h-[1080px] relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 w-[1920px] h-[1080px] relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-pink-500 to-yellow-500 w-[1920px] h-[1080px] relative",
    "flex items-center justify-center p-12 bg-gradient-to-r from-orange-500 to-amber-500 w-[1920px] h-[1080px] relative",
  ]

  return (
    <div className={bgOption[option] ? bgOption[option] : `flex items-center justify-center p-12 bg-white w-[1920px] h-[1080px] relative`}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
      </Head>
      <div className='invisible bg-'></div>
      <LinearGradient option={6}>
        <div className="px-20 w-full">
          <h1 className="text-[142px] leading-tight pb-6 font-bold text-white">
            Rust parsing dynamic JSON
          </h1>
          <p className='text-6xl text-white'>Deep dive serde json.</p>
          <div className='flex mt-36 items-center gap-6'>
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
