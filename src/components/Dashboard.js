import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import "./Dashboard.css";


function Dashboard(){

  const [data, setData] = useState([])

  useEffect(()=>{
    Axios.get('https://fakestoreapi.com/products')
    .then(res => {
      console.log("Data From Server::::",res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  },[])

  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.price}</td>
        <td>{data.description}</td>
        <td>{data.image}</td>
        <td>{data.rate}</td>
        <td>{data.count}</td>
        
      </tr>
    )
  })

  return (
    <table>
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Price</th>
    <th>Description</th>
    <th>Image</th>
    <th>Rate</th>
    <th>Count</th>
    
  </tr>
  {arr}
</table>
  )
}

export default Dashboard