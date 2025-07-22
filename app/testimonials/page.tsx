'use client';

import { useState } from 'react';
import { Scale, Phone, Star, Quote, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

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
  caseType,
  date,
  outcome,
  location 
}: {
  name: string;
  rating: number;
  text: string;
  caseType: string;
  date: string;
  outcome: string;
  location: string;
}) => (
  <Card className="p-8 h-full" hover>
    <div className="flex items-center justify-between mb-6">
      <div className="flex text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : ''}`} />
        ))}
      </div>
      <Quote className="w-8 h-8 text-blue-200" />
    </div>
    <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">"{text}"</p>
    <div className="border-t pt-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="font-semibold text-gray-900 text-lg">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Case Type:</span>
          <span className="text-sm text-gray-900">{caseType}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Outcome:</span>
          <span className="text-sm text-green-600 font-medium">{outcome}</span>
        </div>
      </div>
    </div>
  </Card>
);

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "John saved my career and reputation. When I was facing felony charges that could have ended my professional life, he fought tirelessly for me. His expertise in criminal defense is unmatched. Not only did he get the charges dropped, but he also helped me understand the legal process every step of the way. I can't thank him enough.",
      caseType: "Felony Criminal Defense",
      date: "November 2024",
      outcome: "Charges Dismissed",
      location: "Downtown District"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Outstanding representation during the most difficult time of my life. John's knowledge of DUI law is exceptional, and his dedication to his clients is evident in everything he does. He achieved a result I never thought possible - complete dismissal of my case. His professionalism and compassion made all the difference.",
      caseType: "DUI Defense",
      date: "October 2024",
      outcome: "Case Dismissed",
      location: "Westside"
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      text: "Highly recommend John Mitchell to anyone facing criminal charges. He was with me every step of the way during my drug possession case. His strategic approach and thorough preparation resulted in a plea deal that avoided jail time completely. John truly cares about his clients and their futures.",
      caseType: "Drug Possession",
      date: "September 2024",
      outcome: "Reduced to Misdemeanor",
      location: "East District"
    },
    {
      name: "Robert Thompson",
      rating: 5,
      text: "John's expertise in white-collar criminal defense is remarkable. When I was facing fraud charges related to my business, he developed a comprehensive defense strategy that highlighted the complexities of the case. His attention to detail and ability to communicate complex legal concepts clearly was invaluable.",
      caseType: "White Collar Crime",
      date: "August 2024",
      outcome: "Charges Reduced",
      location: "Business District"
    },
    {
      name: "Maria Santos",
      rating: 5,
      text: "John handled my domestic violence case with incredible sensitivity and professionalism. He understood the complexities of my situation and fought hard to protect my rights. The outcome exceeded my expectations, and I'm grateful for his dedication to justice.",
      caseType: "Domestic Violence",
      date: "July 2024",
      outcome: "Acquitted at Trial",
      location: "South District"
    },
    {
      name: "David Kim",
      rating: 5,
      text: "Facing assault charges was terrifying, but John made the process bearable. His calm demeanor and expert legal knowledge gave me confidence throughout the case. He negotiated a plea deal that avoided jail time and minimized the impact on my life. I couldn't have asked for better representation.",
      caseType: "Assault Defense",
      date: "June 2024",
      outcome: "Plea Agreement",
      location: "North District"
    },
    {
      name: "Jennifer Wilson",
      rating: 5,
      text: "John's juvenile defense work saved my teenager's future. When my son was facing serious charges, John not only provided excellent legal representation but also helped us understand the juvenile justice system. His advocacy resulted in a diversion program that kept my son's record clean.",
      caseType: "Juvenile Defense",
      date: "May 2024",
      outcome: "Diversion Program",
      location: "Suburban District"
    },
    {
      name: "Thomas Anderson",
      rating: 5,
      text: "John's 24/7 availability was crucial in my case. When I was arrested late at night, he was there immediately to guide me through the process. His quick action and strategic thinking from day one set the foundation for a successful defense. The charges were ultimately dismissed.",
      caseType: "Emergency Defense",
      date: "April 2024",
      outcome: "Charges Dismissed",
      location: "Central District"
    },
    {
      name: "Amanda Foster",
      rating: 5,
      text: "I was facing my second DUI charge and thought my situation was hopeless. John's expertise in DUI defense gave me hope and ultimately saved my license and my job. His thorough investigation uncovered procedural errors that led to the dismissal of my case.",
      caseType: "Repeat DUI Offense",
      date: "March 2024",
      outcome: "Case Dismissed",
      location: "Highway District"
    }
  ];

  const testimonialsPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    return testimonials.slice(start, end);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
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
              <a href="/testimonials" className="text-blue-800 font-semibold">Testimonials</a>
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
          <h1 className="text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Real stories from real clients who trusted us with their most important legal matters. 
            See why we have a 95% success rate and hundreds of satisfied clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/book-consultation">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Free Consultation
            </Button>
            <Button size="lg" variant="outline" href="tel:+1234567890">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-800 mb-2">1000+</div>
              <div className="text-gray-600">Cases Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-800 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-800 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-800 mb-2">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Authentic reviews from clients who experienced our legal services firsthand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentTestimonials().map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-10 h-10 rounded-full font-medium transition-colors ${
                    index === currentPage
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Across All Case Types
            </h2>
            <p className="text-xl text-gray-600">
              Our proven track record spans every area of criminal defense
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-800 mb-2">Criminal Defense</div>
              <div className="text-gray-600 mb-4">200+ Cases Won</div>
              <div className="flex justify-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">Felonies, misdemeanors, federal charges</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-800 mb-2">DUI Defense</div>
              <div className="text-gray-600 mb-4">150+ Cases Won</div>
              <div className="flex justify-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">First-time and repeat offenses</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-800 mb-2">Drug Crimes</div>
              <div className="text-gray-600 mb-4">100+ Cases Won</div>
              <div className="flex justify-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">Possession, distribution, trafficking</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Add Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trusted us with their most important legal matters. 
            Get the experienced representation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/book-consultation">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
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
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/practice-areas" className="text-gray-400 hover:text-white transition-colors">Practice Areas</a></li>
                <li><a href="/testimonials" className="text-white">Testimonials</a></li>
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