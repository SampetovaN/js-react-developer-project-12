import { useFormik } from 'formik';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
    },
  });
  return (
    <div className="row justify-content-center align-content-center h-100">
      <div className="col-12 col-md-8 col-xxl-6">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-center mb-4">Войти</h1>
          <div className="form-floating mb-4">
            <input
              id="username"
              name="username"
              type="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="form-control"
              placeholder="Ваш ник"
            />
            <label htmlFor="username">Ваш ник</label>
          </div>
          <div className="form-floating mb-4">
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control"
              placeholder="Пароль"
            />
            <label htmlFor="password">Пароль</label>
          </div>
          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
