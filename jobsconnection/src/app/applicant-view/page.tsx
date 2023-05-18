"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function ApplicantViewPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    const url = "https://connections-jobs-api-production.up.railway.app/api/student";
    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      name: data.student_name,
      tax_id: data.tax_id,
      course: data.course,
      email: data.email,
      phone: data.phone,
      password: data.password,

    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log("Cadastro realizado com sucesso");
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 h-screen tab:grid-cols-2">
        <div>
          <form className="flex flex-col justify-center items-center w-full h-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-96 py-2 px-6 tab:px-0">
              <label className="font-bold text-gray-700">Nome completo</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Nome completo" {...register("student_name")} />
            </div>
            <div className="w-96 py-2 px-6 tab:px-0">
              <label className="font-bold text-gray-700">CPF</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="XXX.XXX.XXX-XX" {...register("tax_id")} />
            </div>
            <div className="w-96 py-2 px-6 tab:px-0">
              <label className="font-bold text-gray-700">Email</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Example@example.com" {...register("email")} />
            </div>
            <div className="w-96 py-2 px-6 tab:px-0">
              <label className="font-bold text-gray-700">Telefone</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="tel" placeholder="(99) 999999999" {...register("phone")} />
            </div>
            <div className="w-96 py-2 px-6 tab:px-0">
              <label className="font-bold text-gray-700">Senha</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="***********" {...register("password")} />
            </div>
            <div className="w-96 py-2 px-6 tab:px-0">
              <label className="font-bold text-gray-700">Curso</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Curso" {...register("course")} />
            </div>
            <div className="flex justify-center items-center w-full h-16">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
          {/* Button */}
        </div>
        <div className="bg-blue-800 flex flex-col justify-center items-center text-white">
          <div className="text-4xl font-bold py-4">
            Cadastro Candidato
          </div>
          <Image className="h-[450px]" src="/ApplicantView/applicant.svg" alt="Candidato" width={500} height={500} />
          <div className="text-6xl font-bold py-4 align-middle">
            Jobs Connection
          </div>
        </div>
      </div>
    </div>
  );
}
