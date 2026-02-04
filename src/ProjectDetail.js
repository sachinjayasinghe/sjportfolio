import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import projectsData from './projectsData';
import ThemeToggle from './ThemeToggle';
import './ProjectDetail.css';

function ProjectDetail({ theme, toggleTheme }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="error-message">
          <h2>Project not found</h2>
          <Link to="/" className="back-button">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const currentProjectIndex = projectsData.findIndex(p => p.id === parseInt(id));
  const prevProject = projectsData[currentProjectIndex - 1];
  const nextProject = projectsData[currentProjectIndex + 1];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-detail">
      {/* Header with back button */}
      <div className="detail-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Portfolio
        </button>
      </div>

      {/* Project Title */}
      <div className="detail-hero">
        <h1>{project.title}</h1>
        <div className="detail-tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Image Gallery with Navigation */}
      <div className="image-gallery">
        <button className="gallery-nav prev" onClick={prevImage}>←</button>
        <div className="gallery-main">
          <img src={project.images[currentImageIndex]} alt={`${project.title} screenshot ${currentImageIndex + 1}`} />
          <div className="image-counter">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>
        <button className="gallery-nav next" onClick={nextImage}>→</button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="thumbnail-strip">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={currentImageIndex === index ? 'active' : ''}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      {/* Project Details */}
      <div className="detail-content">
        <div className="detail-section">
          <h2>About This Project</h2>
          <p>{project.fullDescription}</p>
        </div>

        <div className="detail-section">
          <h2>Technical Contributions</h2>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="detail-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
            <span>💻</span> View on GitHub
          </a>
          
        </div>
      </div>

      {/* Project Navigation */}
      <div className="project-navigation">
        {prevProject && (
          <Link to={`/project/${prevProject.id}`} className="nav-project prev-project">
            <span className="nav-arrow">←</span>
            <div className="nav-project-info">
              <p>Previous Project</p>
              <h3>{prevProject.title}</h3>
            </div>
          </Link>
        )}
        {nextProject && (
          <Link to={`/project/${nextProject.id}`} className="nav-project next-project">
            <div className="nav-project-info">
              <p>Next Project</p>
              <h3>{nextProject.title}</h3>
            </div>
            <span className="nav-arrow">→</span>
          </Link>
        )}
      </div>
       {/* Project Navigation */}
      <div className="project-navigation">
        {/* ... existing code ... */}
      </div>

      {/* Theme Toggle Button */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      
    </div>
  );
}

export default ProjectDetail;