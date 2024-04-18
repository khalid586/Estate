import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const Test = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    toast.success('Submitted successfully')
    console.log(data);
    // Handle form submission logic here
    reset();
    setTimeout(()=>{
        navigate('/');
    },2000)
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h1 className='text-center m-4 text-xl font-bold'>Your Information</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span className='text-red-500'>This field is required</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span className='text-red-500'>This field is required</span>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" {...register('message', { required: true })} rows="4" />
        {errors.message && <span className='text-red-500'>This field is required</span>}

        <div className='flex justify-center'>
            <button className='btn m-4' type="submit" >Submit</button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};
