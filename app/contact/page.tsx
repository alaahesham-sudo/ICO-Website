"use client";

import { useEffect, useState } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const contactMethods = [
  {
    title: "Address",
    value: "30 N Gould St Ste 32964, Sheridan, Wyoming 82801",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    link: "#",
    isFlag: true
  },
  {
    title: "Email",
    value: "Info@incalloutsourcing.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    link: "mailto:Info@incalloutsourcing.com"
  },
  {
    title: "Phone",
    value: "1(209)-251-4546",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    link: "tel:12092514546"
  },
  {
    title: "Business Hours",
    value: "09:00 am – 05:00 pm",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "#"
  }
];

const serviceOptions = [
  "Sales & Revenue Generation Services",
  "Lead Generation & Data Services",
  "Healthcare & DME Specialized Services",
  "Customer Support & Experience Management",
  "Remote Workforce & Outsourcing Solutions",
  "Business Process Outsourcing (BPO)",
  "Campaign Outsourcing",
  "General Inquiry",
  "Other"
];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  const validateForm = (formData: FormData): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.get('organizationName') || (formData.get('organizationName') as string).trim() === '') {
      newErrors.organizationName = 'Organization name is required';
    }

    if (!formData.get('reason') || (formData.get('reason') as string).trim() === '') {
      newErrors.reason = 'Reason for inquiry is required';
    }

    const contactNumber = formData.get('contactNumber') as string;
    if (!contactNumber || contactNumber.trim() === '') {
      newErrors.contactNumber = 'Contact number is required';
    } else {
      const phoneDigits = contactNumber.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.contactNumber = 'Please enter a valid contact number (at least 10 digits)';
      }
    }

    const email = formData.get('email') as string;
    if (!email || email.trim() === '') {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.get('message') || (formData.get('message') as string).trim() === '') {
      newErrors.message = 'Message is required';
    }

    // Validate attachment link if provided (optional field)
    const attachmentLink = formData.get('attachmentLink') as string;
    if (attachmentLink && attachmentLink.trim() !== '') {
      try {
        new URL(attachmentLink);
      } catch {
        newErrors.attachmentLink = 'Please enter a valid URL';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) {
      return;
    }
    
    setSubmitStatus({ type: null, message: '' });
    setErrors({});
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields correctly.' });
      setTimeout(() => {
        const firstErrorName = Object.keys(validationErrors)[0];
        const firstErrorField = form.querySelector(`[name="${firstErrorName}"]`) as HTMLElement;
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstErrorField.focus();
        }
      }, 100);
      return;
    }

    setIsSubmitting(true);
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton?.textContent || 'Send Message';

    try {
      const attachmentLink = formData.get('attachmentLink') as string;
      
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organizationName: formData.get('organizationName'),
          reason: formData.get('reason'),
          contactNumber: formData.get('contactNumber'),
          email: formData.get('email'),
          message: formData.get('message'),
          attachments: attachmentLink || '',
          newsletter: formData.get('newsletter') === 'on',
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        form.reset();
        setErrors({});
        setTimeout(() => {
          const successElement = document.getElementById('submit-status');
          if (successElement) {
            successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        if (result.errors) {
          setErrors(result.errors);
          setSubmitStatus({ type: 'error', message: result.message || 'Please fix the errors below.' });
          setTimeout(() => {
            const firstErrorName = Object.keys(result.errors)[0];
            const firstErrorField = form.querySelector(`[name="${firstErrorName}"]`) as HTMLElement;
            if (firstErrorField) {
              firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
              firstErrorField.focus();
            }
          }, 100);
        } else {
          setSubmitStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
        }
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
      if (submitButton) {
        submitButton.textContent = originalText;
      }
    }
  };

  return (
    <>
      <Header />
      <main className="grow">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 via-indigo-950 to-slate-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full">
            <div className="text-center" data-aos="zoom-y-out">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Let's Embark
                </span>
              </h1>
              <p className="mb-4 text-2xl font-medium text-gray-100">
                "Connect with Us and Let's Transform Your Business Together!"
              </p>
              <p className="text-lg font-semibold italic text-cyan-400">
                "Your Efforts Are Always Appreciated"
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Contact Information Card */}
              <div 
                className="space-y-8 rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl p-8 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-500"
                data-aos="fade-right"
              >
                <div>
                  <h2 className="mb-2 text-3xl font-bold text-gray-50">In-Call Outsourcing LLC</h2>
                  <p className="text-gray-400 font-medium">Get in touch with us</p>
                </div>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/25 to-cyan-500/25 border border-blue-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {method.isFlag ? (
                          <svg width="24" height="16" viewBox="0 0 20 14" className="flex-shrink-0">
                            <rect width="20" height="14" fill="#B22234"/>
                            <g fill="#fff">
                              <rect width="20" height="1.08"/>
                              <rect y="2.16" width="20" height="1.08"/>
                              <rect y="4.32" width="20" height="1.08"/>
                              <rect y="6.48" width="20" height="1.08"/>
                              <rect y="8.64" width="20" height="1.08"/>
                              <rect y="10.8" width="20" height="1.08"/>
                              <rect y="12.96" width="20" height="1.08"/>
                            </g>
                            <rect width="8" height="7.56" fill="#3C3B6E"/>
                            <g fill="#fff" fontSize="0.5" fontFamily="serif">
                              {[...Array(50)].map((_, i) => {
                                const row = Math.floor(i / 6);
                                const col = i % 6;
                                return <circle key={i} cx={0.6 + col * 1.17} cy={0.6 + row * 0.97} r="0.15"/>;
                              })}
                            </g>
                          </svg>
                        ) : (
                          method.icon
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-sm font-bold text-gray-400 uppercase tracking-wider">
                          {method.title}
                        </h3>
                        {method.link && method.link !== "#" ? (
                          <a 
                            href={method.link}
                            className="text-base text-cyan-400 hover:text-teal-400 transition-colors font-semibold block"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-base text-gray-300 font-medium">
                            {method.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://www.google.com/maps/place/30+N+Gould+St+Ste+32964,+Sheridan,+Wyoming+82801/@44.7977886,-106.9545719,3a,75y,257.9h,90t/data=!3m4!1e1!3m2!1saAKITXz8U9Hsh6XJm5JWPw!2e0!4m2!3m1!1s0x5335fabc2a66677f:0x8f85bd068d1afb8a?sa=X&ved=1t:3780&ictx=111" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full border border-slate-700 bg-slate-800/50 text-gray-100 shadow-xl hover:bg-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105 transition-all duration-300 mt-6 px-6 py-3 rounded-xl font-semibold"
                >
                  Get Directions
                </a>
              </div>
              
              {/* Contact Form Card */}
              <div 
                className="rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl p-8 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-500"
                data-aos="fade-left"
              >
                <h3 className="mb-6 text-2xl font-bold text-gray-50">Drop us a line!</h3>
                
                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div 
                    id="submit-status"
                    className={`mb-6 rounded-xl p-5 border-2 shadow-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/70 text-green-300' 
                        : 'bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-500/70 text-red-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {submitStatus.type === 'success' ? (
                        <svg className="w-7 h-7 flex-shrink-0 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-7 h-7 flex-shrink-0 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <div className="flex-1">
                        <p className="font-bold text-base leading-relaxed">{submitStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-100">
                      Organization Name <span className="text-cyan-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="organizationName"
                      placeholder="Enter organization name" 
                      className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                        errors.organizationName 
                          ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                          : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                      }`}
                      required
                    />
                    {errors.organizationName && (
                      <p className="text-sm text-red-400 font-medium">{errors.organizationName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-100">
                      Reason for Inquiry <span className="text-cyan-400">*</span>
                    </label>
                    <select 
                      name="reason"
                      className={`w-full rounded-xl border px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                        errors.reason 
                          ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                          : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                      }`}
                      required
                    >
                      <option value="">Select a service or inquiry type</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.reason && (
                      <p className="text-sm text-red-400 font-medium">{errors.reason}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-100">
                      Organization Contact Number <span className="text-cyan-400">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="contactNumber"
                      placeholder="Enter contact number" 
                      className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                        errors.contactNumber 
                          ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                          : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                      }`}
                      required
                    />
                    {errors.contactNumber && (
                      <p className="text-sm text-red-400 font-medium">{errors.contactNumber}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-100">
                      Email <span className="text-cyan-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email" 
                      className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                          : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-100">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea 
                      name="message"
                      placeholder="Tell us how we can help" 
                      rows={6} 
                      className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                          : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                      }`}
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="text-sm text-red-400 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-100">
                      Attachments Link
                      <span className="text-xs font-normal text-gray-400 ml-2">(Optional - Share files via Google Drive, Dropbox, etc.)</span>
                    </label>
                    <input 
                      type="url" 
                      name="attachmentLink"
                      placeholder="https://drive.google.com/folder/... or https://dropbox.com/..."
                      className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                        errors.attachmentLink 
                          ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                          : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                      }`}
                    />
                    {errors.attachmentLink && (
                      <p className="text-sm text-red-400 font-medium">{errors.attachmentLink}</p>
                    )}
                    <p className="text-xs text-gray-500 font-medium">Share documents, images, or files via Google Drive, Dropbox, OneDrive, or any file sharing service</p>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      name="newsletter"
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900/50 text-cyan-600 focus:ring-cyan-500 cursor-pointer" 
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-200 font-medium cursor-pointer">
                      Sign up for our email list for updates, promotions, and more.
                    </label>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-xs text-gray-500 font-medium mb-6">
                      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </p>
                    <div className="flex gap-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn flex-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <button 
                        type="button" 
                        onClick={() => {
                          const form = document.querySelector('form') as HTMLFormElement;
                          form?.reset();
                          setErrors({});
                          setSubmitStatus({ type: null, message: '' });
                        }}
                        className="btn border border-slate-700 bg-slate-800/50 text-gray-100 shadow-xl hover:bg-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105 transition-all duration-300 py-4 px-6 rounded-xl font-semibold"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}