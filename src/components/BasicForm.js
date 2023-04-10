import { useFormik } from 'formik'
import { basicSchema } from '../schemas'

const onSubmit = () => {
  console.log('submitted')
}
const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  })
  console.log(errors)
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        className={errors.email && touched.email ? 'input-error' : ''}
      />

      <label htmlFor="Age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="number"
        placeholder="Enter your Age"
      />

      <label htmlFor="Password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
      />

      <button type="submit">Submit</button>
    </form>
  )
}
export default BasicForm
