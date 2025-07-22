'use client';

import { useState } from 'react';
import { Scale, Phone, Calendar, Clock, CheckCircle, Shield, Users, Award } from 'lucide-react';

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

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-12 max-w-2xl mx-auto text-center">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Consultation Booked!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for scheduling your consultation. We'll contact you within 24 hours to confirm your appointment and provide further details.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">What's Next?</h3>
            <ul className="text-left space-y-2 text-blue-800">
              <li>• You'll receive a confirmation email shortly</li>
              <li>• We'll call you to confirm your preferred time</li>
              <li>• Prepare any documents related to your case</li>
              <li>• Your consultation is completely confidential</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => window.location.href = '/'}>
              Return Home
            </Button>
            <Button variant="outline" onClick={() => window.location.href = 'tel:+1234567890'}>
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </Card>
      </div>
    );
  }

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
              <Button size="sm" variant="outline" onClick={() => window.location.href = '/contact'}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Book Your Free Consultation
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the first step toward protecting your rights and future. Schedule a confidential consultation 
            to discuss your case and learn about your legal options.
          </p>
          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Schedule Your Consultation</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to schedule your free consultation. We'll contact you within 24 hours 
                to confirm your appointment.
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Preferred Date"
                    type="date"
                    id="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <Select
                    label="Preferred Time"
                    id="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="evening">Evening (5:00 PM - 7:00 PM)</option>
                    <option value="flexible">Flexible</option>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Consultation Type"
                    id="consultationType"
                    required
                    value={formData.consultationType}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="in-person">In-Person</option>
                    <option value="phone">Phone Call</option>
                    <option value="video">Video Call</option>
                  </Select>
                  <Select
                    label="Urgency"
                    id="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="">Select Urgency</option>
                    <option value="emergency">Emergency (Same Day)</option>
                    <option value="urgent">Urgent (Within 24 Hours)</option>
                    <option value="soon">Soon (Within 3 Days)</option>
                    <option value="flexible">Flexible</option>
                  </Select>
                </div>
                
                <TextArea
                  label="Brief Case Summary"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide a brief summary of your case or legal issue..."
                />
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Confidentiality Notice:</strong> All information provided is protected by attorney-client privilege. 
                    Your consultation is completely confidential and without obligation.
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
                      Booking Consultation...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Free Consultation
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Information Sidebar */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Confidential Discussion</h4>
                      <p className="text-gray-600">We'll discuss your case in complete confidentiality</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Legal Analysis</h4>
                      <p className="text-gray-600">Get an expert evaluation of your legal situation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Strategic Planning</h4>
                      <p className="text-gray-600">Develop a customized defense strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Next Steps</h4>
                      <p className="text-gray-600">Clear guidance on how to proceed with your case</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose John Mitchell?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-blue-800" />
                    <span className="text-gray-700">15+ Years Criminal Defense Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-blue-800" />
                    <span className="text-gray-700">1000+ Successful Cases</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-800" />
                    <span className="text-gray-700">95% Success Rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-800" />
                    <span className="text-gray-700">24/7 Emergency Availability</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h3>
                <p className="text-gray-600 mb-6">
                  Criminal charges can't wait for business hours. If you need immediate assistance, 
                  call our emergency line now.
                </p>
                <div className="space-y-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.location.href = 'tel:+1234567890'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 24/7 Emergency Line
                  </Button>
                  <p className="text-center text-gray-600">
                    <strong>(555) 123-4567</strong>
                  </p>
                </div>
              </Card>
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
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/practice-areas#criminal-defense" className="text-gray-400 hover:text-white transition-colors">Criminal Defense</a></li>
                <li><a href="/practice-areas#dui-defense" className="text-gray-400 hover:text-white transition-colors">DUI Defense</a></li>
                <li><a href="/practice-areas#drug-crimes" className="text-gray-400 hover:text-white transition-colors">Drug Crimes</a></li>
                <li><a href="/book-consultation" className="text-white">Free Consultation</a></li>
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