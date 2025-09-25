'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const founders = [
    {
      name: "Peter Donahoe",
      role: "Co-Founder & DMV Region Lead",
      image: "/peter-profile.jpeg",
      bio: "Peter is passionate about helping local businesses succeed online. Based in the DMV area, he specializes in creating user-friendly websites that drive real business results for local companies using modern tools and AI-powered solutions.",
      region: "Washington DC, Maryland, Virginia",
      email: "peter@rustyrock.dev",
      phone: "+1 (555) 123-4567",
      linkedin: "https://linkedin.com/in/peterdonahoe",
      specialties: ["E-commerce Development", "Local SEO", "Digital Marketing", "User Interface Design"]
    },
    {
      name: "Thomas Rust",
      role: "Co-Founder & New England Region Lead",
      image: "/thomas-profile.jpeg",
      bio: "Thomas has a passion for helping small businesses succeed online. Covering the New England area, he focuses on building fast, secure websites using the latest technologies and AI tools to deliver professional results quickly and affordably.",
      region: "Massachusetts, Connecticut, Rhode Island, New Hampshire, Vermont, Maine",
      email: "thomas@rustyrock.dev",
      phone: "+1 (555) 987-6543",
      linkedin: "https://linkedin.com/in/thomasrust",
      specialties: ["Full-Stack Development", "AI Integration", "Performance Optimization", "Security"]
    }
  ];

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
              Meet the <span className="text-red-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get to know the people behind Rusty Rock. We&apos;re not hiding behind corporate walls -
              when you work with us, you work directly with the founders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-4 rounded-xl shadow-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">{founder.name}</h2>
                      <p className="text-xl text-red-600 font-semibold mb-4">{founder.role}</p>
                      <div className="flex items-center text-gray-600 mb-6">
                        <MapPin className="w-5 h-5 mr-2 text-red-600" />
                        <span>Serving: {founder.region}</span>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">{founder.bio}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Specialties:</h4>
                        <ul className="space-y-2">
                          {founder.specialties.map((specialty, idx) => (
                            <li key={idx} className="text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                              {specialty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={`mailto:${founder.email}`}
                        className="flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Email
                      </a>
                      <a
                        href={`tel:${founder.phone}`}
                        className="flex items-center border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call
                      </a>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Choose the best way to reach us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Consultation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Schedule a no-obligation consultation to discuss your project and get a custom quote.
              </p>
              <Link
                href="/consultation"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Book Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send us an email with your project details and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:hello@rustyrock.dev"
                className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Prefer to talk? Call us directly to discuss your project over the phone.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">DMV Area (Peter)</p>
                  <a
                    href="tel:+15551234567"
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">New England (Thomas)</p>
                  <a
                    href="tel:+15559876543"
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    (555) 987-6543
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Service Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-red-50 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">DMV Area</h3>
                <p className="text-gray-600 mb-4">Led by Peter Donahoe</p>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Washington, DC</li>
                  <li>• Maryland</li>
                  <li>• Northern Virginia</li>
                </ul>
              </div>

              <div className="p-8 bg-red-50 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">New England</h3>
                <p className="text-gray-600 mb-4">Led by Thomas Rust</p>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Massachusetts</li>
                  <li>• Connecticut</li>
                  <li>• Rhode Island</li>
                  <li>• New Hampshire</li>
                  <li>• Vermont</li>
                  <li>• Maine</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 mt-8">
              Outside these areas? We still work with clients nationwide remotely.
            </p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Don&apos;t wait - great websites drive real results. Let&apos;s build yours today.
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-lg text-xl font-semibold transition-colors duration-200"
            >
              Get Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}