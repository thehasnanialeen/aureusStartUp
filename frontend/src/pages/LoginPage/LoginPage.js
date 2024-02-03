import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './LoginPage.css';
import { GoogleLogin } from 'react-google-login';


function Login() {
    const [mode, setMode] = useState('login');
    const [prevMode, setPrevMode] = useState(null);

    const responseGoogle = (response) => {
      console.log('Login Success:', response);
    }
    const handleLoginFailure = (response) => {
      console.error('Login Failed:', response);
    }
    const changeMode = (newMode) => {
      setPrevMode(mode);
      setMode(newMode);
    };
    const location = useLocation();
    useEffect(() => {
      setMode('login');
      setPrevMode('null');
    }, [location]);
    const getAnimationClass = () => {
      if (mode === 'signup' && prevMode === 'recovery') return 'moveFromCentertoLeft';
      if (mode === 'signup') return 'moveToLeft';
      if (mode === 'login' && prevMode === 'recovery') return 'moveFromCentertoRight';
      if (mode === 'login') return 'moveToRight';
      if (mode === 'recovery' && prevMode === 'signup') return 'moveToCenter';
      if (mode === 'recovery' && prevMode === 'login') return 'moveToCenterFromRight';
      return '';
    };
    const getPositionClass = () => {
        if (mode === 'signup') return 'bounceLeft';
        if (mode === 'login') return 'bounceRight';
        if (mode === 'recovery') return 'bounceMiddle';

        return '';
      };

    return (

      <section className="user">
        <div className = {`back-banner ${getPositionClass() }`}>
            {/* Unregistered Users */}
            <div className="half-banner">
              <h2 className="banner-title">Don't have an account?</h2>
              <p>Sign up to get started!</p>
              <button className="banner-button" onClick={() => changeMode('signup')}>Sign up</button>
            </div>
            <div className = "spacer half-banner"></div>
            <div className = "spacer half-banner"></div>
            {/* Registered Users */}
            <div className="half-banner right-banner">
              <h2 className="banner-title">Have an account?</h2>
              <p>Login to access your information.</p>
              <button className="banner-button" onClick={() => changeMode('login')}>Login</button>
            </div>
        </div>
        <div className={`user-form ${getAnimationClass() } ${getPositionClass() }`}>
            <div className = "login-form">
                <h2 className="forms_title">Login</h2>
                <form className="forms_form">
                <div className="form_fields">
                    <div className="form_field">
                        <input type="text" placeholder="Username" required className="forms_field-input" />
                    </div>
                    <div className="form_field">
                        <input type="password" placeholder="Password" required className="forms_field-input" />
                    </div>
                </div>
                <div className="forms_buttons">
                    <button className="forgot-button" onClick={()=>changeMode('recovery')}>Forgot Password?</button>
                    <button type="submit" className="form-button">Login</button>
                </div>
            </form>
            <GoogleLogin
            clientId="1006701555637-gbo2ft2d502s9uae8mut6adrdennfv4d.apps.googleusercontent.com"
            buttonText="Continue with Google"
            onSuccess={responseGoogle}
            onFailure={handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            className="google-button"
            />
            </div>
            <div className = "signup-form">
            {/* Signup Form */}
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form">
                <div className = "form_fields">
                    <div className="form_field">
                    <input type="text" placeholder="Username" required className="forms_field-input" />
                    </div>
                    <div className="form_field">
                        <input type="email" placeholder="Email" required className="forms_field-input" />
                    </div>
                    <div className="form_field">
                        <input type="password" placeholder="Password" required className="forms_field-input" />
                    </div>
                </div>
                <div className="forms_buttons">
                    <button type="submit" className="form-button">Sign Up</button>
                </div>
              </form>
            </div>
            </div>
            {/* Recovery Form */}
            <div className = "recovery-form">
                <h2 className="forms_title">Forgot your password?</h2>
                <p>Enter your email address below and we'll get you back on track </p>
                <form className="forms_form">
                <div className="form_fields">
                    <div className="form_field">
                        <input type="text" placeholder="Email" required className="forms_field-input" />
                    </div>
                </div>
                <div className="forms_buttons">
                    <button type="submit" className="form-button">Send</button>
                </div>
            </form>
            </div>
            
            
        </div>
        
      </section>
    );
  }
  
  export default Login;