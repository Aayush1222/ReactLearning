import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between mt-2'>
                    <h2>Admin Dashboard</h2>
                    
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>

                  
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
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
                                <img height={'40px'} width={'40px'} src='https://www.pexels.com/photo/close-photography-of-red-and-pink-rose-56866/' alt='' />
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
