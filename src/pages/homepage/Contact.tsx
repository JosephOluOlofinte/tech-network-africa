// import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../components';
import { useState } from 'react';

const Schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number is too short'),
  whatsapp: z.string().min(7, 'WhatsApp number is too short'),
  bestWay: z.string().min(1, 'Olease select an option'),
  message: z.string().min(5, 'Please tell us more'),
});

type FormData = z.infer<typeof Schema>;

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    mode: 'onChange'
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSuccessMessage("")

    try {
      const res = await fetch('/api/v1/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (!res.ok) throw new Error("Something went wrong")
      
      setSuccessMessage("Your message has been sent")
      reset()
    } catch (error) {
      console.error(error)
      setSuccessMessage("Failed to send message. Please try again")
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <section className='bg-home-contact min-h-[calc(100vh-100px)] flex justify-center'>
      <div className='inner-container grid grid-cols-[auto_auto] justify-between'>
        <div className='bg-red-200 w-[50%]'>n</div>
        <div className='justify-self-end py-[80px] px-[120px]'>
          <div className='grid gap-[15px] justify-center text-center'>
            <header>
              <h2 className='text-[30px] leading-[38px] font-bold text-[#0B0D12]'>
                Contact us to know more
              </h2>
            </header>
            <p className='text-xl leading-[30px] text-brandDeepGray500'>
              Kindly share the following details for us to get in touch with
              you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='max-w-lg mx-auto space-y-4 p-4 border rounded-lg shadow'
          >
            {/* Full name */}
            <div>
              <label className='block mb-1'>Full Name</label>
              <input
                {...register('fullName')}
                className='w-full border p-2 rounded'
                placeholder='Enter your full name'
              />
              {errors.fullName && (
                <p className='text-red-500 text-sm'>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className='block mb-1'>Email</label>
              <input
                type='email'
                {...register('email')}
                className='w-full border p-2 rounded'
                placeholder='Enter your email address'
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className='block mb-1'>Email</label>
              <input
                {...register('phone')}
                className='w-full border p-2 rounded'
                placeholder='Enter your Phone number'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm'>{errors.phone.message}</p>
              )}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className='block mb-1'>Email</label>
              <input
                {...register('whatsapp')}
                className='w-full border p-2 rounded'
                placeholder='Enter your WhatsApp number'
              />
              {errors.whatsapp && (
                <p className='text-red-500 text-sm'>
                  {errors.whatsapp.message}
                </p>
              )}
            </div>

            {/* Best way to reach you */}
            <div>
              <label className='block mb-1'>Best Way to Reach You</label>
              <select
                {...register('bestWay')}
                className='w-full border p-2 rounded'
              >
                <option value='phone'>Phone call</option>
                <option value='whatsapp'>WhatsApp</option>
                <option value='email'>Email</option>
              </select>
              {errors.bestWay && (
                <p className='text-red-500 text-sm'>{errors.bestWay.message}</p>
              )}
            </div>

            {/* How can we help */}
            <div>
              <label className='block mb-1'>How Can We Help?</label>
              <textarea
                {...register('message')}
                className='w-full border p-2 rounded'
                rows={4}
                placeholder='Tell us how we can help. Include as much information as possible.'
              />
              {errors.message && (
                <p className='text-red-500 text-sm'>{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type='submit'
              variant='primary'
              disabled={isSubmitting}
              text='Submit'
              className={`w-full flex justify-center text-base font-medium ${isSubmitting ? 'Sending...': 'Submit'}`}
            />

            {/* Success / Error Message */}
            {successMessage && <p className='mt-2 text-center'>{successMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
