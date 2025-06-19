import React from 'react'

function HeroBanner() {
  return (
    <section class="hero-banner">
    <div class="carousel">
      <div class="overlay"></div> 
      <div class="carousel-slide slide1"></div>
      <div class="carousel-slide slide2"></div>
      <div class="carousel-slide slide3"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h2>Fresh Groceries Delivered to Your Door</h2>
        <p>Save time and shop with convenience. Get fresh produce, dairy, and more.</p>
        <a href="#" class="btn">Shop Now</a>
      </div>
    </div>
  </section>
  )
}

export default HeroBanner
