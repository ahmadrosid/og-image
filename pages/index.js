import LinearGradient from "../components/linear-background"
import Content from "../components/content"

export default function Home() {
  return (
    <LinearGradient option={2} width={1920}>
      <Content />
    </LinearGradient>
  )
}
