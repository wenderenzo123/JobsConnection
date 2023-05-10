import CardVacancy from "@/components/CardVacancy";

import WenderEnzo from "../../../../assets/wender_enzo.png";
import Image from "next/image";

export default function Profile(): JSX.Element {
  return (
    <main className="flex justify-between p-10 overflow-hidden">
      <div className="p-5 bg-white drop-shadow-md rounded w-[35rem] h-2/3 mt-12">
        <div>
          <h2 className="text-2xl mb-4 font-bold">Perfil de usuário</h2>
        </div>
        <header className="flex justify-between items-center mt-10">
          <Image src={WenderEnzo} alt="" />
          <div className="ml-5 w-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nisl nec ultricies lacinia, nunc nisl ultricies nunc, nec
            ultricies lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam auctor, nisl nec ultricies lacinia. Nullam auctor, nisl nec
          </div>
        </header>

        <div className="mt-10">
          <form className="flex flex-col justify-center items-start ">
            <div className="w-96 py-2 px-6 tab:px-0 w-full mt-4">
              <label>Nome de usuário</label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-2 w-full"
                type="text"
                value={"Wender Enzo de Oliveira"}
              />
            </div>

            <div className="flex gap-5 mt-4">
              <div className="w-50 py-2 px-6 tab:px-0">
                <label>Data de Nascimento</label>
                <input
                  className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-2 w-[15rem]"
                  type="text"
                  value={"08/12/2000"}
                />
              </div>

              <div className="w-50 py-2 px-6 tab:px-0">
                <label>Telefone</label>
                <input
                  className="appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-2 w-[15rem]"
                  type="text"
                  value={"(84) 98634-4116"}
                />
              </div>
            </div>

            <div className="w-96 py-2 px-6 tab:px-0 w-full mt-4">
              <label>E-mail</label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-2 w-full"
                type="email"
                value={"wender.oliveira@alunos.ufersa.edu.br"}
              />
            </div>

          </form>
        </div>
      </div>

      <div>
        <h2 className="text-2xl mb-4 font-bold">Incrições recentes</h2>

        <div className="flex flex-col gap-10 overflow-y-auto h-2/4">
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
        </div>
      </div>
    </main>
  );
}
