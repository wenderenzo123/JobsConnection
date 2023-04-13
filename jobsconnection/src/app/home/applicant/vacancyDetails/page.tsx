import Image from "next/image";
import Link from "next/link";

import LogoExample from '@/assets/logo.png';
import Email from '@/assets/mail.png';
import Phone from '@/assets/phone-call.png';

export default function vacancyDetails(): JSX.Element {
  return (
    <div className="flex w-screen justify-center mt-10">
        <div className="flex justify-center flex-col w-[68rem]">
          <header className="flex justify-between mb-10 items-center" >
            <div className="flex flex-row items-center" >
              <Image src={LogoExample} alt="Logo" />
              <p className="text-3xl">Desenvolvimento Web</p>
            </div>

            <div className="flex items-center pl-2 border-l-2 h-[2.5rem]">
              <p>Remoto ou Hibrído - Junior - R$ 2.500,00 - CLT</p>
            </div>

            <div className="flex items-center pl-2 border-l-2 h-[2.5rem] ">
              <button className="flex items-center justify-center w-[5rem] h-[1.5rem] bg-[#22c55e] rounded p-2 ml-4 text-[#ffffff] font-bold">25 dias</button>
            </div>
          </header>

          <div>
            <section className="mb-4">
              <h1 className="text-2xl mb-4 font-bold" >Descrição da vaga</h1>
              <p className="text-[#374151]" >Procuramos programador web experiente em HTML, CSS, JavaScript e frameworks como React ou Angular. Conhecimento em metodologias ágeis e desenvolvimento de aplicações escaláveis é essencial. Se você é apaixonado por tecnologiaprojetos desafiadores, envie seu currículo hoje!</p>
            </section>

            <section className="mb-4">
              <h1 className="text-1xl mb-4 font-bold">Cultura</h1>
              <p className="text-[#374151]" >valorizamos a inovação, a colaboração e a diversidade. Oferecemos aos nossos funcionários um ambiente de trabalho descontraído e flexível, com muitas oportunidades de crescimento e desenvolvimento.</p>
            </section>

            <section className="mb-6">
              <h1 className="text-1xl mb-4 font-bold text-[#374151]" >Requisitos obrigatórios</h1>
              <ul className="list-disc ml-8">
                <li>HTML, Javascript e CSS</li>
                <li>React ou Angular</li>
                <li>Consumo de API</li>
                <li>Redux E Redux Saga</li>
              </ul>
            </section>

            <section>
              <h1 className="text-1xl mb-4 font-bold text-[#374151]" >Diferenciais</h1>
              <ul className="list-disc ml-8">
                <li>Nodejs e Express</li>
                <li>Typeorm</li>
                <li>Consumo de API</li>
                <li>Postgresql</li>
              </ul>
            </section>
          </div>

          <footer className="flex gap-10 mt-8">
            <div className="flex justify-start items-center gap-2 text-[#94a3b8]">
              <Image src={Phone} alt="Phone" />
              <p>(84) 99999-9999</p>
            </div>

            <div className="flex justify-start items-center gap-2 text-[#94a3b8]">
              <Image src={Email} alt="E-mail" />
              rhcontratos@corp.com
            </div>
          </footer>

          <div className="flex justify-between mt-8">
            <Link href=''>
              <button className="flex justify-center items-center text-1xl text-[#FFFFFF] bg-[#1d4ed8]  w-[12.5rem] h-[1.5rem] p-5 rounded font-bold">Voltar</button>
            </Link>

            <button className="flex justify-center items-center text-1xl text-[#FFFFFF] bg-[#15803d] w-[12.5rem] h-[1.5rem] p-5 rounded font-bold">Me candidatar</button>
        </div>
        </div>

        
    </div>
  )
}