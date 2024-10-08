import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

const Add = () => {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: '',
    rating: ''
  })

  let fetchValue = (e) => {
    // console.log(event);
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  let sentData = () => {
    console.log(product);
  }

  return (

    // <button>Add New</button>
    <Box sx={{ padding: '2% 5% 2% 5%', backgroundColor: 'rgba(255, 255, 255, 0.888)', margin: '2px 450px 2px 450px' }}>
      <h2>New Product</h2><br />

      <TextField id="outlined-basic"
        // onChange={ }
        // value={product.empId}
        label="Product Name"
        variant="outlined"
        name="title"
        onChange={fetchValue} /><br /><br />

      <TextField id="outlined-basic"
        // value={product.empName} 
        label="Image URL"
        variant="outlined"
        name="image"
        onChange={fetchValue} /><br /><br />

      <TextField id="outlined-basic"
        // value={product.empDept} 
        label="Price"
        variant="outlined"
        name="price"
        onChange={fetchValue} /><br /><br />

      <TextField id="outlined-basic"
        // value={product.empLoc} 
        label="Rating"
        variant="outlined"
        name="rating"
        onChange={fetchValue} /><br /><br />

      <Button onClick={sentData} variant="contained">SUBMIT</Button>
    </Box>
  )
}

export default Add

