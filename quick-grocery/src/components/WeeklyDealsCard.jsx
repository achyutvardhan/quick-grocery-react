import React from 'react'
import SpecialOffer from '../pages/SpecialOffer'
import { Link } from 'react-router'

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
                  {/* <a href="#" >Add to Cart</a> */}
                  <Link to={`/ViewItem/${"Fruits"}/${fruit.name}`} className="btn btn-small">Add to Cart</Link>
                </div>
              </div>
)

export default WeeklyDealsCard
