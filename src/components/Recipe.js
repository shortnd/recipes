import React from 'react'

const Recipe = ({name, ingredients, steps}) => {
  const lowerCaseSlug = name => name.toLowerCase().replace(/ /g, '-')
  return (
    <section id={lowerCaseSlug(name)}>
      <h1>{name}</h1>
      <ul>
        {ingredients.map(({ name }, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <section className="instructions">
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section>
    </section>
  )
}

export default Recipe