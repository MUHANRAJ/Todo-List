import React from 'react'

const Footer = ({length}) => {
    
  return (
    <div>
    <footer>{length} List {length===1 ? "item" : "items"} in your list <br></br>
         
    
     </footer>  
    </div>
  )
}
export default Footer
