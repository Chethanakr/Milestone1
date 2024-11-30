import React, { useState } from 'react';
import './SignUpLogin.css'; // Importing the external CSS file

const SignUpLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <section className="signup-login">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form>
        <label>
          Username:
          <input type="text" required />
        </label>
        <label>
          Password:
          <input type="password" required />
        </label>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={toggleForm}>
        {isLogin ? 'Don’t have an account? Sign Up' : 'Already have an account? Login'}
      </button>
    </section>
  );
};

export default SignUpLogin;
