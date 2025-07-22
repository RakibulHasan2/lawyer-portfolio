'use client';

import { Scale, Shield, Users, Car, Pill, Home, Building, Eye, Phone, Calendar, ChevronRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href 
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
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
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
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

const PracticeAreaCard = ({ 
  id,
  icon: Icon, 
  title, 
  description, 
  services,
  process 
}: {
  id: string;
  icon: any;
  title: string;
  description: string;
  services: string[];
  process: string[];
}) => (
  <Card className="p-8" hover id={id}>
    <div className="flex items-center mb-6">
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 w-16 h-16 rounded-full flex items-center justify-center mr-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
    
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-3">Services Include:</h4>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-gray-700">{service}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Process:</h4>
      <ol className="space-y-2">
        {process.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
              {index + 1}
            </span>
            <span className="text-gray-700">{step}</span>
          </li>
        ))}
      </ol>
    </div>
    
    <Button variant="primary" href="/contact">
      Get Help Now
    </Button>
  </Card>
);

export default function PracticeAreas() {
  const practiceAreas = [
    {
      id: "criminal-defense",
      icon: Shield,
      title: "Criminal Defense",
      description: "Comprehensive defense for all criminal charges including felonies, misdemeanors, and federal crimes. Our experienced team will fight to protect your rights and achieve the best possible outcome.",
      services: [
        "Violent crimes defense",
        "Theft and property crimes",
        "Fraud and white-collar crimes",
        "Weapons charges",
        "Domestic violence",
        "Assault and battery",
        "Federal criminal charges"
      ],
      process: [
        "Initial case evaluation and strategy development",
        "Thorough investigation of evidence and witnesses",
        "Negotiation with prosecutors for reduced charges",
        "Aggressive trial representation if needed",
        "Post-conviction relief and appeals"
      ]
    },
    {
      id: "dui-defense",
      icon: Car,
      title: "DUI/DWI Defense",
      description: "Specialized defense for drunk driving charges with a track record of reduced penalties, license retention, and case dismissals. We understand the complexities of DUI law.",
      services: [
        "First-time DUI offenses",
        "Repeat DUI offenses",
        "Felony DUI charges",
        "License suspension hearings",
        "Breathalyzer test challenges",
        "Field sobriety test disputes",
        "Commercial driver DUI"
      ],
      process: [
        "Immediate license hearing representation",
        "Challenge evidence and testing procedures",
        "Examine arrest procedures for violations",
        "Negotiate plea agreements or alternative sentences",
        "Trial representation for contested cases"
      ]
    },
    {
      id: "drug-crimes",
      icon: Pill,
      title: "Drug Crimes",
      description: "Expert defense for drug possession, distribution, and trafficking charges at all levels. We work to minimize consequences and protect your future.",
      services: [
        "Drug possession charges",
        "Drug trafficking and distribution",
        "Prescription drug crimes",
        "Drug manufacturing charges",
        "Conspiracy charges",
        "Search and seizure violations",
        "Drug court representation"
      ],
      process: [
        "Analyze search and seizure procedures",
        "Challenge evidence collection methods",
        "Explore treatment alternatives to incarceration",
        "Negotiate reduced charges or dismissals",
        "Provide aggressive trial defense"
      ]
    },
    {
      id: "white-collar-crimes",
      icon: Building,
      title: "White Collar Crimes",
      description: "Defense against financial and business-related criminal charges including fraud, embezzlement, and regulatory violations.",
      services: [
        "Fraud charges",
        "Embezzlement",
        "Money laundering",
        "Tax evasion",
        "Securities fraud",
        "Healthcare fraud",
        "Identity theft"
      ],
      process: [
        "Comprehensive case analysis and documentation review",
        "Coordinate with financial experts and investigators",
        "Negotiate with federal and state prosecutors",
        "Develop mitigation strategies",
        "Provide skilled trial representation"
      ]
    },
    {
      id: "domestic-violence",
      icon: Home,
      title: "Domestic Violence",
      description: "Sensitive and effective defense for domestic violence charges, including restraining order violations and related family law matters.",
      services: [
        "Domestic violence charges",
        "Restraining order violations",
        "Child abuse allegations",
        "Stalking charges",
        "Harassment accusations",
        "Violation of protection orders",
        "Family court coordination"
      ],
      process: [
        "Immediate protective order challenges",
        "Thorough investigation of allegations",
        "Coordinate with family law proceedings",
        "Negotiate alternative resolutions",
        "Provide compassionate trial representation"
      ]
    },
    {
      id: "juvenile-defense",
      icon: Users,
      title: "Juvenile Defense",
      description: "Specialized representation for minors facing criminal charges, focusing on rehabilitation and protecting their future opportunities.",
      services: [
        "Juvenile court representation",
        "School disciplinary hearings",
        "Delinquency proceedings",
        "Transfer to adult court defense",
        "Probation violation hearings",
        "Sealing of juvenile records",
        "Diversion program advocacy"
      ],
      process: [
        "Assess eligibility for juvenile programs",
        "Advocate for rehabilitation over punishment",
        "Coordinate with parents and schools",
        "Pursue record sealing opportunities",
        "Provide age-appropriate legal guidance"
      ]
    }
  ];

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
              <a href="/practice-areas" className="text-blue-800 font-semibold">Practice Areas</a>
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
          <h1 className="text-5xl font-bold mb-6">
            Areas of Practice
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive criminal defense services with specialized expertise across all areas of criminal law. 
            Every case receives personalized attention and aggressive advocacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/book-consultation">
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </Button>
            <Button size="lg" variant="outline" href="tel:+1234567890">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard key={index} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Criminal Defense Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When your freedom and future are at stake, you need experienced, aggressive representation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Over 1,000 successful cases with a 95% success rate in criminal defense matters
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Attention</h3>
              <p className="text-gray-600">
                Direct access to your attorney, not just staff. Every case receives personalized strategy
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Availability</h3>
              <p className="text-gray-600">
                Criminal charges don't wait for business hours. We're available when you need us most
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Facing Criminal Charges?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait. The sooner you get experienced legal representation, the better your chances of a favorable outcome. 
            Contact us today for a free consultation.
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
                <li><a href="/practice-areas" className="text-white">Practice Areas</a></li>
                <li><a href="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#criminal-defense" className="text-gray-400 hover:text-white transition-colors">Criminal Defense</a></li>
                <li><a href="#dui-defense" className="text-gray-400 hover:text-white transition-colors">DUI Defense</a></li>
                <li><a href="#drug-crimes" className="text-gray-400 hover:text-white transition-colors">Drug Crimes</a></li>
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