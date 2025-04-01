import { Header } from "../components/Header"
import { Post } from "../components/Post"
import { Profile } from "../components/Profile"

export function Home() {
  return (
    <div>
      <Header />

      <div className="max-w-6xl w-full grid grid-cols-[16rem_1fr] gap-8 mx-auto mt-8 px-4">
        <aside>
          <Profile />
        </aside>
        <main className="max-h-[calc(100vh-148px)] overflow-y-scroll space-y-8 scrollbar-transparent pr-4">
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
