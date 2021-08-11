import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../App.js";

// CSS 
import "../bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"


const Login = () => {

    const user = useContext(UserContext);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = () => user.setAuth();
    console.log(user.isLogged)
    //  (data) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-div">
                    <input
                        className="form-input"
                        placeholder="Username"
                        {...register("username", { required: true })} maxLength={15} />
                    <input
                        className="form-input"
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })} minLength={7} />
                </div>
                <div className="errors-div">
                    {errors.username && <span>Give us a username please</span>}
                    {errors.password && <span>The password should be longer than 7 characters</span>}
                </div>
                {(user.isLogged === false)
                    ? <button type="submit" className="btn btn-danger">Sign in</button>
                    : <button type="submit" className="btn btn-success">Sign out</button>
                }
            </form>
        </div>
    )
}

export default Login;
