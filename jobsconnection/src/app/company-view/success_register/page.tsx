import CompanyRegistration from "@/components/CompanyRegistration";
import Image from "next/image";

export default function CompanyViewPage() {
  return(
    <div className="grid grid-cols-1 h-screen tab:grid-cols-2">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <h1 className='text-4xl font-bold py-4 text-justify'>
                  Cadastro realizado com Sucesso
                </h1>
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