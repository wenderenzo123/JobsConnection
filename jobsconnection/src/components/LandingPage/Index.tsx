import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
export default function LandingPage() {
    return (
        <main className='relative overflow-x-hidden'>
            <div className="flex flex-col">
                <section>
                    <div className="flex">
                        <div className="flex justify-between items-center bg-blue-800 font-bold text-white w-screen h-14 p-3 tab:w-[400px] text-2xl tab:h-20 tab:justify-center">
                            <div className="flex">
                                Jobs Connection
                            </div>
                            <div className="visible tab:hidden">
                                <GiHamburgerMenu />
                            </div>
                        </div>
                        <div className="hidden tab:inline-block w-screen">
                            <div className="flex justify-between items-center h-20 px-4">
                                <div className=" grid grid-cols-2 gap-4">
                                    <Link href="/login">
                                        Inicio
                                    </Link>
                                    <Link href="/login">
                                        Sobre
                                    </Link>
                                </div>
                                <div>
                                    <Link className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md" href={"home"}>
                                        Entrar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-1 tab:grid-cols-2 h-screen">
                    <div className="grid justify-center items-center">
                        <Image src="/LandingPage/team.svg" alt="Team Select" width={612} height={551} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col w-[400px] items-center px-4">
                            <h1 className="py-4 font-medium text-gray-700 text-2xl">É uma empresa e deseja contratar estudantes talentosos para desenvolver seus projetos?</h1>
                            <button className="bg-blue-800 text-white text-xl font-medium w-72 h-14 rounded-md">
                                Contrate um estudante
                            </button>
                        </div>
                        <div className="flex flex-col w-[400px] items-center px-4">
                            <h1 className="py-4 font-medium text-gray-700 text-2xl">Você quer ser contratado pelas melhores empresas do mercado de tecnologia?</h1>
                            <button className="bg-blue-800 text-white text-xl font-medium w-72 h-14 rounded-md">
                                Candidate-se às vagas
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                <div className="grid grid-cols-1 tab:grid-cols-2 h-screen">
                    <div className="flex flex-col justify-center items-center bg-blue-800 text-white w-full">
                        <p className="text-3xl font-bold tab:pb-20">Sobre</p>
                       <div className="grid p-4 text-xl gap-4 max-w-[600px]">
                       <p className="cel:text-lg">
                            Nosso objetivo é conectar os melhores estudantes das universidades brasileiras com as melhoras empresas.
                        </p>
                        <p className="cel:text-lg">
                            Visamos incentivar o primeiros passos dos desenvolvedores, engenheheiros de software e arquitetos de soluções
                            que estão na universade para conseguir a sua primeira oportunidade no mercado ainda durante a graduação.
                        </p>
                       </div>
                    </div>
                    <div className="grid justify-center items-center">
                        <Image src="/LandingPage/team-design.svg" alt="Team Select" width={612} height={500} />
                    </div>
                </div>
            </section>
            </div>
        </main>
    )
}