import React from 'react'
import { Form } from 'formik';
import './InputForm.css'
export default (props) => {
    return (
        <Form className={props.ClassName}>
            {props.children}
        </Form>
    )
}
