import { useForm } from "react-hook-form";

// CSS 
import "./Login.css"


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-div">
                    <input className="form-input" placeholder="Username" {...register("username", { required: true })} maxLength={15} />
                    <input className="form-input" placeholder="Password" {...register("password", { required: true })} minLength={7} />
                </div>
                <div className="errors-div">
                    {errors.username && <span>Give us a username please</span>}
                    {errors.password && <span>The password should be longer than 7 characters</span>}
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login;
