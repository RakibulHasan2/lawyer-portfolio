'use client';

import { useState, useEffect } from 'react';
import { Star, Shield, Users, Award, Phone, Mail, MapPin, Calendar, ChevronRight, Scale } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href 
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
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
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Component>
  );
};

const Card = ({ 
  children, 
  className = '', 
  hover = false 
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg ${hover ? 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
};

const TestimonialCard = ({ 
  name, 
  rating, 
  text, 
  caseType 
}: {
  name: string;
  rating: number;
  text: string;
  caseType: string;
}) => (
  <Card className="p-6 h-full" hover>
    <div className="flex items-center mb-4">
      <div className="flex text-yellow-500 mr-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : ''}`} />
        ))}
      </div>
      <span className="text-gray-600 text-sm">({rating}/5)</span>
    </div>
    <p className="text-gray-700 mb-4 leading-relaxed">"{text}"</p>
    <div className="border-t pt-4">
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-600">{caseType}</p>
    </div>
  </Card>
);

const PracticeAreaCard = ({ 
  icon: Icon, 
  title, 
  description, 
  href 
}: {
  icon: any;
  title: string;
  description: string;
  href: string;
}) => (
  <Card className="p-6 text-center" hover>
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    <Button variant="outline" size="sm" href={href}>
      Learn More <ChevronRight className="w-4 h-4 ml-1" />
    </Button>
  </Card>
);

const StatCard = ({ 
  icon: Icon, 
  number, 
  label 
}: {
  icon: any;
  number: string;
  label: string;
}) => (
  <div className="text-center">
    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div className="text-4xl font-bold text-white mb-2">{number}</div>
    <div className="text-blue-100">{label}</div>
  </div>
);

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "John saved my career and reputation. His expertise in criminal defense is unmatched. Professional, caring, and got the charges dropped.",
      caseType: "Criminal Defense"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Outstanding representation during a difficult time. John fought tirelessly for my case and achieved the best possible outcome.",
      caseType: "DUI Defense"
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      text: "Highly recommend! John's knowledge of the law and dedication to his clients is exceptional. He was with me every step of the way.",
      caseType: "Drug Charges"
    }
  ];

  const practiceAreas = [
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Comprehensive defense for all criminal charges including felonies, misdemeanors, and federal crimes.",
      href: "/practice-areas#criminal-defense"
    },
    {
      icon: Scale,
      title: "DUI/DWI Defense",
      description: "Specialized defense for drunk driving charges with a track record of reduced penalties and dismissals.",
      href: "/practice-areas#dui-defense"
    },
    {
      icon: Users,
      title: "Drug Crimes",
      description: "Expert defense for drug possession, distribution, and trafficking charges at all levels.",
      href: "/practice-areas#drug-crimes"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
              <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
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
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Defending Your Rights,
                <span className="text-yellow-400"> Protecting Your Future</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Experienced criminal defense attorney with over 15 years of successfully defending clients 
                against all types of criminal charges. Available 24/7 for emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" variant="secondary" href="/book-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (555) 123-4567
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>1000+ Cases Won</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Criminal Defense Attorney John Mitchell" 
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-gray-900">
                    <div className="font-semibold">5.0 Rating</div>
                    <div className="text-sm text-gray-600">200+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard icon={Users} number="1000+" label="Cases Won" />
            <StatCard icon={Award} number="15+" label="Years Experience" />
            <StatCard icon={Shield} number="95%" label="Success Rate" />
            <StatCard icon={Scale} number="24/7" label="Available" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About John Mitchell
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in criminal defense, John Mitchell has successfully 
                defended clients against a wide range of criminal charges. His dedication to justice 
                and unwavering commitment to his clients has earned him a reputation as one of the 
                most trusted criminal defense attorneys in the area.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-blue-800 mr-3" />
                  <span className="text-gray-700">Licensed to practice in State and Federal Courts</span>
                </div>
                <div className="flex items-center">
                  <Scale className="w-5 h-5 text-blue-800 mr-3" />
                  <span className="text-gray-700">Member of the National Association of Criminal Defense Lawyers</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-800 mr-3" />
                  <span className="text-gray-700">Certified in Criminal Law by the State Bar Association</span>
                </div>
              </div>
              <Button variant="primary" href="/about">
                Learn More About John
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668884/pexels-photo-5668884.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Attorney John Mitchell in his office" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-yellow-400 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-700">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Areas of Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive criminal defense services with specialized expertise in various areas of law
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard key={index} {...area} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" href="/practice-areas">
              View All Practice Areas
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real testimonials from clients who trusted us with their cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" href="/testimonials">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't Wait - Your Future Depends on Acting Now
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Criminal charges can have serious consequences. Get the experienced defense you need. 
            Free consultation available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/book-consultation">
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" href="tel:+1234567890">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
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
              <span className="mx-2">|</span>
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="mx-2">|</span>
              <a href="/disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}