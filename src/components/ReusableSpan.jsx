import React from 'react'

const ReusableSpan = ({ title, parentId, childId, parentClass, childClass }) => {
  return (
    <span id={`${parentId}`} className={`${parentClass}`}>
        <span id={`${childId}`} className={`${childClass}`}>
          {title}
        </span>
    </span>
  )
}

export default ReusableSpan