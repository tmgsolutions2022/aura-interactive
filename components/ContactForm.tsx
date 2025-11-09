'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const ContactForm = () => {
  return (
    <section className='py-20 bg-gray-50 dark:bg-[#242424]' id='contact-form'>
      <div className='container mx-auto px-6 sm:px-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
            Get In Touch
          </h2>
          <p className='mt-2 text-gray-600 dark:text-gray-400'>
            We'd love to hear from you. Send us a message.
          </p>
        </div>
        <div className='max-w-2xl mx-auto'>
          <form
            action='https://formsubmit.co/5a6ac705d3785d7796804b3c97726bb6'
            id='contact-form'
            method='POST'
          >
            <input
              type='hidden'
              name='_autoresponse'
              value='Thank you for reaching out to Aura Interactive! We have received your message and will get back to you as soon as possible.'
            />
            {typeof window !== 'undefined' && (
              <input type='hidden' name='_next' value={window.location.href} />
            )}
            <div className='space-y-6'>
              <div>
                <Label className='block' htmlFor='name'>
                  Full Name
                </Label>
                <div className='mt-1'>
                  <Input id='name' name='name' required type='text' />
                </div>
              </div>
              <div>
                <Label className='block' htmlFor='email'>
                  Email Address
                </Label>
                <div className='mt-1'>
                  <Input id='email' name='email' required type='email' />
                </div>
              </div>
              <div>
                <Label className='block' htmlFor='message'>
                  Message
                </Label>
                <div className='mt-1'>
                  <Textarea id='message' name='message' required rows={4} />
                </div>
              </div>
              <div>
                <Button className='w-full' type='submit'>
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
