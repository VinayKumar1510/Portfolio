"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "skills") {
            setAnimatedSkills(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeAction = (action) => {
    // Download resume - replace with your actual resume URL
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vinay_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "React.js", level: 85, color: "#61dafb", gradient: "linear-gradient(90deg, #61dafb, #00d4ff)" },
    { name: "Next.js", level: 90, color: "#000000", gradient: "linear-gradient(90deg, #000000, #6366f1)" },
    { name: "TypeScript", level: 60, color: "#3178c6", gradient: "linear-gradient(90deg, #3178c6, #4f46e5)" },
    { name: "JavaScript", level: 85, color: "#f7df1e", gradient: "linear-gradient(90deg, #f7df1e, #fbbf24)" },
    { name: "Node.js", level: 80, color: "#339933", gradient: "linear-gradient(90deg, #339933, #10b981)" },
    { name: "Tailwind CSS", level: 90, color: "#06b6d4", gradient: "linear-gradient(90deg, #06b6d4, #0891b2)" },
    { name: "Express.js", level: 70, color: "#000000", gradient: "linear-gradient(90deg, #000000, #6366f1)" },
    { name: "MongoDB", level: 80, color: "#47a248", gradient: "linear-gradient(90deg, #47a248, #22c55e)" },
  ];

  const projects = [
  {
    title: "VendorVerse",
    description: "Multi-vendor e-commerce platform with dynamic product listings.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "React"],
    image: "/file.svg", 
    github: "https://github.com/VinayKumar1510/VendoVerse", 
    live: "https://vendo-verse.vercel.app/", 
    featured: true,
  },
  {
    title: "Bitnotes",
    description: "A note-taking application with real-time collaboration features",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    image: "/next.svg",
    github: "https://github.com/VinayKumar1510/Bitnotes",
    live: "https://bitnotes-iota.vercel.app/",
    featured: true,
  },
  {
    title: "PDF-Merger",
    description: "Web application to merge multiple PDF files into one",
    tech: ["JavaScript", "React", "PDF.js", "File API"],
    image: "/vercel.svg",
    github: "https://github.com/VinayKumar1510/PDF-Merger",
    live: "https://pdf-merger-mauve.vercel.app/",
    featured: true,
  },
  {
    title: "SwiftCSV",
    description: "Fast CSV file viewer with search and pagination features",
    tech: ["JavaScript", "React", "CSV Parser", "File API"],
    image: "/file.svg",
    github: "https://github.com/VinayKumar1510/SwiftCSV",
    live: "https://swift-csv.vercel.app/",
    featured: true,
  },
  {
    title: "Marklog",
    description: "Blog platform with markdown support and user authentication",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    image: "/window.svg",
    github: "https://github.com/VinayKumar1510/Marklog",
    live: "https://marklog.vercel.app/",
    featured: true,
  },
  {
    title: "StyleMorph",
    description: "CSS animation library and style transformation tool",
    tech: ["JavaScript", "CSS3", "Animation", "Web APIs"],
    image: "/globe.svg",
    github: "https://github.com/VinayKumar1510/StyleMorph",
    live: "https://style-morph.vercel.app/",
    featured: true,
  },
];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold gradient-text">Vinay Kumar</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "skills", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 cursor-pointer rounded-md text-sm font-medium transition-all duration-300 hover:text-indigo-400 ${activeSection === section
                        ? "text-indigo-400 bg-indigo-400/10"
                        : "text-gray-300 hover:bg-gray-700/50"
                      }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-indigo-400 focus:outline-none focus:text-indigo-400 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/50 backdrop-blur-lg rounded-lg mt-2">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-indigo-400 hover:bg-gray-700/50 ${
                    activeSection === section
                      ? "text-indigo-400 bg-indigo-400/10"
                      : "text-gray-300"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

            {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Text Content - Left Side */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
                <span className="gradient-text">Hello, I&apos;m Vinay</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 animate-fade-in-up">
                Full Stack Web Developer & Cybersecurity Enthusiast
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6 max-w-2xl lg:max-w-none animate-fade-in-up">
                I create innovative web solutions and explore cybersecurity. Specializing in scalable applications that solve real-world problems.
              </p>
              
              {/* Additional Info Section */}
              <div className="mb-6 space-y-4 animate-fade-in-up">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-2 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-xs font-medium border border-indigo-500/30">
                    Full Stack Developer
                  </span>
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30">
                    Cybersecurity Enthusiast
                  </span>
                  <span className="px-2 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/30">
                    Freelancer
                  </span>
                </div>
                
                <div className="text-gray-300 text-sm sm:text-base leading-relaxed text-center lg:text-left">
                  <p className="mb-2 sm:mb-3">
                    Expert in <span className="text-indigo-400 font-semibold">React</span>, <span className="text-indigo-400 font-semibold">Next.js</span>, 
                    <span className="text-indigo-400 font-semibold"> Node.js</span>, and <span className="text-indigo-400 font-semibold">Express.js</span>.
                  </p>
                  <p className="mb-2 sm:mb-3">
                    Passionate about <span className="text-purple-400 font-semibold">cybersecurity</span> and ethical hacking.
                  </p>
                  <p>
                    <span className="text-cyan-400 font-semibold">Freelance developer</span> helping businesses bring ideas to life.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 justify-center lg:justify-start animate-fade-in-up">
                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-6 cursor-pointer py-3 btn-primary text-white rounded-full font-semibold hover-lift animate-glow text-sm sm:text-base"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 cursor-pointer border border-indigo-400 text-indigo-400 rounded-full font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 glass-effect text-sm sm:text-base"
                  >
                    Get In Touch
                  </button>
                </div>
                
                {/* Resume Download Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleResumeAction('download')}
                    className="px-6 cursor-pointer py-3 border border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 glass-effect flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
            
            {/* Photo - Right Side */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-effect p-2 hover-lift">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/vinay-photo.jpg"
                      alt="Vinay Kumar - Full Stack Developer"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
                
                {/* Decorative elements around the photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-500/30 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-cyan-500/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="glass-effect rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">Who I Am</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I&apos;m a passionate Full Stack Developer with a love for creating innovative web solutions.
                  With expertise in modern technologies like React, Next.js, and Node.js, I bring ideas to life
                  through clean, efficient, and scalable code.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm">Freelancer</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Team Player</span>
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">Fast Learner</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass-effect rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Frontend Development with React & Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Backend Development with Node.js & Express.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Database Design & Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-300">UI/UX Design & Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">DevOps & Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-effect rounded-xl p-6 hover-lift">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-200 text-lg">{skill.name}</span>
                    <span className="text-sm text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 relative overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all duration-2000 ease-out relative overflow-hidden ${animatedSkills ? 'animate-progress' : ''
                        }`}
                      style={{
                        width: animatedSkills ? `${skill.level}%` : '0%',
                        background: skill.gradient,
                        boxShadow: animatedSkills ? `0 0 10px ${skill.color}40` : 'none',
                        maxWidth: `${skill.level}%`,
                        '--target-width': `${skill.level}%`
                      }}
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{
                          animation: animatedSkills ? 'shimmer 2s ease-in-out infinite' : 'none'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="glass-effect rounded-xl overflow-hidden hover-lift">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={32}
                        height={32}
                        className="dark:invert"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-200">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-indigo-600/20 text-indigo-400 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-all duration-300 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 btn-primary text-white rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6">
              Let&apos;s work together to bring your ideas to life!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in-left">
              <div className="glass-effect rounded-xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-6 text-indigo-400">Contact Information</h3>
                <div className="space-y-4">
                                     <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                       <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                     </div>
                     <div>
                       <p className="text-gray-400 text-sm">Email</p>
                       <p className="text-gray-200">vinaysharaya1@gmail.com</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                       <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                     </div>
                     <div>
                       <p className="text-gray-400 text-sm">Location</p>
                       <p className="text-gray-200">Rohtak, Haryana</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                       <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                       </svg>
                     </div>
                     <div>
                       <p className="text-gray-400 text-sm">Phone</p>
                       <p className="text-gray-200">+91 79887 22405</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass-effect rounded-xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Send Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 btn-primary text-white rounded-lg font-semibold transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-xl p-8">
                         <p className="text-gray-400 mb-4">
               © {new Date().getFullYear()} Vinay. All rights reserved.
             </p>
                         <div className="flex justify-center space-x-6">
               <a href="https://www.instagram.com/vinay.kumar_98/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </a>
               <a href="https://www.linkedin.com/in/vinay-kumar-419b09292/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                 </svg>
               </a>
               <a href="https://github.com/VinayKumar1510" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                 </svg>
               </a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
