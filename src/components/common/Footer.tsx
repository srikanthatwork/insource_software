import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Heart, Sparkles } from 'lucide-react';
import { companyInfo } from '../../data/company';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'HIMS - Hospital Management', path: '/products/hims' },
        { name: 'HRMS - Human Resources', path: '/products/hrms' },
        { name: 'LIMS - Laboratory Management', path: '/products/lims' },
        { name: 'All Products', path: '/products' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Careers', path: '/careers' },
        { name: 'News & Updates', path: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Documentation', path: '#' },
        { name: 'Help Center', path: '#' },
        { name: 'Training', path: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'HIPAA Compliance', path: '#' },
        { name: 'Security', path: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: companyInfo.social.linkedin, color: 'hover:bg-blue-600' },
    { icon: Twitter, href: companyInfo.social.twitter, color: 'hover:bg-blue-400' },
    { icon: Facebook, href: companyInfo.social.facebook, color: 'hover:bg-blue-700' },
    { icon: Youtube, href: companyInfo.social.youtube, color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-500 rounded-full opacity-15 blur-xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-orange-500 rounded-full opacity-10 blur-xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold">IS</span>
                </motion.div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    Insource
                  </span>
                  <div className="text-sm text-gray-400">Software Solutions</div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {companyInfo.description}
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Trusted by {companyInfo.clients} healthcare facilities worldwide</span>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Call us</div>
                <div className="text-white font-medium">{companyInfo.contact.phone}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email us</div>
                <div className="text-white font-medium">{companyInfo.contact.email}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Visit us</div>
                <div className="text-white font-medium">New York, NY</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} {companyInfo.name}. All rights reserved.</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>for healthcare</span>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              HIPAA Compliance
            </Link>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 p-6 bg-gradient-to-r from-blue-800/50 to-green-800/50 rounded-2xl glass"
        >
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get the latest healthcare technology insights and product updates</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;