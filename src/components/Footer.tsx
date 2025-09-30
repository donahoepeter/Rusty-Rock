import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Risepath Digital</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional web development for local businesses. Built with trust, delivered with speed.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@risepathdigital.com" className="text-gray-300 hover:text-red-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+15551234567" className="text-gray-300 hover:text-red-600 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="space-y-4 text-gray-300">
              <div>
                <h5 className="font-medium text-white mb-2">DC Metro Area</h5>
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">Washington DC, Maryland, Virginia</span>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">New England</h5>
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">MA, CT, RI, NH, VT, ME</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Risepath Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}