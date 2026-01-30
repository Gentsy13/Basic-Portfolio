import './App.css'
import profileImage from './assets/profile.jpg'
import aiChatIcon from './assets/ai-chat.svg'
import ecommerceIcon from './assets/ecommerce.svg'
import mlBrainIcon from './assets/ml-brain.svg'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application powered by natural language processing (NLP) that enables real-time conversations with context understanding. The system uses advanced machine learning algorithms to process user inputs and generate human-like responses. Features include multi-turn conversation handling, sentiment analysis, and intent recognition. Built with a scalable architecture to handle multiple concurrent users.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: aiChatIcon,
      technologies: ['Python', 'TensorFlow', 'React', 'Flask', 'NLP']
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      description: 'A comprehensive mobile e-commerce platform featuring seamless payment integration, advanced product filtering, and secure user authentication. The app provides a smooth shopping experience with real-time inventory updates, personalized recommendations, and order tracking. Includes features like wishlist management, cart persistence, and push notifications for order updates and special offers.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: ecommerceIcon,
      technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe API', 'Redux']
    },
    {
      id: 3,
      title: 'ML Image Recognition',
      description: 'A sophisticated machine learning model designed for image classification achieving 95% accuracy using convolutional neural networks (CNNs). The system can identify and categorize objects in images with high precision. Features include real-time image processing, batch classification, and model retraining capabilities. Utilizes transfer learning techniques and data augmentation for improved performance.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: mlBrainIcon,
      technologies: ['Python', 'OpenCV', 'PyTorch', 'NumPy', 'Scikit-learn']
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // EmailJS configuration
    const serviceId = 'service_7kmlvux';
    const templateId = 'template_0vj2ywr';
    const publicKey = 'LEUk-rHxD4i7YFgRk';

    const templateParams = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      to_email: 'ajlomocsool@gmail.com'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        e.target.reset(); // Reset form fields
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus({
          type: 'error',
          message: 'Failed to send message. Please try again or email me directly.'
        });
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-logo">PORTFOLIO</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Full Stack Developer & <span>CS Student</span>
            </h1>
            <p>3rd Year Computer Science Student. Passionate about building responsive web applications, solving complex problems, and creating seamless user experiences. Specialized in modern web technologies and full-stack development.</p>
            <div className="hero-buttons">
              <a href="#projects" style={{textDecoration: 'none'}}>
                <button className="btn btn-primary">View Projects</button>
              </a>
              <a href="#contact" style={{textDecoration: 'none'}}>
                <button className="btn btn-secondary">Contact Me</button>
              </a>
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
      <section className="recent-nft" id="projects">
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
              padding: '30px'
            }}>
              <img src={projects[0].icon} alt={projects[0].title} style={{width: '120px', height: '120px'}} />
            </div>
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
              padding: '30px'
            }}>
              <img src={projects[1].icon} alt={projects[1].title} style={{width: '120px', height: '120px'}} />
            </div>
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
              padding: '30px'
            }}>
              <img src={projects[2].icon} alt={projects[2].title} style={{width: '120px', height: '120px'}} />
            </div>
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
                borderRadius: '8px',
                marginBottom: '20px',
                padding: '40px'
              }}>
                <img src={selectedProject.icon} alt={selectedProject.title} style={{width: '160px', height: '160px'}} />
              </div>
              
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

      {/* Currently Learning Section */}
      <section className="learning-section" id="learning">
        <h2 className="section-title">Currently <span>Learning</span></h2>
        <p className="section-subtitle">Upcoming Technologies & Skills</p>
        
        <div className="learning-grid">
          <div className="learning-card">
            <div className="learning-icon">🚀</div>
            <h3>Next.js 15</h3>
            <p>Advanced React framework for production-grade applications</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-icon">🐳</div>
            <h3>Docker & Kubernetes</h3>
            <p>Container orchestration and deployment automation</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-icon">⚡</div>
            <h3>GraphQL</h3>
            <p>Modern API query language and runtime</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-icon">🔷</div>
            <h3>TypeScript</h3>
            <p>Strongly typed JavaScript for better development</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-icon">☁️</div>
            <h3>AWS Cloud</h3>
            <p>Amazon Web Services cloud computing platform</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-icon">🧪</div>
            <h3>Jest & Testing</h3>
            <p>Unit testing and test-driven development</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="future-projects-section" id="contact">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">Let's work together on your next project</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:ajlomocsool@gmail.com">ajlomocsool@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <h3>GitHub</h3>
              <a href="https://github.com/gentsy13" target="_blank" rel="noopener noreferrer">github.com/gentsy13</a>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <a href="tel:+639662144598">+63 966 214 4598</a>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              
              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
