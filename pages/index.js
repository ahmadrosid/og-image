import Head from 'next/head'

const LinearGradient = ({ option, children }) => {
  const bgOption = [
    "font-sans flex items-center justify-center p-12 bg-gradient-to-r from-cyan-500 to-blue-500 w-[1920px] h-[1080px] relative",
    "font-sans flex items-center justify-center p-12 bg-gradient-to-r from-sky-500 to-indigo-500 w-[1920px] h-[1080px] relative",
    "font-sans flex items-center justify-center p-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[1920px] h-[1080px] relative",
    "font-sans flex items-center justify-center p-12 bg-gradient-to-r from-purple-500 to-pink-500 w-[1920px] h-[1080px] relative",
    "font-sans flex items-center justify-center p-12 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 w-[1920px] h-[1080px] relative",
    "font-sans flex items-center justify-center p-12 bg-gradient-to-r from-pink-500 to-yellow-500 w-[1920px] h-[1080px] relative",
  ]

  return (
    <div className={bgOption[option]}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
      </Head>
      <LinearGradient option={4}>
        <div className="px-20 w-full">
          <h1 className="text-[142px] leading-tight pb-6 font-bold text-white">WebSocket for Productivity in Rust</h1>
          <p className='text-4xl text-white'>Building developmet server with actix websocket.</p>
          <div className='flex mt-36 items-center gap-6'>
            <img className="w-28 outline rounded-full outline-violet-300" src="/profile.png" />
            <p className='text-4xl text-white'>
              ahmadrosid.com <br />
              @_ahmadrosid
            </p>
          </div>
        </div>
      </LinearGradient>
    </>
  )
}
