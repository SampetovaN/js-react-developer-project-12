import {useFormik} from 'formik';
import cn from 'classnames';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      username: '',
    },
    onSubmit: (values) => {
      // todo
    },
    validate: (values) => {
      const errors = {};

      if (!values.password) {
        errors.password = 'Обязательное поле';
      }
      if (!values.username) {
        errors.username = 'Обязательное поле';
      }

      return errors;
    },
  });
  const inputClasses = (error) => cn('form-control', {'is-invalid': error})
  return (
    <div className="row justify-content-center align-content-center h-100">
      <div className="col-12 col-md-8 col-xxl-6">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-center mb-4">Войти</h1>
          <div className="form-floating mb-4">
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              className={inputClasses(formik.errors.username)}
              placeholder="Ваш ник"
            />
            <label htmlFor="username">Ваш ник</label>
            <div className="invalid-feedback is-invalid">
              {formik.errors.username}
            </div>
          </div>
          <div className="form-floating mb-4">
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={inputClasses(formik.errors.password)}
              placeholder="Пароль"
            />
            <label htmlFor="password" className="is-invalid">Пароль</label>
            <div className="invalid-feedback">
              {formik.errors.password}
            </div>
          </div>
          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
