"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoMdBusiness, IoMdSearch } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="fixed bg-white w-screen">
            <div className="flex font-semibold text-gray-700">
                <div className="flex justify-between items-center bg-blue-800 font-bold text-white w-screen h-14 p-3 tab:w-[400px] text-2xl tab:h-20 tab:justify-center">
                    <div className="flex justify-center items-center">
                        <IoMdBusiness />
                        Jobs Connection
                    </div>
                    <div className="visible tab:hidden">
                        <GiHamburgerMenu />
                    </div>
                </div>
                <div className="hidden tab:inline-block w-full">
                    <div className="flex justify-between items-center h-20 px-4">
                        <div className=" grid grid-cols-2 gap-10 text-xl">
                            <Link href={""} className="hover:text-blue-700 font-medium">
                                Home
                            </Link>
                            <Link href={""} className="hover:text-blue-700 font-medium">
                                Perfil
                            </Link>
                        </div>
                        <div className="flex justify-end items-center bg-indigo w-full">

                            <div className="flex items-center justify-between h-10 w-[25rem] border-indigo-500 border-2 p-2 mr-4 rounded">
                              <input type="text" />

                              <button>
                                <IoMdSearch size={25} />
                              </button>
                            </div>

                            <div className="relative mr-2">
                                <button
                                    className="flex items-center px-4 py-2 border text-white bg-blue-700 rounded-md font-bold hover:bg-blue-800 focus:outline-none"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    <span className="mr-2">Wender Enzo</span>
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
                                            Meus dados
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
                            <HiUserCircle size={50} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}