import { useForm } from "react-hook-form";


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Username" {...register("username", { required: true })} maxLength={15} />
                {errors.username && <span>Give us a username please</span>}
                <input placeholder="Password" {...register("password", { required: true })} minLength={7} />
                {errors.password && <span>The password should be longer than 7 characters</span>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login;
