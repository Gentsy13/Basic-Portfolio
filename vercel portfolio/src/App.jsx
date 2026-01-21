import './App.css'
import profileImage from './assets/profile.jpg'

function App() {
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
              <div className="beat-ring"></div>
              <div className="beat-ring"></div>
              <div className="beat-ring"></div>
              <div className="beat-ring"></div>
              <div className="beat-ring"></div>
              <div className="profile-circle" style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid #ffd700',
                boxShadow: '0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.2)',
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
        <p className="section-subtitle">Featured Work</p>
        
        <div className="nft-grid">
          <div className="nft-card">
            <div style={{
              width: '100%',
              height: '300px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px'
            }}>🤖</div>
            <div className="nft-card-content">
              <div className="nft-card-title">AI Chat Application</div>
              <p style={{color: '#999', fontSize: '12px', marginBottom: '8px'}}>Intelligent chatbot with NLP integration for real-time conversations and context understanding</p>
              <div className="tech-stack">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">TensorFlow</span>
                <span className="tech-badge">React</span>
              </div>
            </div>
          </div>

          <div className="nft-card">
            <div style={{
              width: '100%',
              height: '300px',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px'
            }}>📱</div>
            <div className="nft-card-content">
              <div className="nft-card-title">E-Commerce Mobile App</div>
              <p style={{color: '#999', fontSize: '12px', marginBottom: '8px'}}>Full-featured mobile app with payment integration, product filtering, and user authentication</p>
              <div className="tech-stack">
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Node.js</span>
              </div>
            </div>
          </div>

          <div className="nft-card">
            <div style={{
              width: '100%',
              height: '300px',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px'
            }}>🧠</div>
            <div className="nft-card-content">
              <div className="nft-card-title">ML Image Recognition</div>
              <p style={{color: '#999', fontSize: '12px', marginBottom: '8px'}}>Machine learning model for image classification with 95% accuracy using convolutional neural networks</p>
              <div className="tech-stack">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">OpenCV</span>
                <span className="tech-badge">PyTorch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
