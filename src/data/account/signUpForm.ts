import { ISignUpForm } from "models/account/signUpForm"

export const SignUpForm: ISignUpForm[] = [
  {
    id: 0,
    nameId: "firstname",
    nameTitle: "Firstname",
    type: "text",
    placeholder: "John"
  },
  {
    id: 1,
    nameId: "lasttname",
    nameTitle: "Lastname",
    type: "text",
    placeholder: "Doe"
  },
  {
    id: 2,
    nameId: "username",
    nameTitle: "Username",
    type: "text",
    placeholder: "John-1955"
  },
  {
    id: 3,
    nameId: "email",
    nameTitle: "Email",
    type: "email",
    placeholder: "john.doe@example.com"
  },
  {
    id: 4,
    nameId: "password",
    nameTitle: "Password",
    type: "password",
    placeholder: "John-Doe-123?"
  },
  {
    id: 5,
    nameId: "password2",
    nameTitle: "Confirm Password",
    type: "password",
    placeholder: "John-Doe-123?"
  },
]