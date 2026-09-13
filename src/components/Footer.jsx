function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <img src="/logo.png" alt="QIBII Construction Services" className="footer-logo" />
          <p className="footer-slogan">Building beyond foundation, as one.</p>
          <p className="footer-tag">
            South African registered construction company providing professional services across commercial, 
            residential, civil and infrastructure projects
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Careers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Commercial</a></li>
            <li><a href="#services">Residential</a></li>
            <li><a href="#services">Renovation</a></li>
            <li><a href="#services">Civil & infrastructure</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>qibiiconstruction@gmail.com</li>
            <li>064 764-9305</li>
            <li>55 King Edward, Lombardy East, Johannesburg 2090</li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {year} Qibii Construction Services (Pty) Ltd. All rights reserved.</span>
        <span>Registered #CIPC-2026/445084/07</span>
      </div>
    </footer>
  )
}

export default Footer
