import Content from "../components/content"
import LinearGradient from "../components/linear-background"

export default function Home() {
  return (
    <>
      <LinearGradient option={1} height={1920} >
        <Content />
      </LinearGradient>
    </>
  )
}
