import React from 'react'
import "./Features.css"

//Array of Objects
const features = [
  {
    title: "AI Chat Assistant",
    description: "Build conversational AI assistants for customer support, education, or productivity.",
    icon: "💬",
    list: [
      "Natural conversations",
      "Customizable personality",
      "Context-aware responses"
    ]
  },
  {
    title: "Content Generator",
    description: "Generate blog posts, emails, reports, or other text content with AI.",
    icon: "📝",
    list: [
      "Multiple content types",
      "SEO optimized",
      "Brand voice matching"
    ]
  },
  {
    title: "Image Creator",
    description: "Create AI-powered images and artwork based on your prompts.",
    icon: "🖼️",
    list: [
      "Multiple art styles",
      "High resolution output",
      "Commercial use ready"
    ]
  },
];

const Features = () => {
  return (
    <section className='features'>
      <h2 className='features-heading'>Three Powerful AI App Types</h2>
      <div className="features-list">
        {features.map((item) => (
          <div className="feature-card" key={item.title}>
            <div className="feature-icon">{item.icon}</div>
            <div className="feature-title">{item.title}</div>
            <div className="feature-desc">{item.description}</div>
            <ul className='feature-list'>
              {item.list.map((point, idx) => (
                <li key={idx}>
                  <span className='tick'>✓</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Features