import React from 'react'

function AccordionCard(props) {
    const { head,id, text } = props;
  return (
     <div class="accordion-item mt-2 w-100">
    <h2 class="accordion-header">
      <button class="accordion-button h5" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
        {head}
      </button>
    </h2>
    <div id={id} class="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {text}
      </div>
    </div>
  </div>
  )
}

export default AccordionCard