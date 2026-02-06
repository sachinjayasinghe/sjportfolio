import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import ProjectDetail from './ProjectDetail';
import projectsData from './projectsData';
import ThemeToggle from './ThemeToggle';
import ColorPicker from './ColorPicker';
import themePresets from './themePresets';


function HomePage({ theme, toggleTheme, currentColor, onColorChange }) {
  return (
    <>
      {/* Navigation */}
     <nav className="navbar">
  <div className="logo">SJ.</div>
  <ul className="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    <li>
      <a href="/assets/Sachin Jayasinghe-Resume.pdf" download className="cv-download">
        Download CV
      </a>
    </li>
  </ul>
</nav>

      {/* New Hero Section with Photo */}
<section className="hero-animated">
  <div className="animated-background">
    <span className="name-left">SACHIN</span>
    <span className="name-right">JAYASINGHE</span>
  </div>
  <div className="hero-photo-container">
    <img src="/assets/sachin-photo.png" alt="Sachin Jayasinghe" className="hero-photo" />
  </div>
  
</section>



{/* Hero Section */}
<section className="hero">
  <div className="hero-content">
    <h1 className="hero-title">
      Hi, I'm <span className="highlight">Sachin Jayasinghe</span>
    </h1>
    <p className="hero-subtitle">Full-Stack Developer | MERN Stack</p>
    <p className="hero-description">
      IT Undergraduate passionate about building innovative web applications 
      and solving real-world problems through code. 
    </p>
    <div className="hero-buttons">
      <a href="#contact" className="cta-button">Get in Touch</a>
      <a href="/assets/Sachin Jayasinghe-CV.pdf" download className="cta-button secondary">
        Download CV
      </a>
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="section about-section">
  <div className="about-container">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>
          I'm <strong>Sachin Jayasinghe</strong>, a proactive IT undergraduate from the 
          University of Moratuwa with a strong focus on <strong>full-stack development</strong> using 
          the MERN stack. I specialize in designing end-to-end systems, integrating frontend 
          and backend components, and building user-friendly solutions that solve real-world problems.
        </p>
        <p>
          With experience leading team projects and working on IoT systems, I'm passionate 
          about creating impactful software through continuous learning and effective collaboration. 
          Currently seeking <strong>Software Engineer Internship</strong> opportunities to apply my 
          skills and contribute to innovative projects.
        </p>
        <div className="about-stats">
          <div className="stat">
            <h3>4+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>MERN</h3>
            <p>Stack Specialist</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="skills-container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">M</div>
              <h3>MongoDB</h3>
              <p>NoSQL Database</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">E</div>
              <h3>Express.js</h3>
              <p>Backend Framework</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">R</div>
              <h3>React</h3>
              <p>Frontend Library</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">N</div>
              <h3>Node.js</h3>
              <p>Runtime Environment</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">JS</div>
              <h3>JavaScript</h3>
              <p>Programming Language</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">Git</div>
              <h3>Git & GitHub</h3>
              <p>Version Control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="projects-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image" style={{
                    backgroundImage: `url(${project.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
        }}>
                  <div className="project-overlay">
                    <Link to={`/project/${project.id}`} className="project-link">
                      View Project →
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

  {/* Contact Section */}
<section id="contact" className="section contact-section">
  <div className="contact-container">
    <h2 className="section-title">Let's Connect</h2>
    <p className="contact-subtitle">
      I'm actively seeking Software Engineer Internship opportunities. 
      Let's collaborate and build something amazing together!
    </p>
    
    <div className="contact-content">
      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <div>
            <h4>Email</h4>
            <a href="mailto:sachindulara107@gmail.com">sachindulara107@gmail.com</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">📱</div>
          <div>
            <h4>Phone</h4>
            <a href="tel:+94764782785">+94 76 478 2785</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">💼</div>
          <div>
            <h4>LinkedIn</h4>
            <a href="https://linkedin.com/in/sachin-jay" target="_blank" rel="noopener noreferrer">linkedin.com/in/sachin-jay</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">💻</div>
          <div>
            <h4>GitHub</h4>
            <a href="https://github.com/sachinjayasinghe" target="_blank" rel="noopener noreferrer">github.com/sachinjayasinghe</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <div>
            <h4>Location</h4>
            <p style={{color: 'var(--text-secondary)', margin: 0}}>Bandaragama, Sri Lanka</p>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Sachin Jayasinghe. All rights reserved.</p>
        {/* Theme Toggle Button */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
       {/* Color Picker */}
      <ColorPicker currentColor={currentColor} onColorChange={onColorChange} />
    
      </footer>
    </>
  );
}

function App() {
  // Theme state management
  const [theme, setTheme] = useState('dark');
  const [currentColor, setCurrentColor] = useState('green');

  // Apply color theme to CSS variables
const applyColorTheme = (colorKey, themeMode) => {
  const colors = themePresets[colorKey][themeMode];
  const root = document.documentElement;
  
  root.style.setProperty('--bg-dark', colors.bgDark);
  root.style.setProperty('--bg-card', colors.bgCard);
  root.style.setProperty('--accent-primary', colors.accentPrimary);
  root.style.setProperty('--accent-secondary', colors.accentSecondary);
  root.style.setProperty('--text-primary', colors.textPrimary);
  root.style.setProperty('--text-secondary', colors.textSecondary);
  root.style.setProperty('--name-animation-color', colors.nameAnimationColor);  // Add this line
};

  // Load theme and color from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedColor = localStorage.getItem('themeColor') || 'green';
    
    setTheme(savedTheme);
    setCurrentColor(savedColor);
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    applyColorTheme(savedColor, savedTheme);
  }, []);

  // Toggle dark/light theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    applyColorTheme(currentColor, newTheme);
  };

  // Change color theme
  const handleColorChange = (colorKey) => {
    setCurrentColor(colorKey);
    localStorage.setItem('themeColor', colorKey);
    applyColorTheme(colorKey, theme);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                theme={theme} 
                toggleTheme={toggleTheme}
                currentColor={currentColor}
                onColorChange={handleColorChange}
              />
            } 
          />
          <Route 
            path="/project/:id" 
            element={
              <ProjectDetail 
                theme={theme} 
                toggleTheme={toggleTheme}
                currentColor={currentColor}
                onColorChange={handleColorChange}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;