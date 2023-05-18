"use client"
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdBusiness } from "react-icons/io";
import { BiLockAlt } from "react-icons/bi";
import { Router, useRouter } from "next/router";

// const router = useRouter();

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const url = "https://connections-jobs-api-production.up.railway.app/api/login";
    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const token = response.headers.get("Authorization");
        console.log(token);
        push("/home/applicant/home");
      } else {
        console.log("Erro no login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex font-semibold text-gray-700 h-20">
        <div className="flex justify-between items-center bg-blue-800 font-bold text-white w-screen h-14 p-3 tab:w-[400px] tab:h-20 text-2xl tab:justify-center">
          <div className="flex justify-center items-center">
            <IoMdBusiness />
            Jobs Connection
          </div>
          <div className="visible tab:hidden">
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="hidden tab:inline-block w-screen">
          <div className="flex justify-end items-center h-20 px-4">
            <div className="flex justify-center items-center">
              <div className="relative">
                <Link href={"/"} className="flex items-center px-4 py-2 border text-white bg-blue-700 rounded-md font-bold hover:bg-blue-800 focus:outline-none">
                  
                    <span className="mr-2">Cadastrar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col justify-center items-center h-[550px]" onSubmit={handleLogin}>
        <span className="font-bold text-4xl text-gray-700 py-6">Login</span>
        <div className="w-96 py-2 px-6 tab:px-0">
          <label className="font-bold">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500">
              <HiOutlineMail />
            </div>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-8"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="w-96 py-2 px-6 tab:px-0">
          <label className="font-bold">Senha</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500">
              <BiLockAlt />
            </div>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-8"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="py-10">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-28 rounded">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;