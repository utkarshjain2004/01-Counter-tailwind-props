// src/App.jsx
import React from 'react'
import Card from './components/Card'

const cards = [
  {
    title: 'Optimized Performance',
    description: 'Blazing-fast load times keep your users happy and engaged.',
    imgUrl: 'https://unsplash.com/photos/digital-code-number-abstract-background-represent-coding-technology-and-programming-languages-D6P8FNyZxx4',
  },
  {
    title: 'Scalable Architecture',
    description: 'Grow from zero to millions of users without breaking a sweat.',
    imgUrl: 'https://source.unsplash.com/featured/?cloud,architecture',
  },
  {
    title: 'Modern UI & UX',
    description: 'Sleek, intuitive interfaces that delight on every device.',
    imgUrl: 'https://source.unsplash.com/featured/?design,interface',
  },
]

export default function App() {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl bg-green-500 p-3 rounded-md text-center text-white mb-6">
        Vite + Tailwind Showcase
      </h1>

      <div className="space-y-6">
        {cards.map((c, idx) => (
          <Card
            key={idx}
            title={c.title}
            description={c.description}
            imgUrl={c.imgUrl}
          />
        ))}
      </div>
    </div>
  )
}
