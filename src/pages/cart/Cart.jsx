import React from 'react'
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'

function Cart() {
  const cartitems = useSelector((state)=>state.cart)
    return (
        <>
            <div className='flex mx-auto max-w-4xl gap-4 py-8'>
                <div className='flex w-2/3 flex-col bg-gray-200'>
                {cartitems.map((pr) => (                  
                <div key={pr.id} className='flex p-4 bg-white rounded-lg shadow-md items-center gap-4'>                
                    <div className='flex p-6 '>
                        <img src={pr.imageUrl} alt="product-image" className=" rounded-lg sm:w-40" />
                    </div>
                <div className='flex-col justify-center px-4 p-6'>  
                    <h2 className='font-bold'>{pr.title}</h2>
                    <h2>{pr.description}</h2>
                    <h2>{pr.price}</h2>
                </div>               
                </div>    
                ))}                     
                </div>
        <div className='w-1/3 items-center bg-gray-200 rounded-lg flex-col justify-between'>
         <div className='p-2 '>       
            <div className="flex justify-between">
              <p className="text-gray-700" >Subtotal</p>
              <p className="text-gray-700" >₹100</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700" >Shipping</p>
              <p className="text-gray-700" >₹20</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold">₹200</p>
              </div>
            </div>
            </div>  
            {/* <Modal  /> */}
            <Modal /> 
                </div>
            </div>
        </ >

  )
}

export default Cart
