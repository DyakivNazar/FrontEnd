import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator/api.validator.ts";
import {ICars} from "../../models/ICars.ts";
import {addCar} from "../../services/api.service.ts";
import './FormCar.css'

export const FormCarComp = () => {
    const {handleSubmit, register, formState:{errors, isValid}}
        = useForm<ICars>({mode: 'all', resolver: joiResolver(carValidator)});

    const customHandler = (data: ICars)=>{
        addCar(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>

                <label>
                    <input type="number" {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>

                <label>
                    <input type="number" {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid}>Add car</button>
            </form>
        </div>
    );
};