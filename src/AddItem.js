import React from 'react'

const AddItem = ({newItem,setnewItem,handleSubmit}) => {
  return (
  <form className='addForm' onSubmit={handleSubmit}> 
    <label htmlFor='addItem'> Add Item</label>
    <input
    autoFocus
    type='text'
    placeholder='Add Item'
    required
    value={newItem}
    onChange={(e) => setnewItem (e.target.value)}
    
    />
    <button id='bu'
    type='submit' 
    aria-label='Add Item'
    
    > + </button>

  </form>
  )
}

export default AddItem