import React from 'react'

const SuggestionButtons = ({ items }) => {
  return (
    <div className='suggestion-btn '>

      {
        items.map((item, id) => (
          <button key={id}>{item}</button>

        ))
      }

    </div>
  )
}



export default SuggestionButtons
