import Image from "next/image";
import { TbEdit } from "react-icons/tb";
export default function Perfil() {
    return (
        <div className="grid grid-cols-1 px-8 text-gray-800">
            <div className="flex flex-col text-gray-500">
                {/* Lembrar de quando pegar o nome da empresa colocar aqui */}
                <span className="text-2xl font-bold">Perfil National Projects</span>
                <span className="text-base">Informações Gerais</span>
            </div>
            <div className="grid gap-4 grid-cols-1 tab:grid-cols-2 justify-items-start">
                <div className="flex border w-full rounded-md p-4 max-h-80">
                    <form className="flex flex-col justify-center items-center w-full">
                        <div className="grid gap-3 grid-cols-2 grid-rows-1 w-full">
                            <div className='py-2 px-6 tab:px-0'>
                                <label className='font-bold'>Razão social</label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text" placeholder="National Projects Limited" />
                            </div>
                            <div className='py-2 px-6 tab:px-0'>
                                <label className='font-bold'>Telefone</label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text" placeholder="(99) 99999-9999" />
                            </div>
                            <div className='py-2 px-6 tab:px-0 col-span-2'>
                                <label className='font-bold'>Email</label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="email" placeholder="NationalProject@pro.com.br" />
                            </div>
                            <div className='py-2 px-6 tab:px-0'>
                                <label className='font-bold'>Ano de fundação</label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text" placeholder="01/05/2023" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex border w-full rounded-md flex-col align-middle">
                    <div className="divide-y">
                        <div>
                            <p className="flex items-center font-bold h-16 w-full p-4">Perfil</p>
                        </div>
                        {/* Imagem de Perfil */}
                        <div className="flex justify-start items-center">
                            <Image src="/img/perfil.png" className="h-32 w-32 rounded-full" alt="Foto de perfil" width={160} height={160} />
                            <button className=" text-blue-600 hover:text-blue-700 hover:underline py-2 px-4 rounded-lg">
                                Editar foto
                            </button>
                        </div>
                    </div>
                    {/* Descrição */}
                    <div className="flex flex-col justify-center items-center w-full p-4">
                        <div className="grid gap-3 grid-cols-1 grid-rows-1 w-full">
                            <div className='py-2 px-6 tab:px-0'>
                                <div className="flex items-center">
                                    <label className='font-bold'>Descrição</label>
                                    <button className="hover:text-blue-600">
                                        <TbEdit />
                                    </button>
                                </div>
                                <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none h-36 max-h-44" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl 
                                et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl et nisl. 
                                Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies 
                                nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl,
                                nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, 
                                nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl,
                                nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl et nisl. Sed euismod, nunc vel ultricies ultricies, nunc nisl ultricies nisl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};