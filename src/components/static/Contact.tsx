import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '../block';
import contactImg from '../../assets/images/contactImg.png';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSuccessMessage('');
    console.log(data);

    try {
      const res = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Something went wrong');

      setSuccessMessage('Your message has been sent');
      reset();
    } catch (error) {
      console.error(error);
      setSuccessMessage('Failed to send message. Please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='h-fit pt-12 flex justify-center'>
      <div className='inner-container max-laptop:max-w-[500px] grid laptop:grid-cols-[60%,_1fr] grid-rows-[min-content]'>
        <div className='hidden laptop:block'>
          <img
            src={contactImg}
            alt=''
            className='w-full h-auto max-h-[980px] -translate-x-[18%]'
          />
        </div>

        <div className='py-[70px] min-[1024px]:max-[1210px]:pt-[50px] min-[1340px]:max-[1440px]:pt-[100px] w-full'>

          <div className='w-full grid max-h-fit gap-10 min-[1024px]:max-[1210px]:gap-5'>

            <div className='grid gap-[12px] justify-center tablet:max-laptop:text-center'>
              <header>
                <h2 className='font-bold text-[#0B0D12] text-center'>
                  Contact us to know more
                </h2>
              </header>
              <p className='text-brandDeepGray500 max-w-[35ch] text-center'>
                Kindly share the following details for us to get in touch with
                you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='grid gap-8 min-[1070px]:max-[1150px]:gap-6 min-[1024px]:max-[1069px]:gap-4 max-h-fit'>
              {/* Full name */}
              <div>
                <label className='block mb-1'>Full name</label>
                <input
                  {...register('fullName')}
                  className='w-full border p-2 rounded border-gray-300'
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
                  className='w-full border p-2 rounded border-gray-300'
                  placeholder='Enter your email address'
                />
                {errors.email && (
                  <p className='text-red-500 text-sm'>{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className='block mb-1'>Phone number (call line)</label>
                <input
                  {...register('phone')}
                  className='w-full border border-gray-300 p-2 rounded'
                  placeholder='Enter your Phone number'
                />
                {errors.phone && (
                  <p className='text-red-500 text-sm'>{errors.phone.message}</p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className='block mb-1'>WhatsApp number (optional)</label>
                <input
                  {...register('whatsapp')}
                  className='w-full border border-gray-300 p-2 rounded'
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
                  className='form-select w-full border border-gray-300 p-2 rounded pr-12'>
                  <option
                    value='phone'
                    className='font-inter text-brandDeepGray700'>
                    Phone call
                  </option>
                  <option value='whatsapp' className='font-inter'>
                    WhatsApp
                  </option>
                  <option value='email' className='font-inter'>
                    Email
                  </option>
                </select>
                {errors.bestWay && (
                  <p className='text-red-500 text-sm'>
                    {errors.bestWay.message}
                  </p>
                )}
              </div>

              {/* How can we help */}
              <div>
                <label className='block mb-1'>How Can We Help?</label>
                <textarea
                  {...register('message')}
                  className='w-full border border-gray-300 p-2 rounded resize-none'
                  rows={4}
                  placeholder='Tell us how we can help. Include as much information as possible.'
                />
                {errors.message && (
                  <p className='text-red-500 text-sm'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type='submit'
                variant='primary'
                disabled={isSubmitting}
                text='Submit'
                className={`w-full flex justify-center text-base font-medium ${
                  isSubmitting ? 'Sending...' : 'Submit'
                }`}
              />

              {/* Success / Error Message */}
              {successMessage && (
                <p className='mt-2 text-center'>{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
