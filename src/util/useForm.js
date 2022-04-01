import React, { useState } from 'react';

const useForm = () => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        switch (name) {
            case 'username':
                if (value.length <= 0) {
                    setErrors({
                        ...errors,
                        username: 'Username * (this field is required)'
                    })
                } else {
                    setErrors({...errors, username: ''})
                }
                break;

            case 'email':
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
                    setErrors({...errors, email: ''})
                }
                break;

            default:
                break;
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        validate(name, value);

        setValues({
            ...values,
            [name]: value,
        })
    }

    const reset = () => {
        setValues({email: '', username: ''});
        setErrors({})
    }

    return {
        values,
        reset,
        errors,
        handleChange,
    }
}


export default useForm;