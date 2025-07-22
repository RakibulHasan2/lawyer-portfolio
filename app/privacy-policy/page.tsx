'use client';

import { Scale, Phone, Shield, Eye, Lock, FileText } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href 
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-800 to-blue-900 text-white hover:from-blue-900 hover:to-blue-800 shadow-lg hover:shadow-xl focus:ring-blue-500",
    secondary: "bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600 shadow-lg hover:shadow-xl focus:ring-amber-500",
    outline: "border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white focus:ring-blue-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };
  
  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </a>
  );
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Scale className="w-8 h-8 text-blue-800 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">John Mitchell</h1>
                <p className="text-sm text-gray-600">Criminal Defense Attorney</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-800 transition-colors">About</a>
              <a href="/practice-areas" className="text-gray-700 hover:text-blue-800 transition-colors">Practice Areas</a>
              <a href="/testimonials" className="text-gray-700 hover:text-blue-800 transition-colors">Testimonials</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="text-blue-800 hover:text-blue-900 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <Button size="sm" href="/book-consultation">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 rounded-full p-4 backdrop-blur-sm">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy and confidentiality are our top priorities. This policy explains how we collect, 
            use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Last Updated:</strong> January 2024
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <Lock className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-900">Attorney-Client Privilege</h3>
                </div>
                <p className="text-blue-800">
                  All communications between you and our law firm are protected by attorney-client privilege 
                  and are kept strictly confidential in accordance with professional ethics rules.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We collect personal information that you provide to us directly, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Name, email address, and phone number</li>
                <li>Mailing address and location information</li>
                <li>Case details and legal matter information</li>
                <li>Financial information for billing purposes</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website information</li>
                <li>Geographic location data</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Providing legal services and representation</li>
                <li>Communicating with you about your case</li>
                <li>Scheduling appointments and consultations</li>
                <li>Processing payments and billing</li>
                <li>Improving our website and services</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with a merger, sale, or transfer of assets</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Secure encrypted connections (SSL/TLS)</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure physical storage of documents</li>
                <li>Staff training on confidentiality requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of information (subject to legal requirements)</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage</li>
                <li>Improve user experience</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="text-gray-700 mb-6">
                You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-6">
                We may use third-party services such as Google Analytics, payment processors, and communication tools. 
                These services have their own privacy policies and terms of service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We retain your personal information for as long as necessary to provide legal services and comply with 
                legal and regulatory requirements. Client files are maintained according to professional ethics rules 
                and applicable laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this privacy policy periodically. We will notify you of any material changes by posting 
                the new policy on our website and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-blue-600" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Scale className="w-4 h-4 mr-3 text-blue-600" />
                    <span>john@mitchelldefense.com</span>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-4 h-4 mr-3 text-blue-600 mt-0.5" />
                    <div>
                      <div>123 Legal Street, Suite 456</div>
                      <div>Your City, ST 12345</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Scale className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">John Mitchell</h3>
                  <p className="text-gray-400">Criminal Defense Attorney</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Defending your rights with integrity, experience, and unwavering commitment to justice.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/practice-areas" className="text-gray-400 hover:text-white transition-colors">Practice Areas</a></li>
                <li><a href="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Legal Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-gray-400">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Scale className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-gray-400">john@mitchelldefense.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 John Mitchell, Criminal Defense Attorney. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}