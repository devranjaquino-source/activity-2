import { useMemo, useState } from 'react'
import hundredIslands from '../assets/hundred-islands.jpg'
import balungaoHotSpring from '../assets/balungao-hot-spring.jpg'
import manaoagChurch from '../assets/manaoag-church.jpg'
import patarBeach from '../assets/patar-beach.jpg'

const attractions = [
  {
    name: 'Hundred Islands National Park',
    location: 'Alaminos City',
    category: 'Island adventure',
    image: hundredIslands,
    description: 'Cruise through emerald islets, hidden coves, and clear waters made for swimming and kayaking.',
  },
  {
    name: 'Balungao Hot Spring',
    location: 'Balungao',
    category: 'Wellness & nature',
    image: balungaoHotSpring,
    description: 'Unwind in warm spring pools surrounded by the green slopes of Mount Balungao.',
  },
  {
    name: 'Minor Basilica of Our Lady of Manaoag',
    location: 'Manaoag',
    category: 'Faith & heritage',
    image: manaoagChurch,
    description: 'Discover a beloved pilgrimage church and an enduring center of faith in Pangasinan.',
  },
  {
    name: 'Patar White Beach',
    location: 'Bolinao',
    category: 'Beach retreat',
    image: patarBeach,
    description: 'Slow down beside golden-white sand, clear blue water, and unforgettable West Philippine Sea sunsets.',
  },
]

function Destination() {
  const [query, setQuery] = useState('')

  const filteredAttractions = useMemo(() => {
    const search = query.trim().toLowerCase()
    if (!search) return attractions
    return attractions.filter((attraction) => attraction.name.toLowerCase().includes(search))
  }, [query])

  return (
    <section id="destinations" className="destinations-section page-section">
      <div className="section-heading">
        <div>
          <p className="section-label">Choose your next story</p>
          <h2>Explore Pangasinan</h2>
        </div>
        <p>Search the province’s iconic islands, heritage landmarks, restorative springs, and coastal escapes.</p>
      </div>

      <label className="destination-search">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 5 5" />
        </svg>
        <span className="sr-only">Search destinations by name</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by destination name…"
        />
        {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear destination search">×</button>}
      </label>

      <p className="search-summary" aria-live="polite">
        Showing {filteredAttractions.length} {filteredAttractions.length === 1 ? 'destination' : 'destinations'}
      </p>

      {filteredAttractions.length > 0 ? (
        <div className="destination-grid">
          {filteredAttractions.map((attraction, index) => (
            <article className="destination-card" key={attraction.name}>
              <div className="card-image-wrap">
                <img src={attraction.image} alt={`${attraction.name} in ${attraction.location}, Pangasinan`} />
                <span>{attraction.category}</span>
                <p>{String(index + 1).padStart(2, '0')}</p>
              </div>
              <div className="card-content">
                <p className="card-location"><span aria-hidden="true">●</span> {attraction.location}, Pangasinan</p>
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
                <a href="#plan">Plan a visit <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <span aria-hidden="true">⌕</span>
          <h3>No destination found</h3>
          <p>Try another name, such as “Bolinao,” “Hundred Islands,” or “Manaoag.”</p>
          <button type="button" onClick={() => setQuery('')}>View all destinations</button>
        </div>
      )}
    </section>
  )
}

export default Destination
