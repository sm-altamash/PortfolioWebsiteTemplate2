import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Code2 className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold">Sultan Muhammad Altamash</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sultan Muhammad Altamash. All rights reserved.
          </p>
          
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-400 hover:text-blue-400 text-sm">Home</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 text-sm">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-blue-400 text-sm">Skills</a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 text-sm">About</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 text-sm">Contact</a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors mt-4 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;