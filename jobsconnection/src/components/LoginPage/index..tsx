import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";

export default function LoginPage() {
  return (
    <div className="h-screen">
      <div className="flex font-semibold text-gray-700 h-20">
        <div className="flex justify-between items-center bg-blue-800 font-bold text-white w-screen h-14 p-3 tab:w-[400px] tab:h-20 text-2xl tab:justify-center">
          <div className="flex justify-center items-center">
            <IoMdBusiness />
            Jobs Connection
          </div>
          <div className="visible tab:hidden">
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="hidden tab:inline-block w-screen">
          <div className="flex justify-end items-center h-20 px-4">
            <div className="flex justify-center items-center">
              <div className="relative">
                <Link className="flex items-center px-4 py-2 border text-white bg-blue-700 rounded-md font-bold hover:bg-blue-800 focus:outline-none" href={"/"}>
                  <span className="mr-2">Cadastrar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col justify-center items-center h-[550px]">
        <div className='w-96 py-2 px-6 tab:px-0'>
          <label className='font-bold'>Email</label>
          <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Email" />
        </div>
        <div className='w-96 py-2 px-6 tab:px-0'>
          <label className='font-bold'>Senha</label>
          <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="**********" />
        </div>
        <div className='py-6'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-56">
            Entrar
          </button>
        </div>
      </form>
    </div>
  )
}