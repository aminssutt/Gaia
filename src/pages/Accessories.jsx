import React, { useState } from 'react'
import './Accessories.css'

function Accessories({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const accessories = [
    {
      id: 1,
      name: 'Pillow Massage',
      description: 'Therapeutic massage pillow for comfort and relaxation',
      price: '$49.99',
      image: '🛏️',
      features: ['Automatic massage', 'Built-in heating', 'Bluetooth connectivity']
    },
    {
      id: 2,
      name: 'Scent Diffuser',
      description: 'Aroma diffuser to create a relaxing atmosphere',
      price: '$15.99',
      image: '🌸',
      features: ['Color LED', 'Automatic timer', 'Essential oils included']
    },
    {
      id: 3,
      name: 'Fresh Air Purifier',
      description: 'Portable air purifier for a healthy environment',
      price: '$39.99',
      image: '💨',
      features: ['HEPA filter', 'Ionization', 'Air quality sensor']
    },
    {
      id: 4,
      name: 'Smart Collab Device',
      description: 'Intelligent collaboration and wellness device',
      price: '$199.99',
      image: '🤝',
      features: ['Built-in AI', 'Health tracking', 'Advanced connectivity']
    }
  ]

  const nextAccessory = () => {
    setCurrentIndex((prev) => (prev + 1) % accessories.length)
  }

  const prevAccessory = () => {
    setCurrentIndex((prev) => (prev - 1 + accessories.length) % accessories.length)
  }

  const currentAccessory = accessories[currentIndex]

  return (
    <div className="accessories-page fade-in">
      <div className="accessories-header">
        <button className="back-btn" onClick={() => onNavigate('main')}>
          ← Back
        </button>
        <h1>Accessories</h1>
      </div>

      <div className="accessories-content">
        <div className="accessories-nav">
          <button className="nav-btn prev" onClick={prevAccessory}>
            ←
          </button>
          
          <div className="accessories-grid">
            {accessories.map((accessory, index) => (
              <div 
                key={accessory.id}
                className={`accessory-card ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="accessory-image">{accessory.image}</div>
                <h3>{accessory.name}</h3>
                <p className="accessory-price">{accessory.price}</p>
              </div>
            ))}
          </div>
          
          <button className="nav-btn next" onClick={nextAccessory}>
            →
          </button>
        </div>

        <div className="accessory-details">
          <div className="accessory-main">
            <div className="accessory-hero">
              <div className="accessory-hero-image">{currentAccessory.image}</div>
              <h2>{currentAccessory.name}</h2>
              <p className="accessory-description">{currentAccessory.description}</p>
              <p className="accessory-price-large">{currentAccessory.price}</p>
            </div>
            
            <div className="accessory-features">
              <h3>Features</h3>
              <ul>
                {currentAccessory.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="accessory-actions">
            <button className="purchase-btn">
              🛒 Buy Now
            </button>
            <button className="wishlist-btn">
              ❤️ Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accessories
