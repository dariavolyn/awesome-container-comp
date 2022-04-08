import React from 'react';
import useForm from '../util/useForm';

export default function Form(props) {
    const { values, errors, handleChange, reset } = useForm();

    function onClose() {
        props.handleFormClose();
        reset();
    }

    function handleSubmit(e) {
        onClose();
    }

    return (
        <div className={`${props.isFormOpen ? 'form_visible' : ''} form__wrapper `}>
            <iframe title='form__iframe' name='form__iframe' id='form__iframe' />
            <form
                target='form__iframe'
                className='form'
                method='POST'
                action='https://docs.google.com/forms/u/0/d/e/1FAIpQLScXkgQnRhxa_EErZvoe6nejn1_9BjmiTFuGxwNv98T5wmxS9g/formResponse'
            >
                <button type='button' className='button form__close' onClick={onClose}>+</button>
                <h2 className='form__title'>Leave your contacts and request and our manager will reach out to you to establish our future partnership!</h2>

                <label className={`form__label ${errors.username ? 'form__label_invisible' : ''}`}>Personal or company name *</label>
                {errors.username && <span className='form__label form__label-error'>{errors.username}</span>}
                <input className={`form__input form__input_type_name ${errors.username ? 'form__input-error' : ''}`}
                    value={values.username}
                    type='text'
                    id='username'
                    name='entry.1546054863'
                    onChange={handleChange}
                ></input>

                <label className={`form__label ${errors.email ? 'form__label_invisible' : ''}`}>Email *</label>
                {errors.email && <span className='form__label form__label-error'>{errors.email}</span>}
                <input className={`form__input form__input_type_email ${errors.email ? 'form__input-error' : ''}`}
                    value={values.email}
                    type='text'
                    id='email'
                    name='entry.1255229173'
                    onChange={handleChange}
                ></input>

                <label className='form__label'>Your request / interest</label>
                <input className='form__input form__input_type_details'
                    value={values.details}
                    type='text'
                    id='details'
                    name='entry.1116781346'
                    onChange={handleChange}
                ></input>

                <button
                    className={`button form__button ${errors.email || errors.username || values.username === undefined || values.email === undefined
                        ? 'form__button_disabled' : ''}`}
                    onClick={handleSubmit}
                    type='submit'
                >Send</button>
            </form>
        </div>
    )
}