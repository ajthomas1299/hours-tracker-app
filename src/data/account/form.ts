import { IForm } from "models/account/form"

export const signUp: IForm[] = [
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
    nameId: "enter username",
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
    nameId: "new-password",
    nameTitle: "Create Password",
    type: "new-password",
    placeholder: "John-Doe-123?"
  },
  {
    id: 5,
    nameId: "current-password",
    nameTitle: "Confirm Password",
    type: "current-password",
    placeholder: "John-Doe-123?"
  },
]

export const login: IForm[] = [
  {
    id: 1,
    nameId: "enter username",
    nameTitle: "Username",
    type: "text",
    placeholder: "John-1955"
  },
  {
    id: 5,
    nameId: "current-password",
    nameTitle: "Password",
    type: "current-password",
    placeholder: "John-Doe-123?"
  },
]