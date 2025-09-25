import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#111111] font-bold text-sm">CR</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">CHCI Coding x Robotics</h3>
                <p className="text-gray-400 text-sm">Cameron Heights Collegiate Institute</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Join us for coding sessions every Wednesday at lunch and robotics projects every Thursday after school. 
              Learn, build, and compete with fellow students passionate about technology.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://classroom.google.com/c/lx4wa6n" 
                className="text-[#D4AF37] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Classroom
              </Link>
              <Link 
                href="#" 
                className="text-[#D4AF37] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </Link>
              <Link 
                href="#" 
                className="text-[#D4AF37] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects Gallery</Link></li>
              <li><Link href="/schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</Link></li>
              <li><Link href="/opportunities" className="text-gray-300 hover:text-white transition-colors">Opportunities</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/submit-project" className="text-gray-300 hover:text-white transition-colors">Submit Project</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Schedule</h4>
            <div className="space-y-2 text-gray-300">
              <p className="font-medium text-white">Weekly Sessions:</p>
              <p className="text-sm">Coding: Wed 10:50-11:50, Room C137</p>
              <p className="text-sm">Robotics: Thu 2:30-4:00, Room C137</p>
              <div className="mt-4">
                <p className="font-medium text-white mb-2">Get Involved:</p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#1F7A3A] text-white px-4 py-2 rounded-md hover:bg-[#1F7A3A]/90 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CHCI Coding x Robotics Club. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sponsor" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sponsor Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}