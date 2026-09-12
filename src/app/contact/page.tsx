'use client'

import { useState, type FormEvent } from 'react'
import { siteConfig } from '../../data/site'

interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  budgetRange: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us a little about your project.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const updateField =
    (field: keyof ContactFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    // NOTE: No backend is connected yet. Replace this block with a real
    // form provider (Formspree, Web3Forms, EmailJS, etc.) when available.
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section className="page-section" aria-labelledby="contact-success-heading">
        <div className="container page-section__inner">
          <p className="page-section__eyebrow">Contact</p>
          <h1 id="contact-success-heading" className="page-section__title">
            Thanks — we received your message.
          </h1>
          <p className="page-section__lead">
            We&apos;ll get back to you shortly. In the meantime, feel free
            to book a time directly on our scheduling page.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section" aria-labelledby="contact-heading">
      <div className="container page-section__inner">
        <p className="page-section__eyebrow">Contact</p>
        <h1 id="contact-heading" className="page-section__title">
          Tell us about your project.
        </h1>
        <p className="page-section__lead">
          Share a few details and we&apos;ll follow up
          {siteConfig.contactEmail ? ` at ${siteConfig.contactEmail}` : ''}.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <label className="contact-form__field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={updateField('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'error-name' : undefined}
              />
              {errors.name && (
                <span id="error-name" className="contact-form__error">
                  {errors.name}
                </span>
              )}
            </label>

            <label className="contact-form__field">
              <span>Company</span>
              <input
                type="text"
                name="company"
                value={values.company}
                onChange={updateField('company')}
              />
            </label>
          </div>

          <div className="contact-form__row">
            <label className="contact-form__field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={updateField('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'error-email' : undefined}
              />
              {errors.email && (
                <span id="error-email" className="contact-form__error">
                  {errors.email}
                </span>
              )}
            </label>

            <label className="contact-form__field">
              <span>Phone (optional)</span>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={updateField('phone')}
              />
            </label>
          </div>

          <div className="contact-form__row">
            <label className="contact-form__field">
              <span>Project type</span>
              <select
                name="projectType"
                value={values.projectType}
                onChange={updateField('projectType')}
              >
                <option value="">Select an option</option>
                <option value="business">Business Website</option>
                <option value="ecommerce">Ecommerce</option>
                <option value="webapp">Custom Web Application</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="contact-form__field">
              <span>Budget range</span>
              <select
                name="budgetRange"
                value={values.budgetRange}
                onChange={updateField('budgetRange')}
              >
                <option value="">Select an option</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 – $15,000</option>
                <option value="15k-plus">$15,000+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </label>
          </div>

          <label className="contact-form__field contact-form__field--full">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              value={values.message}
              onChange={updateField('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'error-message' : undefined}
            />
            {errors.message && (
              <span id="error-message" className="contact-form__error">
                {errors.message}
              </span>
            )}
          </label>

          <button type="submit" className="btn btn--primary contact-form__submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
