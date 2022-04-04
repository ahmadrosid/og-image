import LinearGradient from "../components/linear-background"

export default function Home() {
  return (
    <>
      <LinearGradient option={2} width={1920}>
        <div className="px-20 w-full">
          <h1 className="text-[142px] leading-tight pb-6 font-bold text-white">
            My Command-Line Utility Collections
          </h1>
          {/* <p className='text-6xl pt-8 text-white'>Backend Developer Roadmap.</p> */}
          <div className='flex mt-36 items-center gap-6'>
            <img className="w-28 outline rounded-full outline-sky-300" src="/profile.png" />
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
