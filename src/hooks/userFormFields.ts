import { useState } from "react"

export const useFormFields = <T>(initialState: T): {
    values: T, 
    handleChange: (event: React.ChangeEvent)
} => {

    const [values, setValues] = useState<T>(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }


    return {
        values, 
        handleChange
    }
} 