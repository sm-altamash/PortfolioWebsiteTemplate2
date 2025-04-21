import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MoveRight } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1 },
      '-=0.4'
    )
    .fromTo(
      contentRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.6'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-5/12">
            <img
              ref={imageRef}
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Sultan Muhammad Altamash"
              className="w-full max-w-md rounded-xl shadow-lg mx-auto"
            />
          </div>
          
          <div 
            ref={contentRef}
            className="lg:w-7/12 space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sultan Muhammad Altamash
            </h3>
            <h4 className="text-xl text-blue-600 dark:text-blue-400 font-medium">
              Full-Stack Developer & Engineer
            </h4>
            
            <p className="text-gray-700 dark:text-gray-300">
              With over 5 years of experience in web and mobile application development, I specialize in creating 
              elegant, high-performance solutions for complex problems. My journey in software development began 
              with a fascination for how technology can transform lives and businesses.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              I believe in continuous learning and staying updated with the latest technologies. My approach 
              combines technical expertise with a deep understanding of user needs to deliver exceptional digital experiences.
            </p>
            
            <div className="pt-4">
              <h5 className="font-bold text-gray-900 dark:text-white mb-3">Education</h5>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>MSc in Computer Science - University of Technology, 2018-2020</li>
                <li>BSc in Software Engineering - National Institute of Technology, 2014-2018</li>
              </ul>
            </div>
            
            <div>
              <a 
                href="#contact" 
                className="inline-flex items-center mt-4 px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <span>Get In Touch</span>
                <MoveRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;