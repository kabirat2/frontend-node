
import React from 'react'

const Product = () => {
  return (
    <div className="">
    <h1 className="text-primary fs-2 text-center">PRODUCT ITEM</h1>
    <div className="col-10 col-md-8 col-lg-6 mx-auto">
      <form action="" className=" mx-auto shadow p-4 ml-5"style={{ width: "500px" }}>
        <input type="text" placeholder="productName" className="form-control my-2 w-full"/>
        <input type="text" placeholder="productDescription" className="form-control my-2"/>
        <input type="text" placeholder="productPrice" className="form-control my-2"/>
        <input type="text" placeholder="productImage" className="form-control my-2"/>
        <input type="text" placeholder=" productCategory" className="form-control my-2"/>
        <button  type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Product

