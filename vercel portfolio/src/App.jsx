import './App.css'
import profileImage from './assets/profile.jpg'
import { useState } from 'react'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application powered by natural language processing (NLP) that enables real-time conversations with context understanding. The system uses advanced machine learning algorithms to process user inputs and generate human-like responses. Features include multi-turn conversation handling, sentiment analysis, and intent recognition. Built with a scalable architecture to handle multiple concurrent users.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '🤖',
      technologies: ['Python', 'TensorFlow', 'React', 'Flask', 'NLP']
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      description: 'A comprehensive mobile e-commerce platform featuring seamless payment integration, advanced product filtering, and secure user authentication. The app provides a smooth shopping experience with real-time inventory updates, personalized recommendations, and order tracking. Includes features like wishlist management, cart persistence, and push notifications for order updates and special offers.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '📱',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe API', 'Redux']
    },
    {
      id: 3,
      title: 'ML Image Recognition',
      description: 'A sophisticated machine learning model designed for image classification achieving 95% accuracy using convolutional neural networks (CNNs). The system can identify and categorize objects in images with high precision. Features include real-time image processing, batch classification, and model retraining capabilities. Utilizes transfer learning techniques and data augmentation for improved performance.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '🧠',
      technologies: ['Python', 'OpenCV', 'PyTorch', 'NumPy', 'Scikit-learn']
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-logo">PORTFOLIO</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#collection">Collection</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Full Stack Developer & <span>CS Student</span>
            </h1>
            <p>3rd Year Computer Science Student. Passionate about building responsive web applications, solving complex problems, and creating seamless user experiences. Specialized in modern web technologies and full-stack development.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">View Projects</button>
              <button className="btn btn-secondary">Contact Me</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-wrapper">
              <div className="ncs-ring ncs-ring-1"></div>
              <div className="ncs-ring ncs-ring-2"></div>
              <div className="ncs-ring ncs-ring-3"></div>
              <div className="ncs-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <div className="profile-circle" style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #ffd700',
                boxShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(212, 175, 55, 0.5), inset 0 0 30px rgba(255, 215, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 10
              }}>
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Projects Section */}
      <section className="recent-nft">
        <h2 className="section-title">View <span>Projects</span></h2>
        <p className="section-subtitle">Featured Work - Click a card to learn more</p>
        
        <div className="nft-grid">
          <div className="nft-card" onClick={() => openModal(projects[0])}>
            <div style={{
              width: '100%',
              height: '200px',
              background: projects[0].gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px'
            }}>{projects[0].icon}</div>
            <div className="nft-card-content">
              <div className="nft-card-title">{projects[0].title}</div>
              <p style={{color: '#999', fontSize: '11px', marginBottom: '8px'}}>Click to view details</p>
              <div className="tech-stack">
                {projects[0].technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="nft-card" onClick={() => openModal(projects[1])}>
            <div style={{
              width: '100%',
              height: '200px',
              background: projects[1].gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px'
            }}>{projects[1].icon}</div>
            <div className="nft-card-content">
              <div className="nft-card-title">{projects[1].title}</div>
              <p style={{color: '#999', fontSize: '11px', marginBottom: '8px'}}>Click to view details</p>
              <div className="tech-stack">
                {projects[1].technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="nft-card" onClick={() => openModal(projects[2])}>
            <div style={{
              width: '100%',
              height: '200px',
              background: projects[2].gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px'
            }}>{projects[2].icon}</div>
            <div className="nft-card-content">
              <div className="nft-card-title">{projects[2].title}</div>
              <p style={{color: '#999', fontSize: '11px', marginBottom: '8px'}}>Click to view details</p>
              <div className="tech-stack">
                {projects[2].technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <div style={{
                width: '100%',
                height: '250px',
                background: selectedProject.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>{selectedProject.icon}</div>
              
              <p className="modal-description">{selectedProject.description}</p>
              
              <h3 style={{color: '#d4af37', fontSize: '18px', marginBottom: '10px'}}>Technologies Used:</h3>
              <div className="modal-tech-stack">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="modal-tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contribution Section */}
      <section className="contribution">
        <div className="contribution-container">
          <div className="contribution-image">
            <div style={{
              width: '250px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              position: 'relative'
            }}>
              <div style={{
                fontSize: '100px',
                color: '#d4af37',
                opacity: 0.7
              }}>🗿</div>
            </div>
          </div>
          <div className="contribution-content">
            <h2>Contribution <span>3D Greek Statue Pack</span></h2>
            <p>Over 200 Greek style sculpture</p>
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section">
        <h2>
          <span>3D Greek Statue Pack</span><br />
          Over 200 Greek style<br />
          sculpture
        </h2>
        
        <div className="product-grid">
          <div className="product-card">
            <div style={{
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px'
            }}>🗿</div>
            <div className="product-card-label">Statue Avatar 1</div>
          </div>

          <div className="product-card">
            <div style={{
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(192, 160, 128, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px'
            }}>🗿</div>
            <div className="product-card-label">Statue Avatar 2</div>
          </div>

          <div className="product-card">
            <div style={{
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(155, 139, 126, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px'
            }}>🗿</div>
            <div className="product-card-label">Statue Avatar 3</div>
          </div>
        </div>

        <button className="btn btn-primary view-all-btn">View All</button>
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <h3>Let's Connect</h3>
        <p>Get in touch for collaborations or just a friendly hello</p>
        <div className="social-links">
          <a href="#" className="social-icon">f</a>
          <a href="#" className="social-icon">in</a>
          <a href="#" className="social-icon">tw</a>
          <a href="#" className="social-icon">ig</a>
          <a href="#" className="social-icon">📧</a>
        </div>
      </section>
    </>
  )
}

export default App
