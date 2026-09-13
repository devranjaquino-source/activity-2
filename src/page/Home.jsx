import Header from '../header/header.jsx'
import hundredIslands from '../assets/hundred-islands.jpg'

function Home() {
  return (
    <section id="home" className="hero-section">
      <Header />

      <div className="hero-grid">
        <div className="hero-panel">
          <p className="eyebrow"><span /> Discover the heart of Pangasinan</p>
          <h1>Where islands,<br />heritage, and adventure meet.</h1>
          <p className="hero-description">
            Journey through storied coastlines, living traditions, and natural wonders that make
            every corner of Pangasinan worth discovering.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#destinations">Explore destinations <span aria-hidden="true">→</span></a>
            <a className="text-action" href="#culture">Our stories <span aria-hidden="true">↗</span></a>
          </div>

          <div className="hero-stats" aria-label="Featured location">
            <div>
              <span className="location-pin" aria-hidden="true">●</span>
              <p><small>Featured destination</small>Hundred Islands National Park</p>
            </div>
            <p className="location-count"><strong>01</strong> / 04</p>
          </div>
        </div>

        <div className="hero-media">
          <img className="hero-background" src={hundredIslands} alt="Lush green islands across the blue waters of Hundred Islands National Park" />
          <div className="hero-overlay" />
        </div>
      </div>
    </section>
  )
}

export default Home
