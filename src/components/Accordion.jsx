/* eslint-disable react/prop-types */
import { useState } from "react"
import AccordionItem from "./AccordionItem"

function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);

  function handleToggleText(num) {
    setCurOpen(curOpen => curOpen !== num ? num : null);
  }

  return (
    <div className="accordion">
      {faqs.map((e, i) => <AccordionItem faq={e} key={e.title} num={i} isOpen={curOpen} onHandleToggle={ handleToggleText} />)}
    </div>
  )
}

export default Accordion
