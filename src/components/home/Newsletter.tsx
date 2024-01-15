'use client'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()
  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    toast.success('subscribed successfully')
    reset()
  }
  return (
    <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', { required: 'Email is required' })}
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
          className='border-2 rounded-full rounded-r-none py-3 px-4 bg-gray-200 text-gray-800 outline-none placeholder-gray-500 focus:bg-gray-100 flex-1 p-2'
        />

        <button
          type='submit'
          disabled={isSubmitting}
          className='border-2 rounded-full rounded-l-none py-3 px-4 bg-gray-900 text-gray-100 font-semibold uppercase hover:bg-gray-800 disabled:bg-gray-500'
        >
          {isSubmitting ? 'Subscribing..' : 'Subscribe'}
        </button>
      </div>
      {errors.email && (
        <em className='text-red-500 text-sm'>{`**${errors.email.message}`}</em>
      )}
    </form>
  )
}
