import { PiPencilSimpleLine } from "react-icons/pi"
import { Avatar } from "./Avatar"

export function Profile() {
  return (
    <div className="bg-card w-full rounded-lg overflow-hidden flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-[4.5rem] object-cover"
      />

      <div className="flex flex-col items-center mx-auto -mt-7">
        <Avatar />
        <h3 className="text-primary font-bold mt-4">Igor Ferreira</h3>
        <span className="text-secondary text-sm">Full-Stack Developer</span>
      </div>

      <footer className="border-t border-divider pt-6 pb-8 mt-6">
        <button className="flex items-center gap-2.5 py-4 px-6 border border-green-light rounded-lg text-green-light font-bold leading-none mx-auto cursor-pointer">
          <PiPencilSimpleLine size={20} />
          Editar seu perfil
        </button>
      </footer>
    </div>
  )
}
