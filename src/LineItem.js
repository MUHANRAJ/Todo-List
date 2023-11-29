import React from 'react'

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={item.id}>
        <input  
        type='checkbox'
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
        
        />  
        <lable
        style = {(item.checked) ? {textDecoration: "line-through"}: null}
         onDoubleClick={() => handleCheck(item.id)}
        checked={item.checked}> 
        {item.item}</lable>
        <button
        onClick={() => handleDelete (item.id)}
        aria-label={`Delete ${item.item}`}
        tabIndex='0'>Delete</button>
      
      </li>
  )
}

export default LineItem