import "./Login.css";
import Button from ".././Button/Button";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <img
          src=".././public/img/positiveSpace.png"
          alt="positive space icon"
        />
        <div className="card">
          <section className="first">
            <h3>Sign In</h3>
            <p>
              <span>Welcome back!</span> Please enter your details
            </p>
          </section>
          <section className="second">
            <form>
              <p>Email</p>
              <input type="email" className="second-input" />
              <p>Password</p>
              <input type="password" className="second-input" />
              <a href="#">Forgot Password?</a>
              <Button context="Login" />
            </form>
          </section>
          <section className="third">
            <div className="social-media-links">
              <div className="link">
                <a href="#">
                  <img src=".././public/img/googleIcon.png" alt="Google Icon" />
                  <p>Sign up with Google</p>
                </a>
              </div>
              <div className="link">
                <a href="#">
                  <img
                    src=".././public/img/facebookIcon.png"
                    alt="Facebook Icon"
                  />
                  <p>Sign up with Google</p>
                </a>
              </div>
            </div>
            <a href="#">
              <p>
                Don't have an account? <span>Sign up</span>
              </p>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
