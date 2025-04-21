import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Skill categories with data
const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React / React Native', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'JavaScript / TypeScript', level: 95 },
      { name: 'HTML / CSS / SCSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'Python / Django', level: 80 },
      { name: 'PHP / Laravel', level: 75 },
      { name: 'REST API Design', level: 90 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    category: 'Database & DevOps',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL / MySQL', level: 80 },
      { name: 'Docker / Kubernetes', level: 75 },
      { name: 'AWS / GCP', level: 80 },
      { name: 'CI/CD', level: 85 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

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
    );

    progressRefs.current.forEach((bar, index) => {
      if (!bar) return;
      
      const progress = bar.getAttribute('data-progress');
      if (progress) {
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${progress}%`,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.2 + index * 0.1,
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        );
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6"
        >
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          A comprehensive overview of my technical skills and proficiency levels across different domains.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {skills.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * category.items.length + skillIndex;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          ref={(el) => (progressRefs.current[globalIndex] = el)}
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-500 dark:to-teal-400"
                          data-progress={skill.level}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;