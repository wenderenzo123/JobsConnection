export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-screen h-screen max-w-xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Usuário
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 focus:border-blue-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Senha
            </label>
            <input className="shadow appearance-none border focus:border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}