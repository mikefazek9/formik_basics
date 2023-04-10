import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[A-Z]).{5,}$/
// regex min 5 characters, 1 uppercase, 1 lowercase and 1 number digit
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please Enter a valid Email...')
    .required('Requires input...'),
  age: yup.number().positive().integer().required('Requires user age...'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: 'Please enter valid password' })
    .required('requires password'),
})
