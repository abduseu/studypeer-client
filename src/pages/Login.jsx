import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { signinGoogle, signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [validationError, setValidationError] = useState([])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        console.log('login page: ', email, password)

        signInUser(email, password)
            .then((result) => {
                const LoggedUser = result.user;
                e.target.reset()

                console.log(LoggedUser)
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                //login validation
                if (errorCode === 'auth/invalid-login-credentials') {
                    setValidationError('Email or password does not match!')

                } else {
                    setValidationError(errorCode)
                }
            });
    }

    const handleGoogle = () => {
        signinGoogle()
            .then(result => {
                console.log('Google login succesful', result.user)
                navigate('/')
            })
            .catch(error => {
                setValidationError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold navy pb-8">Login Here!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 red font-bold">
                                <Link to="/signup">Create an account.</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn navy rounded">Login</button>
                            </div>
                        </form>

                        <div className="divider">or login with</div>
                        <div className="form-control">
                            <button onClick={handleGoogle} className="bg-navy text-white font-bold w-full py-2 rounded">Google</button>
                        </div>
                        <p className="py-4 text-red-600 font-semibold">
                            {validationError}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;