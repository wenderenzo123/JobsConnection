import Image from "next/image";

export default function ApplicantViewPage() {
  return (
    <div>
      <div className="grid grid-cols-1 h-screen tab:grid-cols-2">
        <div>
          <form className="flex flex-col justify-center items-center w-full h-full">
            <div className='w-96 py-2 px-6 tab:px-0'>
              <label className='font-bold text-gray-700'>Nome completo</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Nome completo" />
            </div>
            <div className='w-96 py-2 px-6 tab:px-0'>
              <label className='font-bold text-gray-700'>CPF</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="XXX.XXX.XXX-XX" />
            </div>
            <div className='w-96 py-2 px-6 tab:px-0'>
              <label className='font-bold text-gray-700'>Email</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Example@example.com" />
            </div>
            <div className='w-96 py-2 px-6 tab:px-0'>
              <label className='font-bold text-gray-700'>Senha</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="***********" />
            </div>
            <div className='w-96 py-2 px-6 tab:px-0'>
              <label className='font-bold text-gray-700'>Curso</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Curso" />
            </div>
            <div className='w-96 py-2 px-6 tab:px-0'>
              <label className='font-bold text-gray-700'>Instituição</label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Instituição" />
            </div>
            <div className='flex justify-center items-center w-full h-16'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cadastrar
              </button>
            </div>
          </form>
          {/* Button */}
        </div>
        <div className="bg-blue-800 flex flex-col justify-center items-center text-white">
          <div className='text-4xl font-bold py-4'>
            Cadastro Candidato
          </div>
          <Image className="h-[450px]" src="/ApplicantView/applicant.svg" alt="Candidato" width={500} height={500} />
          <div className='text-6xl font-bold py-4 align-middle'>
            Jobs Connection
          </div>
        </div>
      </div>
    </div>
  )
}