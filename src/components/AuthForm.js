import { useRef } from 'react';

const AuthForm = () => {
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
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordInputRef} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default AuthForm;
