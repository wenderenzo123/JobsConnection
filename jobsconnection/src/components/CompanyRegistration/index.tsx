'use client';
import { useRouter } from 'next/navigation';

import Image from 'next/image'
import { FormDataCompany, useRegisterCompany } from '@/contexts/register_company'
import { api } from '@/app/service/api';

export default function CompanyRegistration() {
    const { register, handleSubmit } = useRegisterCompany(); 
    const { push } = useRouter(); 

    async function handleRegisterCompany(data: FormDataCompany) {
        
        try {
            const response = await api.post('/company', {
                corporate_name: data.corporate_name,
                fantasy_name: data.fantasy_name,
                registration_number: data.registration_number,
                category: data.category,
                email: data.email,
                phone: data.phone,
                logo: data.logo,
                password: data.password,
                passwordConfirmation: data.passwordConfirmation,
                address: {
                    address_line_one: data.address.address_line_one,
                    address_line_two: data.address.address_line_two,
                    city: data.address.city,
                    province: data.address.province,
                }
            });

            if(response.status == 201) {
                push('/company-view/success_register');
            }

            throw new Error('Register was not made successfully');            
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div className="grid grid-cols-1 h-screen tab:grid-cols-2">
            <div>
                <form onSubmit={handleSubmit((data) => handleRegisterCompany(data))} className="flex flex-col justify-center items-center w-full h-full">
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Nome da empresa</label>
                        <input {...register('corporate_name')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Razão social"/>
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Nome fantasia</label>
                        <input {...register('fantasy_name')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Nome fantasia"/>
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>CNPJ</label>
                        <input {...register('registration_number')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="99.999.999/9999-99" />
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Categoria</label>
                        <select {...register('category')} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Selecione uma opção...</option>
                            <option>MEI</option>
                            <option>Sociedade Limitada Unipessoal</option>
                            <option>Sociedade Empresária Limitada</option>
                            <option>Simples Nacional</option>
                            <option>Sociedade Anônima</option>
                        </select>
                    </div>

                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Telefone</label>
                        <input {...register('phone')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="www.logo.com/logo.png" />
                    </div>

                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Logo Url</label>
                        <input {...register('logo')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="www.logo.com/logo.png" />
                    </div>

                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Email</label>
                        <input {...register('email')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Example@example.com" />
                    </div>
                    <div className='w-96 py-2 px-6 tab:px-0'>
                        <label className='font-bold'>Senha</label>
                        <input {...register('password')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************" />
                    </div>

                    <div className='flex justify-between items-between gap-[1rem] w-96' >
                        <div className='w-48 py-2 px-6 tab:px-0'>
                            <label className='font-bold'>Endereço linha um</label>
                            <input {...register('address.address_line_one')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Endereço linha um" />
                        </div>

                        <div className='w-48 py-2 px-6 tab:px-0'>
                            <label className='font-bold'>Endereço linha dois</label>
                            <input {...register('address.address_line_two')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Endereço linha um" />
                        </div>
                    </div>

                    <div className='flex justify-between items-between gap-[1rem] w-96' >
                        <div className='w-48 py-2 px-6 tab:px-0'>
                            <label className='font-bold'>Cidade</label>
                            <input {...register('address.city')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Mossoró" />
                        </div>
                        <div className='w-48 py-2 px-6 tab:px-0'>
                            <label className='font-bold'>Estado</label>
                            <input {...register('address.province')} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="RN" />
                        </div>
                    </div>

                    <div className='py-6'>
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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