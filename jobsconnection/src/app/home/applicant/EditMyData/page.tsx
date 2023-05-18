"use client";
import CardVacancy from "@/components/CardVacancy";

import WenderEnzo from "../../../../assets/wender_enzo.png";
import Image from "next/image";
import { useState } from "react";

const EditMyData = () => {
    const [formData, setFormData] = useState({
        name: '',
        tax_id: '',
        course: '',
        email: '',
        phone: '',
        password: '',

    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar os dados atualizados do perfil para o servidor
        console.log(formData);
    };

    return (
        <div className=" mx-auto container p-4" >
            <div className=" flex justify-between p-5 overflow-hidden">

                <h1 className="text-2xl font-bold mb-4">Editar Perfil</h1>
                <button type="submit" className="bg-transparent hover:text-blue-600 text-sky-500 font-semibold px-4 py-2 rounded">
                    Editar meus dados e senha
                </button>

            </div>
            <form onSubmit={handleSubmit} className="flex justify-between overflow-hidden">
                <div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold mb-1">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-gray-300 border rounded p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tax_id" className="block font-semibold mb-1">
                            CPF
                        </label>
                        <input
                            type="text"
                            id="tax_id"
                            name="tax_id"
                            value={formData.tax_id}
                            onChange={handleChange}
                            className="w-full border-gray-300 border rounded p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-gray-300 border rounded p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-semibold mb-1">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border-gray-300 border rounded p-2"
                            placeholder="••••••••••" disabled
                        />
                    </div>

                </div>

                <div className="">
                    <div className="mb-4">
                        <label htmlFor="tax_id" className="block font-semibold mb-1">
                            Telefone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-gray-300 border rounded p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tax_id" className="block font-semibold mb-1">
                            Curso
                        </label>
                        <input
                            type="text"
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full border-gray-300 border rounded p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bio" className="block font-semibold mb-1">
                            Descrição Profissional
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            value="Programação Web é show demais, sou fera nesse assunto !"
                            onChange={handleChange}
                            className="w-full border-gray-300 border w-50 rounded m overflow-hidden"
                        ></textarea>
                    </div>
                </div>

                <div>
                    <figure>
                        <Image src={WenderEnzo} height="250" alt="" />
                    </figure>

                </div>
            </form>

        </div>
    );
};

export default EditMyData;