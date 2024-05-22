import '../Style/main.css';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik"; 
import * as Yup from "yup"; 


const SignUpSchema = Yup.object().shape({ 
  firstName: Yup.string().required("This field is required"), 
  lastName: Yup.string().required("This field is required"), 
  dateOfBirth: Yup.string().required("This field is required")
}); 

export const FormikForm = () => ( 
    //const [submittedData, setSubmittedData] = useState(null);

  <div className="formik-form"> 
    <h2>Create Employee</h2> 
    <Formik 
      initialValues={{ 
        firstName: "", 
        lastName: "", 
      }} 
      validationSchema={SignUpSchema} 
      onSubmit={(values) => { 
        setTimeout(() => { 
          alert(JSON.stringify(values, null, 2)); 
        }, 500); 
      }} 
      render={({ errors, touched }) => ( 
        <Form> 
          <label htmlFor="firstName">First name</label> 
          <div> 
            <Field name="firstName" placeholder="First name" type="text" aria-label="Enter your first name" /> 
            <ErrorMessage 
              name="firstName" 
              component="div" 
              className="error-message" 
            /> 
          </div> 

          <label htmlFor="lastName">Last name</label> 
          <div> 
            <Field name="lastName" placeholder="Last name" type="text" aria-label="Enter your last name" /> 
            <ErrorMessage name="lastName"> 
              {(msg) => <div className="error-message">{msg}</div>} 
            </ErrorMessage> 
          </div> 
          <button type="submit">Submit</button> 
        </Form> 
      )} 
    /> 
  </div> 
); 