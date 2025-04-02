import { Avatar } from "./Avatar"

export function Post() {
  return (
    <div className="bg-card p-10 rounded-lg">
      <header className="flex items-center flex-wrap gap-4">
        <Avatar />
        <div className="mr-auto">
          <h3 className="font-bold text-primary text-nowrap">Igor Ferreira</h3>
          <span className="text-sm text-secondary">Full-Stack Developer</span>
        </div>
        <span className="text-sm text-secondary text-nowrap">
          Publicado há 1h
        </span>
      </header>

      <main className="mt-6">
        <p className="text-tertiary">
          Fala galeraa 👋
          <br />
          <br />
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a
          href="https://igorferreiradev.netlify.app/"
          target="_blank"
          className="text-green-light font-bold mt-8 inline-block"
        >
          igorferreiradev.netlify.app/
        </a>

        <div className="flex gap-2 flex-wrap mt-8">
          <a href="" className="text-green-light font-bold">
            #novoprojeto
          </a>
          <a href="" className="text-green-light font-bold">
            #nlw
          </a>
          <a href="" className="text-green-light font-bold">
            #rocketseat
          </a>
        </div>
      </main>
      <hr className="border-divider my-6" />
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        className="flex flex-col items-start"
      >
        <h3 className="font-bold text-primary">Deixe seu feedback</h3>
        <textarea className="rounded-lg w-full h-24 bg-body mt-4 text-primary p-4 resize-none"></textarea>
        <button
          type="submit"
          className="bg-green text-primary py-4 px-6 rounded-lg font-bold leading-none mt-4"
        >
          Publicar
        </button>
      </form>
    </div>
  )
}
