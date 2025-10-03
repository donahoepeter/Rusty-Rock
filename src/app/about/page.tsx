'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Shield, Lightbulb, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const founders = [
    {
      name: "Peter Donahoe",
      role: "DC Metro Region Lead",
      image: "/peter-profile.jpeg",
      email: "peter@lowlightdigital.com"
    },
    {
      name: "Thomas Rust",
      role: "New England Region Lead",
      image: "/thomas-profile.jpeg",
      email: "thomas@lowlightdigital.com"
    }
  ];

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
              About <span className="text-red-600">Lowlight Digital</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {`We're not just another web agency. We're local business owners who understand the challenges you face because we've faced them ourselves.`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-red-100">
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
                  Founded by Thomas Rust and Peter Donahoe, Lowlight Digital was born from a simple
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
              className="bg-gradient-to-br from-red-100 to-red-100 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  We empower local businesses with affordable, high-performing websites that build trust, drive growth, and bring big-agency results without the big-agency cost.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-200">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-red-600" />,
                title: "Trustworthy",
                description: "We do what we say we'll do, when we say we'll do it. No hidden fees, no surprises."
              },
              {
                icon: <Heart className="w-8 h-8 text-red-600" />,
                title: "Personal Touch",
                description: "You'll work directly with Thomas and Peter. We're not hiding behind account managers."
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
              <div
                key={index}
                className="text-center p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 relative z-10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Founders</h2>
            <p className="text-xl text-gray-600">The people behind Rusty Rock</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-red-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 hover:scale-105 border border-red-100"
              >
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={128}
                      height={128}
                      className={`w-full h-full object-cover rounded-full ${founder.name === 'Peter Donahoe' ? 'brightness-125 contrast-110' : ''}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-lg text-red-600 font-semibold mb-4">{founder.role}</p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                  >
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Why Local Businesses Choose Us</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">We Speak Your Language</h3>
                    <p className="text-gray-200">No tech jargon. We explain everything in plain English.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Fast Turnaround</h3>
                    <p className="text-gray-200">Most projects completed within 1-2 weeks, not months.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Local Support</h3>
                    <p className="text-gray-200">Thomas covers New England, Peter covers the DC Metro area.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Affordable Pricing</h3>
                    <p className="text-gray-200">{`Quality doesn't have to break the bank. Fair, transparent pricing.`}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Ongoing Support</h3>
                    <p className="text-gray-200">{`We don't disappear after launch. Ongoing support and maintenance.`}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">AI-Enhanced Accuracy</h3>
                    <p className="text-gray-200">Cutting-edge tools ensure your site is perfect from day one.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work with Real People?</h2>
            <p className="text-xl text-red-100 mb-8">
              Stop dealing with faceless agencies. Work directly with Thomas and Peter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Meet the Team
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
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