import { useState } from 'react';

const useForm = () => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const initialState = { username: '', email: '', details: '' }

    const validate = (name, value) => {
        switch (name) {
            case 'entry.1546054863':
                if (value.length <= 0) {
                    setErrors({
                        ...errors,
                        username: 'Username * (this field is required)'
                    })
                } else {
                    setErrors({ ...errors, username: '' })
                }
                break;

            case 'entry.1255229173':
                if (value.length <= 0) {
                    setErrors({
                        ...errors,
                        email: 'Email * (this field is required)'
                    })
                } else if (!new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(value)) {
                    setErrors({
                        ...errors,
                        email: 'Email address is not valid'
                    })
                } else {
                    setErrors({ ...errors, email: '' })
                }
                break;

            default:
                break;
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        switch (name) {
            case 'entry.1546054863':
                setValues({
                    ...values,
                    username: value,
                })
                break;

            case 'entry.1255229173':
                setValues({
                    ...values,
                    email: value,
                })
                break;

            case 'entry.1116781346':
                setValues({
                    ...values,
                    details: value,
                })
                break;

            default:
                break;
        }

        validate(name, value);
    }

    const reset = () => {
        setErrors({});
        setValues({...initialState})
    }

    return {
        values,
        reset,
        errors,
        handleChange
    }
}


export default useForm;