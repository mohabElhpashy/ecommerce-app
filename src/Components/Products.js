import React from 'react'
function Products({PRODUCTS,AddToCard,ShowDataSpecific}) {
    return (
        <div>
            <ul className='Products'>
                {PRODUCTS.map(items=>{
                    return <li key={items._id}>
                                <div className='Product'>
                                   <a href={'#'+items._id}> 
                                   <img src={items.image} alt='' onClick={()=>ShowDataSpecific(items)}/>
                                   <p>{items.title}</p>
                                   </a>
                                   <div className='Product-Price'>
                                       <div> ${items.price}</div>
                                       <button onClick={()=>{AddToCard(items)}} className='Add_Button'>Add to Card</button>
                                   </div>
                                </div>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default Products
