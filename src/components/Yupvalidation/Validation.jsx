
import * as Yup from 'yup'

export const ValidationSchema = Yup.object({
  username:Yup.string().required("Username is required"),
  email:Yup.string().required("Email is required")
  .email("Invaild email format"),
  password:Yup.string().required("Password is required")
  .min(8,"password must be at least 8 characters")
  .matches(
    /[!@#$%^&*()|<>]/,
    "password must contain at least one symbol"
  )
  .matches(/[0-9]/, "must contain at least one number")
  .matches(/[A-B]/,"must contain at least one uppercase letter")
  .matches(/[a-b]/,"must contain at least one lowercase letter")

})

