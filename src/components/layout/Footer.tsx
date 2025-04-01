"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="footer-top py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="footer-about">
              <Link href="/" className="logo flex items-center">
                <span className="sitename text-2xl font-heading">Prodough</span>
              </Link>
              <div className="footer-contact pt-3">
                <p className="mb-2">C-02, 1st floor, India Accelerator, MGF Metropolis Mall, MG Road, <br />Gurgaon, India</p>
                <p className="mt-3 mb-2"><strong>Phone:</strong> <span>+91 893 932 6262</span></p>
                <p><strong>Email:</strong> <span>service@prodough.in</span></p>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="text-xl font-heading mb-4">Useful Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-prodough-yellow transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-prodough-yellow transition-colors">About us</Link></li>
                <li><Link href="/products" className="hover:text-prodough-yellow transition-colors">Our Products</Link></li>
                <li><Link href="/privacy" className="hover:text-prodough-yellow transition-colors">Privacy policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-center py-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="flex flex-col items-center lg:items-start">
            <div>
              © Copyright <strong><span>Prodough</span></strong>. All Rights Reserved
            </div>
            <div className="credits text-sm text-gray-400">
              Designed by <a href="https://adroitdigital.io" target="_blank" rel="noopener noreferrer" className="text-prodough-yellow hover:underline">Adroit Digital</a>
            </div>
          </div>

          <div className="social-links order-first lg:order-last mb-3 lg:mb-0 flex space-x-4 mt-4 lg:mt-0">
            <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prodough-yellow transition-colors" aria-label="X/Twitter">
              <FontAwesomeIcon icon={faXTwitter} size="sm" />
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prodough-yellow transition-colors" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="sm" />
            </button>
            <a href="https://www.instagram.com/prodough.in?igsh=MTV1YnEzZ2Z1dDU1eA==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prodough-yellow transition-colors" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="sm" />
            </a>
            <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prodough-yellow transition-colors" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="sm" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
