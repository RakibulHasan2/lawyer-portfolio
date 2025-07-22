'use client';

import { useState } from 'react';
import { Scale, Phone, Mail, MapPin, Clock, Calendar, Send } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  type = 'button',
  onClick,
  disabled = false
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
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
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ 
  children, 
  className = '' 
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

const Input = ({ 
  label, 
  type = 'text', 
  id, 
  required = false,
  className = '',
  ...props 
}: {
  label: string;
  type?: string;
  id: string;
  required?: boolean;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        {...props}
      />
    </div>
  );
};

const TextArea = ({ 
  label, 
  id, 
  required = false,
  rows = 4,
  className = '',
  ...props 
}: {
  label: string;
  id: string;
  required?: boolean;
  rows?: number;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        {...props}
      />
    </div>
  );
};

const Select = ({ 
  label, 
  id, 
  required = false,
  className = '',
  children,
  ...props 
}: {
  label: string;
  id: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        caseType: '',
        urgency: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

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
              <a href="/contact" className="text-blue-800 font-semibold">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="text-blue-800 hover:text-blue-900 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <Button size="sm" onClick={() => window.location.href = '/book-consultation'}>
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't face criminal charges alone. Get the experienced legal representation you deserve. 
            We're available 24/7 for emergencies and offer free consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => window.location.href = '/book-consultation'}>
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = 'tel:+1234567890'}>
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Legal Help Now</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll contact you within 24 hours to discuss your case. 
                All communications are confidential.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                  <Select
                    label="Case Type"
                    id="caseType"
                    required
                    value={formData.caseType}
                    onChange={handleChange}
                  >
                    <option value="">Select Case Type</option>
                    <option value="criminal-defense">Criminal Defense</option>
                    <option value="dui-dwi">DUI/DWI</option>
                    <option value="drug-crimes">Drug Crimes</option>
                    <option value="domestic-violence">Domestic Violence</option>
                    <option value="white-collar">White Collar Crimes</option>
                    <option value="juvenile">Juvenile Defense</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
                
                <Select
                  label="Urgency Level"
                  id="urgency"
                  required
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="">Select Urgency</option>
                  <option value="emergency">Emergency (Need immediate help)</option>
                  <option value="urgent">Urgent (Within 24 hours)</option>
                  <option value="soon">Soon (Within a few days)</option>
                  <option value="general">General Inquiry</option>
                </Select>
                
                <TextArea
                  label="Case Details"
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your case, including any charges, court dates, or specific concerns..."
                />
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Do not include sensitive details about ongoing cases in this form. 
                    We'll discuss specifics during our confidential consultation.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Phone className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">24/7 Emergency Line</p>
                      <a href="tel:+1234567890" className="text-blue-800 hover:text-blue-900 font-medium">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Mail className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">Secure Communication</p>
                      <a href="mailto:john@mitchelldefense.com" className="text-blue-800 hover:text-blue-900 font-medium">
                        john@mitchelldefense.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <MapPin className="w-6 h-6 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Address</h4>
                      <p className="text-gray-600">
                        123 Legal Street, Suite 456<br />
                        Your City, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-blue-800" />
                    <div>
                      <p className="font-semibold text-gray-900">Monday - Friday</p>
                      <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-blue-800" />
                    <div>
                      <p className="font-semibold text-gray-900">Saturday</p>
                      <p className="text-gray-600">9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-blue-800" />
                    <div>
                      <p className="font-semibold text-gray-900">Sunday</p>
                      <p className="text-gray-600">Emergency Only</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>24/7 Emergency Service:</strong> Criminal charges don't wait for business hours. 
                    Call anytime for immediate assistance.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Initial Response</h4>
                      <p className="text-gray-600">We'll contact you within 24 hours to schedule your consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                      <p className="text-gray-600">Discuss your case confidentially and learn about your options</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Case Strategy</h4>
                      <p className="text-gray-600">We'll develop a personalized defense strategy for your case</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the legal district for easy access
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-800 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">
                123 Legal Street, Suite 456<br />
                Your City, ST 12345
              </p>
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
                <li><a href="/contact" className="text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/practice-areas#criminal-defense" className="text-gray-400 hover:text-white transition-colors">Criminal Defense</a></li>
                <li><a href="/practice-areas#dui-defense" className="text-gray-400 hover:text-white transition-colors">DUI Defense</a></li>
                <li><a href="/practice-areas#drug-crimes" className="text-gray-400 hover:text-white transition-colors">Drug Crimes</a></li>
                <li><a href="/book-consultation" className="text-gray-400 hover:text-white transition-colors">Free Consultation</a></li>
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
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-gray-400">john@mitchelldefense.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-gray-400">123 Legal St, Suite 456<br />Your City, ST 12345</span>
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