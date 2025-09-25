'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Shield, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-red-600">Rusty Rock</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re not just another web agency. We&apos;re local business owners who understand
              the challenges you face because we&apos;ve faced them ourselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded by Thomas Rust and Peter Donahoe, Rusty Rock was born from a simple
                  realization: local businesses deserve the same quality web presence as Fortune 500
                  companies, but at prices that make sense for small business budgets.
                </p>
                <p>
                  After years of watching talented local entrepreneurs struggle with outdated websites
                  or overpriced development services, we decided to bridge that gap. We combine
                  cutting-edge AI tools with old-fashioned customer service to deliver exceptional
                  results quickly and affordably.
                </p>
                <p>
                  Every website we build is a testament to our belief that your business deserves
                  to shine online, regardless of your budget or technical expertise.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To democratize professional web presence for local businesses by combining
                  cutting-edge technology with genuine care and transparent communication.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-red-600" />,
                title: "Trustworthy",
                description: "We do what we say we&apos;ll do, when we say we&apos;ll do it. No hidden fees, no surprises."
              },
              {
                icon: <Heart className="w-8 h-8 text-red-600" />,
                title: "Personal Touch",
                description: "You&apos;ll work directly with Thomas and Peter. We&apos;re not hiding behind account managers."
              },
              {
                icon: <Target className="w-8 h-8 text-red-600" />,
                title: "Results-Focused",
                description: "Beautiful websites are nice, but websites that drive business growth are better."
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-red-600" />,
                title: "Innovation",
                description: "We leverage the latest AI tools to deliver faster, more accurate results than traditional methods."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Local Businesses Choose Us</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">We Speak Your Language</h3>
                    <p className="text-gray-600">No tech jargon. We explain everything in plain English.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                    <p className="text-gray-600">Most projects completed within 1-2 weeks, not months.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Support</h3>
                    <p className="text-gray-600">Thomas covers New England, Peter covers the DMV area.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
                    <p className="text-gray-600">Quality doesn&apos;t have to break the bank. Fair, transparent pricing.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We don&apos;t disappear after launch. Ongoing support and maintenance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI-Enhanced Accuracy</h3>
                    <p className="text-gray-600">Cutting-edge tools ensure your site is perfect from day one.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work with Real People?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Stop dealing with faceless agencies. Work directly with Thomas and Peter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Meet the Team
              </Link>
              <Link
                href="/consultation"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}