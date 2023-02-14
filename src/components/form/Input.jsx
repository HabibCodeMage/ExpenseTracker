import React from 'react'
import { Field } from 'formik';
export default ({ label, name, errors, touched, type, min, max }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="col-6 col-form-label">{label}</label>
            <div className="">
                <Field className="form-control  "
                    type={type} name={name} min={min} max={max} />
                {errors && touched ? (
                    <div className="form-text ">{errors}</div>
                ) : null}
            </div>



        </div>
    )
}