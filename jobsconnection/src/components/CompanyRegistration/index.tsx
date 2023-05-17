"use client"
import Image from 'next/image';
import { Company } from '@/types';
import { SubmitHandler, useForm } from 'react-hook-form';
export default function CompanyRegistration() {
    const { register, handleSubmit } = useForm<Company>();
    
    return (
        <div className="grid grid-cols-1 h-screen tab:grid-cols-2 justify-center items-center">
            <form className="grid grid-cols-4 grid-rows-6 gap-2 justify-center items-center w-full px-10 py-6">
                <div className='px-6 tab:px-0 col-start-1 col-end-3'>
                    <label className='font-bold'>Razão social</label>
                    <input id="razaoSocial" {...register("razaoSocial")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Razão social" />
                </div>
                <div className=' px-6 tab:px-0 col-start-3 col-end-5'>
                    <label className='font-bold'>Nome Fantasia</label>
                    <input id="nomeFantasia" {...register("nomeFantasia")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Razão social" />
                </div>
                <div className=' px-6 tab:px-0 col-start-1 col-end-3'>
                    <label className='font-bold'>Email</label>
                    <input id="email" {...register("email")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Example@example.com" />
                </div>
                <div className='  px-6 tab:px-0 col-start-3 col-end-5'>
                    <label className='font-bold'>Senha</label>
                    <input id="senha" {...register("senha")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************" />
                </div>
                <div className='  px-6 tab:px-0'>
                    <label className='font-bold'>Telefone</label>
                    <input id="telefone" {...register("telefone")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Telefone" />
                </div>
                <div className='  px-6 tab:px-0'>
                    <label className='font-bold'>CNPJ</label>
                    <input id="cnpj" {...register("cnpj")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="99.999.999/9999-99" />
                </div>
                <div className='  px-6 tab:px-0 col-start-3 col-end-5'>
                    <label className='font-bold'>Categoria</label>
                    <select id="categoria" {...register("categoria")} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>Selecione uma opção...</option>
                        <option>MEI</option>
                        <option>Sociedade Limitada Unipessoal</option>
                        <option>Sociedade Empresária Limitada</option>
                        <option>Simples Nacional</option>
                        <option>Sociedade Anônima</option>
                    </select>
                </div>
                {/* endereço dividido em inputs rua - bairro - cidade - estado */}
                <div className='  px-6 tab:px-0 col-start-1 col-end-3'>
                    <label className='font-bold'>Rua</label>
                    <input id="rua" {...register("rua")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Rua" />
                </div>
                <div className='  px-6 tab:px-0 col-start-3 col-end-5'>
                    <label className='font-bold'>Bairro</label>
                    <input id="bairro" {...register("bairro")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Bairro" />
                </div>
                <div className='  px-6 tab:px-0 col-start-1 col-end-3'>
                    <label className='font-bold'>Cidade</label>
                    <input id="cidade" {...register("cidade")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Cidade" />
                </div>
                <div className='  px-6 tab:px-0 col-start-3 col-end-5'>
                    <label className='font-bold'>Estado</label>
                    <input id="estado" {...register("estado")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Estado" />
                </div>
                <div className='flex justify-center col-start-2 col-end-4'>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Cadastre-se
                    </button>
                </div>
            </form>
            <div className="bg-blue-800 flex flex-col justify-center items-center text-white h-full">
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