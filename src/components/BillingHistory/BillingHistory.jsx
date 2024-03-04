import React, { useEffect, useState } from 'react'
import './BillingHistory.css'
import axios from 'axios'

function BillingHistory() {
  const [billingHistoryData, setBillingHistoryData] = useState()

  useEffect(() => {
    const fetchBillingHistoryData = async () => {
      const token = localStorage.getItem('token')
      try {
        const response = await axios.get('',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          })
        console.log(response);
        setBillingHistoryData(response.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchBillingHistoryData()
  }, [])


  return (
    <div>BillingHistory</div>
  )
}

export default BillingHistory