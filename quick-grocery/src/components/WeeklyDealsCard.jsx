import React from 'react'
import SpecialOffer from '../pages/SpecialOffer'

const WeeklyDealsCard =({fruit}) =>(
    <div className="product-card" key={fruit.id}>
                <div className="product-image">
                  <img src={fruit.images[0]} alt={fruit.name} />
                  <span className="badge">30% OFF</span>
                </div>
                <div className="product-info">
                  <h3>{fruit.name}</h3>
                  <p className="price">
                    ${fruit.price} <span>{fruit.unit}</span>
                  </p>
                  <p className="category">Fruits</p>
                  <a href="#" className="btn btn-small">Add to Cart</a>
                </div>
              </div>
)

export default WeeklyDealsCard
