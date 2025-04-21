import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demonstration purposes, we'll just log the data and show success message
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(
      infoRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6"
        >
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-7/12">
            <form 
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8"
            >
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Project Inquiry"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell me about your project..."
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 20,
                      message: 'Message should be at least 20 characters'
                    }
                  })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div 
            ref={infoRef}
            className="lg:w-5/12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    San Francisco, California, United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Email
                  </h4>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Phone
                  </h4>
                  <a 
                    href="tel:+11234567890" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Available For
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Full-time positions
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Contract work
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Freelance projects
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Technical consultations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;