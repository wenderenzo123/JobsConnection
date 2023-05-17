import { createContext, ReactNode, useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";

export interface FormDataCompany {
  corporate_name: string;
  fantasy_name: string;
  registration_number: string;
  category: string;
  email: string;
  phone: string;
  logo: string;
  password: string;
  passwordConfirmation: string;
  address: {
    address_line_one: string;
    address_line_two: string;
    city: string;
    province: string;
  }
}

interface ContextProviderPropsCompany {
  children: ReactNode;
}

interface RegisterContextPropsCompany extends UseFormReturn<FormDataCompany> {}

const createUserSchema = yup.object().shape({
  corporate_name: yup.string().required("Nome da empresa é obrigatório"),
  fantasy_name: yup.string().required("Nome Fantasia é obrigatório"),
  registration_number: yup.string().required("Número de registro é obrigatório"),
  category: yup.string().required("Categoria da empresa é obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Email obrigatório"),
  phone: yup.string().required("Telefone da empresa é obrigatório"),
  logo: yup.string().notRequired(),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(9, "No mínimo 9 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), yup.ref("password")], "As senhas devem ser iguais"),
  address: yup.object({
    address_line_one: yup.string().required("Endereço é obrigatório"),
    address_line_two: yup.string().required("Endereço é obrigatório"),
    city: yup.string().required("Cidade é obrigatório"),
    province: yup.string().required("Estado é obrigatório"),
  })
});

const RegisterContextCompany = createContext({} as RegisterContextPropsCompany);

export function CreateContextProviderCompany({
  children,
}: ContextProviderPropsCompany): JSX.Element {
  const [registeredUserEmail, setRegisteredUserEmail] = useState<string>("");
  const form = useForm<FormDataCompany>({
    resolver: yupResolver(createUserSchema),
    defaultValues: {
      corporate_name: "",
      fantasy_name: "",
      registration_number: "",
      category: "",
      email: "",
      phone: "",
      logo: "",
      password: "",
      address: {
        address_line_one: "",
        address_line_two: "",
        city: "",
        province: "",
      }
    },
  });

  return (
    <RegisterContextCompany.Provider
      value={{
        ...form,
      }}
    >
      {children}
    </RegisterContextCompany.Provider>
  );
}

export const useRegisterCompany = () => useContext(RegisterContextCompany);