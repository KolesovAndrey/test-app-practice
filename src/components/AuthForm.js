import { useRef, useContext } from 'react';
import AuthContext from '../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const emailValid = (email) => {
    return email.trim().length !== 0 && email.includes('@');
  };

  const passwordValid = (password) => {
    return password.trim().length !== 0;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (emailValid(enteredEmail) && passwordValid(enteredPassword)) {
      console.log('email and password is valid!');
      authCtx.loginHandler();
    }
  };

  return (
    <form className={classes['auth-form']} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordInputRef} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default AuthForm;
