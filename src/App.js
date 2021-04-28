import './App.css';
import React,{useState} from 'react'
import Data from './data.json'
import MyProducts from './Components/Products'
import FilterBySize from './Components/Filter'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Provider} from './hooks';
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { BsXCircleFill } from "react-icons/bs";

import ShoppingCardd from './Components/ShoppingCardModal/ShoppingCardPortal'
const customStyles = {
  content : {
    
    width:'70%',
    margin:'auto',
    overflowy: 'auto',

  }
};
function App() {
  const [Products,setProducts]= useState(Data.products);
  const [ShoppingCard,setShoppingCard]= useState([]);
  const [handleShoppingcart,sethandleShoppingcart]=useState(false)
  const [Count,setCount]=useState(1)
  const [ShowDataInModal,setShowDataInModal]=useState([])
  const [OpenModal_TOShowData,setOpenModal_TOShowData]=useState(false);

  const ShowDAta=(Mydta)=>{
    setShowDataInModal([Mydta])
    setOpenModal_TOShowData(true)
  }

  const Exit=()=>{
    sethandleShoppingcart(false)
        setOpenModal_TOShowData(false)

  }
  const Add_To_ShoppingCaed=(Product)=>{
    let alreadtInCart=false;
    ShoppingCard.forEach((item)=>{
      if(item._id===Product._id)
      {    
        alreadtInCart=true;
        setCount(prev=>prev+1)
      }
    })
    if(!alreadtInCart){
      console.log(alreadtInCart)
      setShoppingCard([...ShoppingCard,Product])
  }
  }
    const NewState_After_Filter=(Filter)=>{
      console.log(Filter)
      if(Filter==='') {
        setProducts(Data.products)
        }
      else{
        const NewProducts=Data.products.filter(el=>el.availableSizes.includes(Filter));
         setProducts(NewProducts)}}

         const DeleteHandelleer=(e,handel)=>{
          const handleDelete=ShoppingCard.filter((el,inedx)=>inedx!==handel )
          setShoppingCard(handleDelete)
          
        }
      
  return (
    <div className="grid-container">
      <header>
        <a href='/'>Shopping Cart</a> 
      <div className='Shopping_Cart' onClick={()=>sethandleShoppingcart(true)} style={{position:'relative'}}><AiOutlineShoppingCart color='#ffc000'  size={50} /><span className='ShopCArd' style={{position:'absolute'}}>{ShoppingCard.length}</span>

         </div> </header> 

<Fade bottom cascade>
        <main>
        <FilterBySize  count={Products.length} filter={NewState_After_Filter} />

          <div className='conntent'>
            <div className='main'><MyProducts ShowDataSpecific={ShowDAta} AddToCard={Add_To_ShoppingCaed} PRODUCTS={Products} /></div>

          </div>
        </main></Fade>

          <footer>All right is reserved</footer>
         <Modal
          style={customStyles}
          isOpen={handleShoppingcart}
         >
           <Provider value={{Fun:Exit}}>
           <Fade top cascade> <ShoppingCardd count={Count} deleteHandle={DeleteHandelleer} My_Products={ShoppingCard}/>             </Fade>

             </Provider>
         </Modal>

         <Modal 
           style={customStyles}
           isOpen={OpenModal_TOShowData}>
          
            
              {ShowDataInModal.map((ele,index)=>(
                <>
                <BsXCircleFill
                className="exit-item"
                color="gray"
                onClick={Exit}
                style={{
                  position: "absolute",
                  // backgroundColor:'gray',
                  right: 4,
                  top: 10,
                }}
              />
                      <div className='Show_content_inside_modal'>
                    <Zoom><img src={ele.image}alt=''/>
                           <div>
                          <h2>{ele.title}</h2>
                          <h3>{ele.description}</h3>
                          <h4>availableSizes:{ele.availableSizes.map(sizes=>(
                            <button className='buttonModal'>{sizes}</button>
                          ))}</h4>
                        <p style={{fontWeight:'bold'}}> {'$'+ele.price}</p>{'      '} 
                        </div>
                        </Zoom> 
                      </div>
                      </>
 ))}
         </Modal>
    </div>  
  );
}

export default App;
