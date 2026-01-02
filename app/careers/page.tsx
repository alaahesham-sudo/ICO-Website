"use client";

import { useEffect, useState } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    title: "Competitive Compensation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Growth Opportunities",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Professional Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Supportive Team",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function Careers() {
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

    if (!formData.get('fullName') || (formData.get('fullName') as string).trim() === '') {
      newErrors.fullName = 'Full name is required';
    }

    const phone = formData.get('phone') as string;
    if (!phone || phone.trim() === '') {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneDigits = phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
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

    if (!formData.get('position') || (formData.get('position') as string).trim() === '') {
      newErrors.position = 'Position is required';
    }

    if (!formData.get('experience') || formData.get('experience') === '') {
      newErrors.experience = 'Please select your experience level';
    }

    if (!formData.get('coverLetter') || (formData.get('coverLetter') as string).trim() === '') {
      newErrors.coverLetter = 'Cover letter is required';
    }

    const resumeLink = formData.get('resumeLink') as string;
    if (!resumeLink || resumeLink.trim() === '') {
      newErrors.resumeLink = 'Please provide a link to your resume';
    } else {
      // Basic URL validation
      try {
        new URL(resumeLink);
      } catch {
        newErrors.resumeLink = 'Please enter a valid URL (e.g., https://drive.google.com/...)';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent double submission
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
      // Scroll to first error
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
    const originalText = submitButton?.textContent || 'Submit Application';

    try {
      const resumeLink = formData.get('resumeLink') as string;
      
      const response = await fetch('/api/submit-career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.get('fullName'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          position: formData.get('position'),
          experience: formData.get('experience'),
          coverLetter: formData.get('coverLetter'),
          resumeLink: resumeLink,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We will contact you soon.' });
        form.reset();
        setErrors({});
        // Scroll to success message
        setTimeout(() => {
          const successElement = document.getElementById('submit-status');
          if (successElement) {
            successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        // Handle API validation errors
        if (result.errors) {
          setErrors(result.errors);
          setSubmitStatus({ type: 'error', message: result.message || 'Please fix the errors below.' });
          // Scroll to first error
          setTimeout(() => {
            const firstErrorName = Object.keys(result.errors)[0];
            const firstErrorField = form.querySelector(`[name="${firstErrorName}"]`) as HTMLElement;
            if (firstErrorField) {
              firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
              firstErrorField.focus();
            }
          }, 100);
        } else {
          setSubmitStatus({ type: 'error', message: result.message || 'Failed to submit application. Please try again.' });
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
                  We're Hiring!
                </span>
              </h1>
              <h2 className="mb-4 text-3xl font-bold text-gray-50">Join Our Family</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300 font-medium leading-relaxed">
                If you're interested in one of our open positions at ICO, start by applying here and sharing your resume link.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-12 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
                  data-aos="zoom-y-out"
                  data-aos-delay={index * 50}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/25 to-cyan-500/25 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-50 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 to-blue-950/20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center mb-12" data-aos="zoom-y-out">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Apply Now
                </span>
              </h2>
              <p className="text-gray-400 font-medium">Start your journey with us today</p>
            </div>
            
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
            
            <form 
              className="space-y-6 rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl p-8 md:p-10"
              data-aos="fade-up"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-100">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                    errors.fullName 
                      ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                      : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                  }`}
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && (
                  <p className="text-sm text-red-400 font-medium">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-100">
                  Phone Number <span className="text-cyan-400">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                    errors.phone 
                      ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                      : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                  }`}
                  placeholder="Enter your phone number"
                  required
                />
                {errors.phone && (
                  <p className="text-sm text-red-400 font-medium">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-100">
                  Email <span className="text-cyan-400">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                      : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                  }`}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-400 font-medium">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-100">
                  Desired Position / Job Role <span className="text-cyan-400">*</span>
                </label>
                <input 
                  type="text" 
                  name="position"
                  className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                    errors.position 
                      ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                      : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                  }`}
                  placeholder="e.g., Telemarketing Agent, Team Leader, Customer Support"
                  required
                />
                {errors.position && (
                  <p className="text-sm text-red-400 font-medium">{errors.position}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-100">
                  Years of Experience <span className="text-cyan-400">*</span>
                </label>
                <select 
                  name="experience"
                  className={`w-full rounded-xl border px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                    errors.experience 
                      ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                      : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                  }`}
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
                {errors.experience && (
                  <p className="text-sm text-red-400 font-medium">{errors.experience}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-100">
                  Cover Letter / Message <span className="text-cyan-400">*</span>
                  <span className="text-xs font-normal text-gray-400 ml-2">(Tell us about yourself and why you're interested)</span>
                </label>
                <textarea 
                  name="coverLetter"
                  rows={6} 
                  className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 resize-none ${
                    errors.coverLetter 
                      ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                      : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                  }`}
                  placeholder="Tell us about your background, skills, and why you'd be a great fit for our team"
                  required
                ></textarea>
                {errors.coverLetter && (
                  <p className="text-sm text-red-400 font-medium">{errors.coverLetter}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-100">
                  Resume Link <span className="text-cyan-400">*</span>
                  <span className="text-xs font-normal text-gray-400 ml-2">(Share a link to your resume from Google Drive, Dropbox, etc.)</span>
                </label>
                <input 
                  type="url" 
                  name="resumeLink"
                  className={`w-full rounded-xl border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 text-base font-medium transition-all duration-300 ${
                    errors.resumeLink 
                      ? 'border-red-500 bg-red-500/10 focus:ring-red-500/50' 
                      : 'border-slate-700 bg-slate-900/50 focus:border-cyan-500 focus:ring-cyan-500/50'
                  }`}
                  placeholder="https://drive.google.com/file/d/... or https://dropbox.com/..."
                  required
                />
                {errors.resumeLink && (
                  <p className="text-sm text-red-400 font-medium">{errors.resumeLink}</p>
                )}
                <p className="text-xs text-gray-500 font-medium">Share your resume via Google Drive, Dropbox, OneDrive, or any file sharing service</p>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-xs text-gray-500 font-medium mb-6">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}