import { MdDarkMode } from "react-icons/md"
import logo from "../assets/Ignite simbol.svg"

export function Header() {
  function changeTheme() {
    const tagHtml = document.querySelector("html")

    tagHtml?.classList.toggle("dark")
  }

  return (
    <header className="bg-card flex items-center justify-center gap-4 p-5">
      <img src={logo} className="w-16 h-[3.75rem]" />
      <h1 className="text-primary font-bold text-2xl">Ignite Feed</h1>
      <button
        className="border border-primary text-primary p-2 rounded-lg"
        onClick={changeTheme}
      >
        <MdDarkMode size={20} />
      </button>
    </header>
  )
}
