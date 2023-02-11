import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaHashtag } from 'react-icons/fa'
import Image from 'next/image'
export default function CompanyRegistration() {
    return (
        <div className="grid grid-cols-1 h-screen tab:grid-cols-2">
            <div>
                <form className="flex flex-col justify-center items-center w-full h-full">
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Razão social</label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Razão social"/>
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>CNPJ</label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="99.999.999/9999-99" />
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Quantidade de funcionários</label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Quantidade de funcionários" />
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Email</label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Example@example.com" />
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Senha</label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************" />
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Categoria</label>
                        <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Selecione uma opção...</option>
                            <option>MEI</option>
                            <option>Sociedade Limitada Unipessoal</option>
                            <option>Sociedade Empresária Limitada</option>
                            <option>Simples Nacional</option>
                            <option>Sociedade Anônima</option>
                        </select>
                    </div>
                    <div className='py-6'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Cadastre-se
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-blue-800 flex flex-col justify-center items-center text-white">
                <div className='text-4xl font-bold py-4'>
                    Cadastro Empresa
                </div>
                <Image src="/CompanyView/company2.svg" alt="Picture of the author" width={500} height={500} />
                <div className='text-6xl font-bold py-4 align-middle'>
                    Jobs Connection
                </div>
            </div>
        </div>
    )
}