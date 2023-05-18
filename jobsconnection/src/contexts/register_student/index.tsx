'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";

export interface FormDataStudent {
  student_name: string;
  tax_id: string;
  course: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
}

interface ContextProviderPropsStudent {
  children: ReactNode;
}

interface RegisterContextPropsStudent extends UseFormReturn<FormDataStudent> {}

const createUserSchema = yup.object().shape({
  student_name: yup.string().required("Nome da empresa é obrigatório"),
  tax_id: yup.string().required("CNPJ da empresa é obrigatório"),
  course: yup.string().required("Curso da empresa é obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Email obrigatório"),
  phone: yup.string().required("Telefone da empresa é obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(9, "No mínimo 9 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), yup.ref("password")], "As senhas devem ser iguais"),
});

const RegisterContextStudent = createContext({} as RegisterContextPropsStudent);

export function CreateContextProviderStudent({
  children,
}: ContextProviderPropsStudent): JSX.Element {
  const [registeredUserEmail, setRegisteredUserEmail] = useState<string>("");
  const form = useForm<FormDataStudent>({
    resolver: yupResolver(createUserSchema),
    defaultValues: {
      student_name: "",
      tax_id: "",
      course: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  return (
    <RegisterContextStudent.Provider
      value={{
        ...form,
      }}
    >
      {children}
    </RegisterContextStudent.Provider>
  );
}

export const useRegisterStudent = () => useContext(RegisterContextStudent);