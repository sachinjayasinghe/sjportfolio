import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">SJ.</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sachin Jayasinghe</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="hero-description">
            Building creative web experiences with MongoDB, Express, React & Node.js
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      {/* Placeholder sections */}
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
        {/* <div className="about-stats">
          <div className="stat">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Technologies</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Commitment</p>
          </div>
        </div> */}
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
      
      <div className="project-card">
        <div className="project-image">
          <div className="project-overlay">
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>
        <div className="project-info">
          <h3>E-Commerce Platform</h3>
          <p>A full-stack e-commerce application with cart, payment integration, and admin dashboard.</p>
          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>

      

      <div className="project-card">
        <div className="project-image">
          <div className="project-overlay">
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>
        <div className="project-info">
          <h3>Task Management App</h3>
          <p>Real-time task tracker with drag-and-drop functionality and team collaboration features.</p>
          <div className="project-tags">
            <span>React</span>
            <span>Express</span>
            <span>Socket.io</span>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-image">
          <div className="project-overlay">
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>
        <div className="project-info">
          <h3>Social Media Dashboard</h3>
          <p>Analytics dashboard for social media metrics with charts and real-time data visualization.</p>
          <div className="project-tags">
            <span>React</span>
            <span>Chart.js</span>
            <span>REST API</span>
          </div>
        </div>
      </div>

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
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">💼</div>
          <div>
            <h4>LinkedIn</h4>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">💻</div>
          <div>
            <h4>GitHub</h4>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
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
        <p>© 2024 Your Name. Built with React & ❤️</p>
      </footer>
    </div>
  );
}

export default App;