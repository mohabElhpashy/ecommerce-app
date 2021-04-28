      import React from 'react'
      import Fade from 'react-reveal/Fade'
      import './ShoppingCard.css'
      import {Consumer} from '../../hooks'
      import { BsXCircleFill } from "react-icons/bs";
      import {ImSad} from 'react-icons/im'
      // import Modal from 'react-modal'

      // const modal = document.getElementById("Portal-root");
      function ShoppingCardPortal({My_Products,deleteHandle,count}) {
      //     return ReactDOM.createPortal(
        return (
                  <div className='Modal-Content'>
                  <Consumer>
                  {item=>{
                    return  <BsXCircleFill
                    className="exit-item"
                    onClick={item.Fun}
                    style={{
                      position: "absolute",
                      color: "black",
                      left: 4,
                      top: 10,
                    }}
                  />
                  }}
                </Consumer>
                      <h1 className='H2'>Shopping Cart</h1>
                                <Fade top cascade>

                    {My_Products.length===0?<ImSad size={200}/>:
                  <>  {My_Products.map((ele,index)=>(
                      <div className='Show_content'>
                        <img src={ele.image}alt=''/>
                        <div>
                          <h2>{ele.title}</h2>
                        <p style={{fontWeight:'bold'}}> {'$'+ele.price}*{count}</p>{'      '} <button
                          onClick={(e)=>deleteHandle(e,index)}>Remove</button>
                        </div>
                      </div>
                    ))}
                    </>}  
                    </Fade>

                      </div> 


        )
              
            
      // ,
                              // modal

          
      }

      export default ShoppingCardPortal
