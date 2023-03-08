"use client"
import CardVacancy from "@/components/CardVacancy";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function HomeCompany() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="grid grid-cols-1 px-8 gap-4 h-full">
            <div className="flex text-gray-500 justify-between">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">Vagas Cadastradas</span>
                    <span className="text-base">Vagas Disponiveis, Finalizadas e em pausa</span>
                </div>
            </div>
            <div className="grid gap-4 grid-cols-1 tab:grid-cols-2 justify-items-center">
                <CardVacancy />
                <CardVacancy />
                <CardVacancy />
                <CardVacancy />
                <CardVacancy />
            </div>
            {/* Botão de adicionar novo CardVacancy */}
            <button className="flex justify-center items-center bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full w-12 h-12 fixed bottom-0 right-0 m-6" onClick={() => setOpenModal(!openModal)}>
                <BsPlusLg />
            </button>
            {/* modal */}
            {openModal &&
            <div className="flex items-center justify-center">
                <div className="fixed inset-0 bg-gray-600 opacity-50"></div>
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    <form className="flex flex-col justify-start items-center border rounded px-5">
                        <div className="flex justify-between items-center w-full">
                            <span className="font-bold text-xl text-gray-700 py-6">Cadastre uma nova vaga</span>
                            <button onClick={() => setOpenModal(false)}>
                                <IoMdClose color="red"/>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 tab:grid-cols-2 gap-x-8 gap-4 px-5 pb-5 w-72 tab:w-full">
                            <div>
                                <label className='font-light'>Título</label>
                                <input className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight outline-none bg-white focus:border-gray-500" type="text" placeholder="Digite o titulo da sua vaga" />
                            </div>
                            <div>
                                <label className='font-light'>Contato</label>
                                <input className="appearance-none block w-full border border-gray-200 rounded py-2 px-3 leading-tight outline-none bg-white focus:border-gray-500" type="tel" placeholder="Digite o número de celular" pattern="[0-9]{2}\s[0-9]{5}-[0-9]{4}" />
                            </div>
                            <div>
                                <label className='font-light'>Email</label>
                                <input className="appearance-none block w-full border border-gray-200 rounded py-2 px-3 leading-tight outline-none bg-white focus:border-gray-500" type="email" placeholder="Email" />
                            </div>
                            <div>
                                <label className='font-light'>Salário</label>
                                <input className="appearance-none block w-full border border-gray-200 rounded py-2 px-3 leading-tight outline-none bg-white focus:border-gray-500" type="number" step="0.01" placeholder="Digite o salário" />
                            </div>
                            <div className="tab:col-start-1 tab:col-end-3 tab:row-start-3 tab:row-end-5">
                                <label className='font-light'>Descrição</label>
                                <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-non max-h-36" placeholder="Descreva a vaga, requisitos e requisitos obrigatórios, bem como informações adicionais" />
                            </div>
                            <div>
                                <label className='font-light'>Modelo de contratação:</label>
                                <select className="appearance-none block w-full border border-gray-200 rounded py-2 px-3 leading-tight outline-none bg-white focus:border-gray-500">
                                    <option value="">---</option>
                                    <option value="CLT">CLT</option>
                                    <option value="PJ">PJ</option>
                                    <option value="Freelancer">Freelancer</option>
                                </select>
                            </div>
                            <div>
                                <label className='font-light'>Local de trabalho:</label>
                                <select className="appearance-none block w-full border border-gray-200 rounded py-2 px-3 leading-tight outline-none bg-white focus:border-gray-500">
                                    <option value="">---</option>
                                    <option value="Escritório">Escritório</option>
                                    <option value="Home office">Home office</option>
                                    <option value="Híbrido">Híbrido</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            }
        </div>
    )
}