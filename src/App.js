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
    <span className="name-left">Sachin</span>
    <span className="name-right">Jayasinghe</span>
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
          <p className="hero-subtitle">MERN Stack Developer</p>
          <p className="hero-description">
            Building creative web experiences with MongoDB, Express, React & Node.js
          </p>
          <div className="hero-buttons">
  <a href="#contact" className="cta-button">Get in Touch</a>
  <a href="/assets/Sachin Jayasinghe-Resume.pdf" download className="cta-button secondary">
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
                I'm a passionate <strong>MERN Stack Developer</strong> who loves building 
                modern, responsive web applications. With expertise in MongoDB, Express.js, 
                React, and Node.js, I create full-stack solutions that are both functional 
                and beautiful.
              </p>
              <p>
                Currently seeking internship opportunities where I can contribute to 
                innovative projects and continue growing my skills in web development.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>2</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="stat">
                  <h3>4+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>20+</h3>
                  <p>Technologies</p>
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
            I'm currently looking for internship opportunities. Let's build something amazing together!
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
                <div className="contact-icon">💼</div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/sachin-jayasinghe" target="_blank" rel="noopener noreferrer">linkedin.com/in/sachin-jayasinghe</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/sachinjayasinghe" target="_blank" rel="noopener noreferrer">github.com/sachinjayasinghe</a>
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
        <p>© 2025 Sachin Jayasinghe. All rights reserved.</p>
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