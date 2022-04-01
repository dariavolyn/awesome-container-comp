import React from 'react';
import useForm from '../util/useForm';

export default function Form(props) {
    const { values, errors, handleChange, reset } = useForm();

    function onClose() {
        props.handleFormClose();
        reset();
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values)
    }

    return (
        <div className={`${props.isFormOpen ? 'form_visible' : ''} form__wrapper `}>
            <form className='form'
            method='POST'
            action='https://docs.google.com/forms/d/1a9vXoIEaAlvbZvwaHNcmtAXUKMJcWsPQppI_HncTTIw/formResponse'
            >
                <button type='button' className='button form__close' onClick={onClose}>+</button>
                <h2 className='form__title'>Leave your contacts and request, and our manager will reach out to you to establish our futher parntership!</h2>

                <label className={`form__label ${errors.username ? 'form__label_invisible' : ''}`}>Personal or company name *</label>
                {errors.username && <span className='form__label form__label-error'>{errors.username}</span>}
                <input className={`form__input form__input_type_name ${errors.username ? 'form__input-error' : ''}`}
                    type='text'
                    id='username'
                    name='entry.1546054863'
                    onChange={handleChange}
                ></input>

                <label className={`form__label ${errors.email ? 'form__label_invisible' : ''}`}>Email *</label>
                {errors.email && <span className='form__label form__label-error'>{errors.email}</span>}
                <input className={`form__input form__input_type_email ${errors.email ? 'form__input-error' : ''}`}
                    type='text'
                    id='email'
                    name='entry.1255229173'
                    onChange={handleChange}
                ></input>

                <label className='form__label'>Your request / interest</label>
                <textarea className='form__input form__input_type_details'
                    type='text'
                    id='details'
                    name='entry.1116781346'
                ></textarea>

                <button className={`button form__button ${errors.email || errors.username ? 'form__button_disabled' : ''}`}
                    disabled={errors.email || errors.username || !values.email || !values.username}
                    type='submit'
                    onClick={handleSubmit}
                >Send</button>
            </form>
        </div>
    )
}