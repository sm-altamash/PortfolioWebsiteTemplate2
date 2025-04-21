import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.7'
    )
    .fromTo(
      socialRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(
      scrollRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.5,
        ease: "power1.inOut"
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      id="home" 
      className="flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center md:text-left">
          <h1 
            ref={titleRef} 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            <span className="block">Hi, I'm Sultan Muhammad</span>
            <span className="block mt-2 text-blue-600 dark:text-blue-400">Full-Stack Developer & Engineer</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto md:mx-0"
          >
            I build exceptional, responsive websites and applications with modern technologies. 
            Turning complex problems into elegant solutions is what I do best.
          </p>
          
          <div 
            ref={socialRef}
            className="mt-10 flex justify-center md:justify-start space-x-6"
          >
            <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:contact@example.com" icon={<Mail />} label="Email" />
          </div>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <span className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          Scroll Down
        </span>
        <ChevronDown className="mx-auto h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform hover:scale-110 transition-transform duration-300 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;