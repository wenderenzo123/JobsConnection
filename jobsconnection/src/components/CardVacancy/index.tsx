import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export default function CardVacancy() {
    return (
        <div className="h-64 max-w-xl rounded-lg border">
            <div className="flex justify-around items-center h-24 px-4">
                <div className="hidden lap:inline-block">
                    <Image src={"/img/perfil.png"} alt={""} width={66} height={66} className="rounded-full" />
                </div>
                <div>
                    <span>Desenvolvedor Web</span>
                    <div className="flex">
                        Remoto ou Hibrído -
                        Junior -
                        R$ 2.500,00 -
                        CLT
                    </div>
                </div>
                <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Detalhes
                </button>
            </div>
            {/*Resumo*/}
            <div className="flex flex-col px-4 max-h-28">
                <span className="text-base font-bold">Resumo</span>
                <span className="text-sm overflow-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, nisl nec ultricies lacinia, nunc nisl ultricies nunc, nec
                    ultricies lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    auctor, nisl nec ultricies lacinia. Nullam auctor, nisl nec
                </span>
            </div>
            {/*Contatos*/}
            <div className="flex px-4 h-12 justify-around items-center w-full">
                <div className="hidden lap:inline-block">
                    <span className="text-sm flex justify-center items-center"><BsFillTelephoneFill /> (84) 99999-9999</span>
                </div>
                <span className="text-sm flex justify-center items-center"><HiOutlineMail /> atendimento@godevcompany.com.br</span>
                {/*Aviso de Prazo*/}
                <div className="hidden lap:inline-block">
                    <span className="text-sm flex justify-center items-center bg-green-500 text-white px-2 py-1 rounded-md">25 Dias</span>
                </div>
            </div>
        </div>
    )
}