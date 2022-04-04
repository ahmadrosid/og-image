import LinearGradient from "../components/linear-background";

export default function() {
    return (
        <>
            <LinearGradient option={1}>
                <div className="px-12">
                    <h1 className="text-[112px] text-white text-center">
                        <span className="inline-block bg-sky-800 px-6 pt-4 mt-8 rounded-md uppercase">Easy and Free</span>
                        <span className="my-8 px-8 inline-block">{" Blogging setup "}</span>
                        <span className="inline-flex text-orange-400 bg-sky-100 -rotate-2 border-b-[20px] border-orange-400 px-8 my-4">for Developers</span>
                        <span className="inline-block px-8 my-8 text-[120px]">{" in 2022 "}</span>
                    </h1>
                </div>
            </LinearGradient>
        </>
    )
}