import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
    return (
        <section>
                    <div className="flex">
                        <div className="flex justify-between items-center bg-blue-800 font-bold text-white w-screen h-14 p-3 tab:w-[400px] text-2xl tab:h-20 tab:justify-center">
                            <div className="flex">
                                Jobs Connection
                            </div>
                            <div className="visible tab:hidden">
                                <GiHamburgerMenu/>
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
                                    <Link className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md" href={""}>
                                        Entrar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}