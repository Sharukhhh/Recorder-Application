import React, { useState } from 'react';
import {Formik , Field , Form , ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';

const Signup = () => {

  return (
    <>
    <Formik
    initialValues={{name : '' , email : '' , password : ''}}
    validationSchema={
      Yup.object({
        name : Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

        email : Yup.string()
        .email('Invalid Email Format')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),

        password : Yup.string()
        .max(10, 'Must be 15 characters or less')
        .required('Required')
        .matches(
          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          'Must contain at least one uppercase letter, one number, and one special character'
        ),
      })
    }
    onSubmit={
      (values , {setSubmitting}) => {
        setTimeout(() => {
          toast(JSON.stringify(values , null , 2));
          setSubmitting(false)
        }, 400);
      }
    }
    >
      <Form className='mx-auto my-16 max-w-md p-6 bg-slate-300 bg-opacity-25 shadow-md shadow-blue-400 rounded-md'>
        <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>User Name</label>
        <Field type="text" placeholder='Enter Your name' name='name' 
          className='w-full border p-2 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        />
        <ErrorMessage name='name' className='text-red-500'/>

        <label htmlFor="email" className='block text-gray-700 text-sm font-bold mt-4 mb-2'>Email</label>
        <Field type="email" placeholder='Enter Email ID' name='email' 
          className='w-full border p-2 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        />
        <ErrorMessage name='email' className='text-red-500'/>

        <label htmlFor="password" className='block text-gray-700 text-sm font-bold mt-4 mb-2'>Password</label>
        <Field type="password" placeholder='Enter Password' name='password' 
          className='w-full border p-2 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        />
        <ErrorMessage name='password' className='text-red-500'/>

        <button type='submit' className='w-full mt-8 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'>
          Sign Up
        </button>

        <p className='mt-4 text-gray-700 text-sm'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-500 hover:underline'>
              Login here
            </Link>
        </p>
      </Form>
    </Formik>
    </>

  )
}

export default Signup