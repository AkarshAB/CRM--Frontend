import React from 'react'

function ViewProduct() {
  return (
    <>
      <div style={{paddingTop:'100px'}}>
        <div className='container mt-3 mb-5'>
            <div className='row d-flex  align-items-center'>
            <div className='col-lg-1'></div>
                <div className='col-lg-4'>
                    <img height={'300px'} className='img-fluid' src='https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0' alt="img" />
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-6'>
                <h3 className='text-center'>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur eum temporibus consectetur reiciendis quaerat vitae, in, illum dolores maxime mollitia saepe, accusamus nemo totam maiores. Et dolore eos voluptates!</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ViewProduct