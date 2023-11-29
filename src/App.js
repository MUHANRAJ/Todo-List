
import './App.css';
import React, { useState } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {
  
 const [items,setItems] = useState(JSON.parse(localStorage.getItem('muhan_todo')) );
 const [newItem,setnewItem] = useState('')
           

              
            const handleCheck =(id) => {
              const listItems = items.map((item) =>
              item.id===id ? {...item, checked:!item.checked} : item)
              setItems(listItems)
              localStorage.setItem("muhan_todo",JSON.stringify(listItems))
            }
            const handleDelete = (id) => {
                const listItems = items.filter((item) => item.id !==id  )
                setItems(listItems)
                localStorage.setItem("muhan_todo",JSON.stringify(listItems))
             }
             const handleSubmit =(e) => {
              e.preventDefault()
              if(!newItem) return;
              console.log(newItem)
              addItem(newItem)
              setnewItem('')
             }
              const addItem =(item) => {
              const id=items.length ? items[items.length -1].id +1 : 1;
              const addNewItem ={id, checked:false, item}
              const listItems =[...items,addNewItem]
              setItems(listItems);
              localStorage.setItem("muhan_todo",JSON.stringify(listItems))
             }

  return (
    <div >
      
        <Header />
        <AddItem 
        newItem ={newItem}
        setnewItem={setnewItem}
        handleSubmit={handleSubmit}
        

        
        />
        <Content 
        items ={items}
        setItems ={setItems}
        handleCheck ={handleCheck}
        handleDelete ={handleDelete}
        
        />
       
        <Footer 
        length = {items.length}/>
    </div>
  );
}

export default App;
