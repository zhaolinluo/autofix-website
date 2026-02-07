import React, { useState } from 'react'
import './Reviews.css'

import user_1 from '../../assets/zee.jpg'
import user_2 from '../../assets/lana.jpg'
import user_3 from '../../assets/marti.JPEG'
import user_4 from '../../assets/cooper.jpg'

import next_icon from '../../assets/next.png'
import back_icon from '../../assets/back.jpeg'

const Reviews = () => {
  const [index, setIndex] = useState(0)

  const reviews = [
    { img: user_1, name: 'Zhaolin Luo', location: 'Troy MI', text: "I love this place"},
    { img: user_2, name: 'Lana', location: 'Detroit MI', text: "They did an amazing job"},
    { img: user_3, name: 'Marti', location: 'Ann Arbor MI', text: "Great repairs by great people"},
    { img: user_4, name: 'Cooper', location: 'Royal Oak MI', text: "Thank you for the wonderful transmission repair."}
  ]

  const reviewText = () =>{
      const [index, setIndex] = useState(0)
      { ""}
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="reviews">
      <h2>What our customers say about us</h2>

      <img src={next_icon} className="next_btn" onClick={nextSlide} />
      <img src={back_icon} className="back_btn" onClick={prevSlide} />

      <div className="slider">
        <ul style={{ transform: `translateX(-${index * 100}%)` }}>
          {reviews.map((review, i) => (
            <li key={i}>
              <div className="slide">
                <div className="user-info">
                  <img src={review.img} alt={review.name} />
                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.location}</span>
                  </div>
                </div>
                <p>{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Reviews
