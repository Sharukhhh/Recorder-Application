import React from 'react';
import {Formik , Field , Form , ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { login } from '../calls/authApi';
import {useDispatch} from 'react-redux';
import { getUserData } from '../Redux/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Formik
          initialValues={{ email : '' , password : ''}}
          validationSchema={
            Yup.object({      
              email : Yup.string()
              .email('Invalid Email Format')
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
            async (values , {setSubmitting}) => {
              try {
                const response = await login(values);
                if(response){
                  dispatch(getUserData(response.user))
                  navigate('/home');
                  toast.success(response.message);
                }
              } catch (error) {
                toast.error(error.response.data.message);
              } finally {
                setSubmitting(false);
              }
            }
          }
      >
        <Form className='mx-auto my-16 max-w-md p-6 bg-slate-300 bg-opacity-25 shadow-md shadow-blue-400 rounded-md'>

          <label htmlFor="email" className='block text-gray-700 text-sm font-bold mt-4 mb-2'>Email</label>
          <Field type="email" placeholder='Enter Email ID' name='email' 
            className='w-full border p-2 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          />
          <ErrorMessage name='email'/>

          <label htmlFor="password" className='block text-gray-700 text-sm font-bold mt-4 mb-2'>Password</label>
          <Field type="password" placeholder='Enter Password' name='password' 
            className='w-full border p-2 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          />
          <ErrorMessage name='password'/>

          <button type='submit' className='w-full mt-8 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'>
            Log In
          </button>

          <p className='mt-4 text-gray-700 text-sm'>
            Create An Account?{' '}
            <Link to='/signup' className='text-blue-500 hover:underline'>
              Signup
            </Link>
          </p>
        </Form>
      </Formik>
    </>
  )
}

export default Login