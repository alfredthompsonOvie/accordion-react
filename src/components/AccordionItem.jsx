/* eslint-disable react/prop-types */
function AccordionItem({ faq, num, isOpen, onHandleToggle }) {

  return (
    <div className={`item ${isOpen === num ? 'open': ''}`} onClick={()=>onHandleToggle(num)}>
      <p className="number">{num < 9 ? "0" + (num + 1) : num+1 }</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{isOpen === num ? "-" : "+"}</p>
      {isOpen === num ? <div className="content-box">

      {faq.text}
      </div> : null}
    </div>
  )
}

export default AccordionItem;
