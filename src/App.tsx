import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Code2, Server, Database, Award, Briefcase, GraduationCap, ChevronDown, Blocks } from 'lucide-react';
import { useEffect, useState } from 'react';
import myPhoto from '../src/assets/me.png';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    languages: ['Go (Golang)', 'Java', 'C++', 'PHP', 'Rust', '.NET'],
    backend: ['Go Microservices', 'REST API', 'gRPC', 'Spring Boot'],
    databases: ['PostgreSQL', 'MySQL', 'PHP MyAdmin'],
    caching: ['Redis', 'Kafka'],
    frontend: ['React.js', 'Angular', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    tools: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
    blockchain: ['Smart Contracts', 'Ethereum', 'Solidity', 'Web3.js']
  };

  const projects = [
    {
      title: 'B2B E-Commerce Platform',
      role: 'Backend Developer',
      tech: ['Go', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
      description: 'Designed backend microservices for a B2B marketplace with Google OAuth, role-based access control, and WhatsApp API integration.',
      highlights: ['Secure Authentication', 'Real-time Messaging', 'Scalable Architecture']
    },
    {
      title: 'ERP System',
      role: 'Backend Developer',
      tech: ['Go', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
      description: 'Contributed to enterprise ERP system with modules for vendor management, purchase orders, payments, and asset management.',
      highlights: ['REST APIs', 'Optimized Transactions', 'Caching Strategies']
    },
    {
      title: 'Resource Lending System',
      role: 'Full Stack Developer',
      tech: ['React.js', 'PHP', 'MySQL'],
      description: 'Web-based system for institutes to manage resource lending and issue handling efficiently.',
      highlights: ['Resource Tracking', 'Issue Resolution', 'Admin Dashboard']
    },
    {
      title: 'Drive Mate Platform',
      role: 'Full Stack Developer',
      tech: ['HTML', 'Tailwind CSS', 'PHP'],
      description: 'Digital driver education platform with comprehensive learning resources.',
      highlights: ['Modern UI', 'Content Management', 'User Progress Tracking']
    },
    {
      title: 'Todo Desktop App',
      role: 'Full Stack Developer',
      tech: ['Electron.js', 'JavaScript', 'HTML/CSS'],
      description: 'Cross-platform desktop application for task management.',
      highlights: ['Native Desktop', 'Local Storage', 'Clean Interface']
    }
  ];

  const experience = {
    company: 'Future CX Lanka (Pvt) Ltd',
    role: 'Intern Software Engineer',
    period: 'March 2025 - September 2025',
    description: 'Gained practical experience in both frontend and backend development, contributing to scalable, high-quality solutions.'
  };

  const education = [
    {
      degree: 'BSc (Hons) Computing (Information Systems)',
      institution: 'Lanka Nippon Biztech Institute - University of Greenwich',
      period: '2022 - Present'
    },
    {
      degree: 'Certified Developer Course',
      institution: 'iCET - Institute of Computer Engineering Technology',
      period: '2024 - Present'
    }
  ];

  const certifications = [
    'AWS Cloud Technical Essentials - Amazon Web Services (Coursera)',
    'Introduction to Java (Coursera)',
    'Introduction to IoT & Embedded Systems (Coursera)',
    'Basics of Data Structures and Algorithms (Simplilearn)'
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-600">HR</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${activeSection === section ? 'text-amber-600 font-semibold' : 'text-slate-700 hover:text-amber-600'}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center">
                 <img
            src={myPhoto}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-900">
            Hashini Ranasinghe
          </h1>
          <p className="text-2xl md:text-3xl text-amber-600 font-semibold mb-6">
            Intern Software Engineer
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate full-stack developer specializing in backend microservices with Go,
            scalable architectures, and innovative problem-solving
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/hashi2002" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 text-slate-700 hover:text-amber-600">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/hashini-ranasinghe-750094298" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 text-slate-700 hover:text-amber-600">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hashiranasinghe11@gmail.com"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 text-slate-700 hover:text-amber-600">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-amber-600"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">About Me</h2>
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg border-l-4 border-amber-600">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Passionate and results-driven Software Engineering undergraduate with a strong interest in technology,
              full stack development, and innovative problem-solving. Completed a 6-month internship as a Software
              Engineer Intern, where I gained practical experience in both frontend and backend development,
              contributing to scalable, high-quality solutions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Eager to continue expanding my technical expertise across the full development stack and progress into
              a full-time Full Stack Developer role, bringing creativity, dedication, and a commitment to excellence
              to every project.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-xl">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm text-slate-600">Nugegoda, Sri Lanka</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <Phone className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm text-slate-600">+94 74 1861 724</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <Mail className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm text-slate-600">hashiranasinghe11@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Work Experience</h2>

          <div className="relative pl-8 border-l-2 border-amber-600">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-amber-600"></div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{experience.company}</h3>
                  <p className="text-xl text-amber-600 font-semibold">{experience.role}</p>
                </div>
                <span className="text-sm text-slate-600 bg-amber-50 px-4 py-2 rounded-full">{experience.period}</span>
              </div>
              <p className="text-slate-700 leading-relaxed">{experience.description}</p>

              <div className="flex items-center mt-4 text-amber-600">
                <Briefcase className="w-5 h-5 mr-2" />
                <span className="font-semibold">Key Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-amber-600">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <Code2 className="w-6 h-6 text-amber-600 flex-shrink-0" />
                </div>

                <p className="text-sm text-amber-600 font-semibold mb-3">{project.role}</p>
                <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-white text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Code2 className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="text-sm bg-slate-50 text-slate-700 px-3 py-2 rounded-lg border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, i) => (
                  <span key={i} className="text-sm bg-slate-50 text-slate-700 px-3 py-2 rounded-lg border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, i) => (
                  <span key={i} className="text-sm bg-slate-50 text-slate-700 px-3 py-2 rounded-lg border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Caching & Messaging</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.caching.map((skill, i) => (
                  <span key={i} className="text-sm bg-slate-50 text-slate-700 px-3 py-2 rounded-lg border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Code2 className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, i) => (
                  <span key={i} className="text-sm bg-slate-50 text-slate-700 px-3 py-2 rounded-lg border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="text-sm bg-slate-50 text-slate-700 px-3 py-2 rounded-lg border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Blocks className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-slate-900">Blockchain</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.blockchain.map((skill, i) => (
                  <span key={i} className="text-sm bg-slate-50 text-slate-700 px-3 py-2 rounded-lg border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Education & Certifications</h2>

          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 shadow-lg border-l-4 border-amber-600">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <GraduationCap className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                      <p className="text-slate-700">{edu.institution}</p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-600 bg-white px-4 py-2 rounded-full">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-amber-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-600 mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-900">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-12">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:hashiranasinghe11@gmail.com"
               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <Mail className="w-12 h-12 mx-auto mb-4 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-sm text-slate-600">hashiranasinghe11@gmail.com</p>
            </a>

            <a href="https://linkedin.com/in/hashini-ranasinghe-750094298" target="_blank" rel="noopener noreferrer"
               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 mb-2">LinkedIn</h3>
              <p className="text-sm text-slate-600">Connect with me</p>
            </a>

            <a href="https://github.com/hashi2002" target="_blank" rel="noopener noreferrer"
               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <Github className="w-12 h-12 mx-auto mb-4 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 mb-2">GitHub</h3>
              <p className="text-sm text-slate-600">View my projects</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Available for Opportunities</h3>
            <p className="text-amber-50 mb-6">
              Currently seeking full-time positions as a Full Stack Developer
            </p>
            <a href="mailto:hashiranasinghe11@gmail.com"
               className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Hashini Ranasinghe. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
