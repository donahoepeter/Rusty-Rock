'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Settings,
  BarChart3,
  Palette,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: "Professional Websites",
      description: "Modern, responsive websites that look great on all devices.",
      features: ["Mobile-responsive design", "Fast loading speeds", "SEO-optimized", "Content management system"],
      popular: true
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-red-600" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management.",
      features: ["Secure payment processing", "Inventory management", "Order tracking", "Customer accounts"],
      popular: false
    },
    {
      icon: <Search className="w-8 h-8 text-red-600" />,
      title: "SEO Optimization",
      description: "Get found on Google with our comprehensive SEO services.",
      features: ["Keyword research", "On-page optimization", "Local SEO", "Performance monitoring"],
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-600" />,
      title: "Mobile Apps",
      description: "Custom mobile applications for iOS and Android platforms.",
      features: ["Cross-platform development", "Native performance", "App store optimization", "Push notifications"],
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-red-600" />,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly.",
      features: ["Security updates", "Content updates", "Backup management", "Performance monitoring"],
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Analytics & Insights",
      description: "Understand your website performance and customer behavior.",
      features: ["Traffic analysis", "Conversion tracking", "User behavior insights", "Monthly reports"],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We start with a free consultation to understand your business needs and goals."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "We develop a customized strategy and project timeline that fits your budget."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Our team creates your website using the latest technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before we launch your site."
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "We provide continued support and maintenance to keep your site running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              Our <span className="text-red-600">Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive web solutions designed specifically for local businesses.
              From simple websites to complex e-commerce platforms, we&apos;ve got you covered.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 gap-2 shadow-lg hover:shadow-xl"
            >
              Get Started Today <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Professional services tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 ${
                  service.popular ? 'bg-red-100 border-2 border-red-200' : 'bg-white'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-200">A streamlined approach that delivers results</p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row items-center gap-8"
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className={`flex-shrink-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-px h-16 bg-red-200 lg:w-16 lg:h-px mx-auto lg:mx-0"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600">Built for local businesses, powered by modern technology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-red-600" />,
                title: "Secure & Reliable",
                description: "Enterprise-grade security and 99.9% uptime guarantee"
              },
              {
                icon: <Palette className="w-8 h-8 text-red-600" />,
                title: "Custom Design",
                description: "Unique designs that reflect your brand identity"
              },
              {
                icon: <Settings className="w-8 h-8 text-red-600" />,
                title: "Easy to Manage",
                description: "User-friendly content management systems"
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-red-600" />,
                title: "Data-Driven",
                description: "Built-in analytics to track your success"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-900/20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-red-100 mb-8">
              Let&apos;s discuss how our services can help grow your business.
              Free consultation with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}