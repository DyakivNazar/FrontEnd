import {useForm} from "react-hook-form";
import {LoginData} from "../../models/LoginData.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {logValidator} from "../../validator/api.validator.ts";
import {login} from "../../services/api.service.ts";
import './login.css'

export const LoginComp = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<LoginData>({mode:'all', resolver:  joiResolver(logValidator)});

    const createHandler = (data:LoginData) => {login(data)}
    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <label>
                    <input type="text" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label>
                    <input type="text" {...register('password')}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <button>Login</button>
            </form>
        </div>
    );
};