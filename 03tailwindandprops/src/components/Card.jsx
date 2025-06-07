// src/components/Card.jsx
import React from 'react'

export default function Card({ title, description, imgUrl }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full md:w-1/3 h-48 object-cover"
      />
      <div className="p-6 md:w-2/3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  )
}
