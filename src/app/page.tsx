'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, DollarSign, Clock } from 'lucide-react';
import AnimatedGears from '@/components/AnimatedGears';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
        <AnimatedGears />

        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="text-red-600">Revamping</span>
              <br />
              <span className="text-gray-800">the Mom and Pop Shop</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Professional websites for local businesses. Built with <span className="text-red-600 font-semibold">trust</span>,
              delivered with <span className="text-red-600 font-semibold">speed</span>, powered by <span className="text-red-600 font-semibold">AI</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/consultation"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                Get Free Consultation <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                View Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose <span className="text-red-600">Rusty Rock</span>?</h2>
            <p className="text-xl text-gray-600">We understand local businesses because we are one</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-red-600" />,
                title: "Trust & Communication",
                description: "Direct contact with founders. No middlemen, no confusion."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-red-600" />,
                title: "Affordable Solutions",
                description: "Quality websites that won&apos;t break the bank. Transparent pricing."
              },
              {
                icon: <Clock className="w-8 h-8 text-red-600" />,
                title: "Lightning Fast",
                description: "Get your website live in days, not months. Speed is our specialty."
              },
              {
                icon: <Zap className="w-8 h-8 text-red-600" />,
                title: "AI-Powered Accuracy",
                description: "Cutting-edge tools ensure pixel-perfect results every time."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Revamp Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of local businesses who&apos;ve transformed their online presence with Rusty Rock.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-lg text-xl font-semibold transition-all duration-200 transform hover:scale-105 gap-2 shadow-lg"
            >
              Start Your Journey <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
