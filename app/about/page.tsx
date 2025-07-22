'use client';

import { Scale, Award, GraduationCap, Users, Shield, CheckCircle, Phone, Calendar } from 'lucide-react';

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

export default function About() {
  const achievements = [
    "Over 1,000 successful case outcomes",
    "95% success rate in criminal defense cases",
    "Recognized as Top Criminal Defense Attorney 2020-2024",
    "Member of National Association of Criminal Defense Lawyers",
    "Certified in Criminal Law by State Bar Association",
    "Featured speaker at criminal law conferences"
  ];

  const education = [
    {
      degree: "Juris Doctor (J.D.)",
      institution: "Harvard Law School",
      year: "2008",
      details: "Graduated Magna Cum Laude, Law Review Editor"
    },
    {
      degree: "Bachelor of Arts in Political Science",
      institution: "Yale University",
      year: "2005",
      details: "Summa Cum Laude, Phi Beta Kappa"
    }
  ];

  const certifications = [
    {
      title: "State Bar License",
      issuer: "State Bar Association",
      year: "2008",
      status: "Active"
    },
    {
      title: "Federal Court License",
      issuer: "U.S. District Court",
      year: "2009",
      status: "Active"
    },
    {
      title: "Criminal Law Certification",
      issuer: "State Bar Association",
      year: "2012",
      status: "Active"
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
              <a href="/about" className="text-blue-800 font-semibold">About</a>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                About John Mitchell
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Experienced criminal defense attorney dedicated to protecting your rights and fighting for justice with integrity, passion, and unwavering commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" href="/book-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" href="/contact">
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="John Mitchell, Criminal Defense Attorney" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Professional Background
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                John Mitchell has dedicated his career to defending individuals facing criminal charges, 
                with over 15 years of experience in criminal defense law. His commitment to justice and 
                his clients' rights has made him one of the most respected criminal defense attorneys in the region.
              </p>
              <p className="leading-relaxed mb-6">
                After graduating from Harvard Law School, John began his legal career as a prosecutor, 
                where he gained invaluable insight into how the criminal justice system works from the 
                other side. This experience has proven invaluable in his defense practice, allowing him 
                to anticipate prosecution strategies and build stronger defenses for his clients.
              </p>
              <p className="leading-relaxed mb-6">
                In 2012, John founded Mitchell Defense Law with a simple mission: to provide aggressive, 
                skilled, and compassionate legal representation to individuals facing criminal charges. 
                He understands that being charged with a crime is one of the most stressful experiences 
                a person can face, and he works tirelessly to guide his clients through the legal process 
                while fighting for the best possible outcome.
              </p>
              <p className="leading-relaxed">
                John's approach to criminal defense is comprehensive and client-focused. He believes that 
                every case deserves thorough preparation, aggressive advocacy, and personalized attention. 
                His track record speaks for itself, with over 1,000 successful case outcomes and a 95% 
                success rate in criminal defense matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notable Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Recognition and accomplishments that demonstrate our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 flex items-center space-x-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{achievement}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education & Bar Admissions
            </h2>
            <p className="text-xl text-gray-600">
              Academic excellence and professional qualifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <GraduationCap className="w-8 h-8 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                    <p className="text-blue-800 font-medium mb-2">{edu.year}</p>
                    <p className="text-gray-600">{edu.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Licenses & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Professional licensing and specialized certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-2">{cert.year}</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {cert.status}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                My Approach to Criminal Defense
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Aggressive Defense</h3>
                    <p className="text-gray-700">
                      Every case receives thorough investigation and aggressive advocacy to protect your rights and freedom.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Attention</h3>
                    <p className="text-gray-700">
                      Direct access to me, not just paralegals. I personally handle every aspect of your case.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                    <Scale className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Experience</h3>
                    <p className="text-gray-700">
                      15+ years of criminal defense experience with a track record of successful outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668884/pexels-photo-5668884.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="John Mitchell in his law office" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't face criminal charges alone. Get the experienced legal representation you deserve. 
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
                <li><a href="/about" className="text-white">About</a></li>
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
                  <Scale className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-gray-400">john@mitchelldefense.com</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-3 text-blue-400" />
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