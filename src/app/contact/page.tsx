'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, DollarSign, Users } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    projectType: '',
    budget: '',
    timeline: '',
    region: '',
    description: '',
    hearAbout: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or email us directly at peter@lowlightdigital.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Thank You!</h1>
            <p className="text-xl text-gray-700 mb-8">
              {`We've received your consultation request. One of our founders will reach out to you within 24 hours to schedule your free consultation.`}
            </p>
            <div className="space-y-4 text-left bg-white p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</div>
                  <p className="text-gray-700">{`We'll contact you within 24 hours to schedule your consultation`}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</div>
                  <p className="text-gray-700">{`During the call, we'll discuss your project in detail`}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</div>
                  <p className="text-gray-700">{`You'll receive a custom proposal with transparent pricing`}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              <span className="text-red-600">Contact</span> Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              {`Let's discuss your project and create a custom solution that fits your budget and timeline. No pressure, no obligation - just honest advice from real experts.`}
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: <DollarSign className="w-6 h-6" />, text: "100% Free Consultation" },
                { icon: <Clock className="w-6 h-6" />, text: "24-Hour Response Time" },
                { icon: <Users className="w-6 h-6" />, text: "Direct Founder Contact" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-red-600">
                  {benefit.icon}
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-red-100">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl p-8 md:p-12 border border-red-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tell Us About Your Project</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-600 focus:border-red-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-600"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-600 focus:border-red-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-600 focus:border-red-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-600"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-600 focus:border-red-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-600"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Website (if any)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-200 focus:border-red-500 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-300"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-600 focus:border-red-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-600"
                  >
                    <option value="">Select project type</option>
                    <option value="new-website">New Website</option>
                    <option value="website-redesign">Website Redesign</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="seo-services">SEO Services</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-600 focus:border-red-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-600"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-2k">Under $2,000</option>
                    <option value="2k-5k">$2,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-20k">$10,000 - $20,000</option>
                    <option value="20k-plus">$20,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Desired Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-600 focus:border-red-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-600"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush job)</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="flexible">{`I'm flexible`}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="region" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Location *
                  </label>
                  <select
                    id="region"
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-600 focus:border-red-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-600"
                  >
                    <option value="">Select your region</option>
                    <option value="dmv">DC Metro Area (DC/MD/VA)</option>
                    <option value="new-england">New England</option>
                    <option value="other-us">Other US Location</option>
                    <option value="international">International</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-200 focus:border-red-500 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-300 resize-none"
                  placeholder="Please describe your project goals, target audience, key features needed, and any specific requirements or challenges you're facing."
                />
              </div>

              <div className="mb-8">
                <label htmlFor="hearAbout" className="block text-sm font-semibold text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-200 focus:border-red-500 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:border-red-300"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Referral from friend/colleague</option>
                  <option value="social-media">Social Media</option>
                  <option value="advertising">Online Advertising</option>
                  <option value="networking">Networking Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-600 hover:to-red-700 disabled:opacity-50 text-white py-5 px-8 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Schedule Free Consultation
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-600 mt-4">
                By submitting this form, you agree to be contacted by Lowlight Digital about your project.
                We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Free Consultation?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8 text-red-600" />,
                  title: "Direct Founder Access",
                  description: "You'll speak directly with Thomas or Peter, not a sales rep."
                },
                {
                  icon: <Clock className="w-8 h-8 text-red-600" />,
                  title: "No Time Wasted",
                  description: "We'll quickly assess if we're a good fit for your project."
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-red-600" />,
                  title: "Transparent Pricing",
                  description: "Get honest, upfront pricing with no hidden fees."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${
                    index === 0 ? 'from-purple-500 to-purple-700' :
                    index === 1 ? 'from-blue-500 to-blue-700' :
                    'from-green-500 to-green-700'
                  } rounded-full mb-4 shadow-lg`}>
                    <Users className={`w-8 h-8 text-white ${index === 0 ? '' : 'hidden'}`} />
                    <Clock className={`w-8 h-8 text-white ${index === 1 ? '' : 'hidden'}`} />
                    <DollarSign className={`w-8 h-8 text-white ${index === 2 ? '' : 'hidden'}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}