import * as yup from "yup";

const USERNAME_REGEX = /^[a-zA-Z0-9]*$/g;

export const LoginValidatorSchema = yup.object({
  username: yup
    .string()
    .required("Campo obrigatório")
    .matches(USERNAME_REGEX, "Não deve conter espaços"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Deve ter pelo menos 8 caracteres"),
});
