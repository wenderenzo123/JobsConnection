"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section>
            <div className="flex font-semibold text-gray-700">
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
                            <Link href={""}>
                                Inicio
                            </Link>
                            <Link href={""}>
                                Cadastrar
                            </Link>
                        </div>
                        <div className="relative">
                            <button
                                className="flex items-center px-4 py-2 border text-white bg-blue-700 rounded-md font-bold hover:bg-blue-800 focus:outline-none"
                                onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(false)}>
                                <span className="mr-2">National Project</span>
                                <div>
                                    <IoIosArrowDown />
                                </div>
                            </button>
                            {isOpen && (
                                <div className="absolute z-10 bg-white border border-gray-400 rounded mt-2 py-2 w-44">
                                    <Link
                                        href={""}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                                    >
                                        Configurações
                                    </Link>
                                    <Link
                                        href={""}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                                    >
                                        Sair
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}