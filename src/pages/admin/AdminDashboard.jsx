import React, { useState } from 'react'

const AdminDashboard = () => {

    //Make a state for product
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    //Image state
    const [productImage, setProductImage] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)

    //function to upload and preview image
    const handleImageUpload = (event) => {

        //0-file,1-name,2-Size
        const file = event.target.files[0]
        setProductImage(file)
        setPreviewImage(URL.createObjectURL(file))
    } 






    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between mt-2'>
                    <h2>Admin Dashboard</h2>

                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <label> Product Name</label>
                                        <input onChange={(e) => setProductName(e.target.value)} type='text' className='form-control' placeholder='Enter product Name'></input>

                                        <label className='mt-2'>Product Price</label>
                                        <input onChange={(e) => setProductPrice(e.target.value)} type='text' className='form-control' placeholder='Enter product Price'></input>

                                        <div className='mt-2'>
                                            <label>Select Category</label>
                                            <select className='form-control'>
                                                <option value="plants">Plants</option>
                                                <option value="gadgets">Gadgets</option>
                                                <option value="mobile">Mobile</option>
                                                <option value="electronics">Electronics</option>



                                            </select>
                                        </div>

                                        <label className='mt-2'>Type product description</label>
                                        <textarea className='form-control'></textarea>

                                        <label className='mt-2'>Product Image</label>
                                        <input onChange={handleImageUpload} type='file' className='form-control'/>

                                        {/* preview Image */}
                                        {
                                            previewImage && (
                                                <div className=''>
                                                    <img src={previewImage} alt="preview image" className='img-fluid rounded object-fit-cover mt-3'/>
                                                </div>
                                            )
                                        }




                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <table className='table'>
                    <thead className='table-dart'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name </th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>


                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img height={'40px'} width={'40px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAYKgQRDPyZUWjDzDpdmcg55hoRQ1pFOyQGa6FhAJlQ&s' alt='' />
                            </td>
                            <td>SunFlower</td>
                            <td>NPR.200</td>
                            <td>Plants</td>
                            <td>Imported from Canada</td>
                            <td>
                                <div className='btn-group' role='group'>
                                    <button className='btn btn-success'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>

                                </div>
                            </td>
                        </tr>
                    </tbody>


                </table>

            </div>
        </>
    )
}

export default AdminDashboard
