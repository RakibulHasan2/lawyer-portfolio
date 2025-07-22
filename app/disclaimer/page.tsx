'use client';

import { Scale, Phone, AlertTriangle, FileText, Shield } from 'lucide-react';

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

export default function Disclaimer() {
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
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Legal Disclaimer
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Important legal information regarding the use of this website and our legal services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-900">Important Notice</h3>
              </div>
              <p className="text-yellow-800">
                This website is for informational purposes only. No attorney-client relationship is created 
                through the use of this website or any communication resulting from it.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Attorney-Client Relationship</h2>
              <p className="text-gray-700 mb-6">
                The information on this website is provided for general informational purposes only and is not 
                intended to be legal advice. The use of this website and the sending or receipt of information 
                through this website does not create an attorney-client relationship between you and John Mitchell 
                or his law firm.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Legal Advice</h2>
              <p className="text-gray-700 mb-6">
                The content on this website is not legal advice and should not be treated as such. Every legal 
                situation is unique and requires individual analysis. You should not rely on information provided 
                on this website as a substitute for consultation with a qualified attorney who can properly evaluate 
                your specific situation.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <p className="text-gray-700 mb-6">
                Information you submit through this website may not be confidential or privileged unless and until 
                an attorney-client relationship is formally established. Do not send confidential information through 
                this website until you have received confirmation that an attorney-client relationship has been created.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Jurisdiction and Licensing</h2>
              <p className="text-gray-700 mb-6">
                John Mitchell is licensed to practice law in the states where he maintains active bar membership. 
                The information on this website is primarily intended for residents of those jurisdictions. Laws 
                vary by state and jurisdiction, and the information provided may not be applicable in all locations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results Not Guaranteed</h2>
              <p className="text-gray-700 mb-6">
                Past results do not guarantee future outcomes. Each case is unique and depends on its specific facts 
                and circumstances. The outcome of any legal matter depends on many factors, and no attorney can 
                guarantee specific results.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Testimonials and Case Results</h2>
              <p className="text-gray-700 mb-6">
                Client testimonials and case results described on this website are not representative of every case 
                outcome. Individual results may vary and depend on the specific facts and circumstances of each case. 
                These testimonials and results do not constitute a guarantee, warranty, or prediction of the outcome 
                of your legal matter.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Time Limitations</h2>
              <p className="text-gray-700 mb-6">
                Legal matters are subject to strict time limitations called statutes of limitations. Failure to 
                act within these time limits may result in the loss of your right to pursue legal action. If you 
                have a potential legal matter, you should consult with an attorney promptly to ensure your rights 
                are protected.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Content and Updates</h2>
              <p className="text-gray-700 mb-6">
                The information on this website may not reflect the most current legal developments. Laws change 
                frequently, and the information provided may become outdated. We make no representations or 
                warranties regarding the accuracy, completeness, or timeliness of the information on this website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to Third-Party Websites</h2>
              <p className="text-gray-700 mb-6">
                This website may contain links to third-party websites. These links are provided for convenience 
                only. We do not endorse or control the content of these external sites and are not responsible 
                for their content, privacy policies, or practices.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the fullest extent permitted by law, John Mitchell and his law firm disclaim all liability 
                for any damages arising from the use of this website or reliance on any information provided 
                herein. This includes, but is not limited to, direct, indirect, incidental, consequential, 
                or punitive damages.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Rules and Ethics</h2>
              <p className="text-gray-700 mb-6">
                This website and our legal practice are governed by the professional rules of conduct and ethics 
                applicable to attorneys in our jurisdiction. These rules govern attorney advertising, client 
                confidentiality, conflicts of interest, and other aspects of legal practice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Legal Consultation</h2>
              <p className="text-gray-700 mb-4">
                If you have specific legal questions or need legal advice, please contact our office to schedule 
                a consultation. During a consultation, we can discuss your specific situation and advise you 
                of your legal rights and options.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Schedule a Consultation</h3>
                <div className="space-y-2 text-blue-800">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Scale className="w-4 h-4 mr-3" />
                    <span>john@mitchelldefense.com</span>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-4 h-4 mr-3 mt-0.5" />
                    <div>
                      <div>123 Legal Street, Suite 456</div>
                      <div>Your City, ST 12345</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="primary" href="/book-consultation">
                    Book Free Consultation
                  </Button>
                </div>
              </div>

              <p className="text-gray-600 mt-8 text-sm">
                <strong>Last Updated:</strong> January 2024
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
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/disclaimer" className="text-white">Legal Disclaimer</a></li>
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